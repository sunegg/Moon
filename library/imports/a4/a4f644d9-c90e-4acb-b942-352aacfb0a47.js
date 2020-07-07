"use strict";
cc._RF.push(module, 'a4f64TZyQ5Ky7lCNSqs+wpH', 'bug');
// scripts/bug.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Jump_1 = require("./Jump");
var RandomSpawner_1 = require("./RandomSpawner");
var GameData_1 = require("./GameData");
var AutoPatrol_1 = require("./AutoPatrol");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        //static currentGoal: number = 16;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.patrol = null;
        _this.stairStartPos = 450;
        // isJump = false;
        //isDrop = true;
        _this.isSpawn = true;
        return _this;
    }
    GameManager_1 = GameManager;
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        GameData_1.default.score = 0;
        // GameData.platformScale = 1;
        //  GameData.patrolSpeed = 1;
        GameManager_1.instance = this;
        this.gameOver = false;
        this.node.on("gameOver", function () {
            // setTimeout(() => {
            if (!this.gameOver) {
                this.gameOver = true;
                // console.log('game over');
                cc.audioEngine.play(this.gameOverSfx, false, 1);
                this.gameOverView.active = true;
                if (this.currentStair.node != null)
                    this.currentStair.node.destroy();
                if (this.nextStair.node != null)
                    this.nextStair.node.destroy();
            }
        }, 
        // 500
        // );
        //},
        this);
        this.node.on("spawnStair", function () {
            if (!this.isSpawn && GameData_1.default.score >= 1) {
                this.isSpawn = true;
                this.spawnStair();
                // this.isJump = false;
            }
        }, this);
        this.node.on("addScore", function (score) {
            // cc.log("addScore");
            cc.audioEngine.play(this.scoreSfx, false, 1);
            this.addScore(score);
            this.nextStair.type = cc.RigidBodyType.Dynamic;
        }, this);
        this.node.on("addMoon", function (score) {
            // cc.log("addScore");
            cc.audioEngine.play(this.scoreSfx, false, 1);
            GameData_1.default.score += score;
            this.scoreLabel.string = GameData_1.default.score.toString();
        }, this);
        this.node.on("jump", function () {
            //  if (!this.isJump) {
            //  cc.log("player jump");
            cc.audioEngine.play(this.jumpSfx, false, 2);
            this.currentStair.type = cc.RigidBodyType.Dynamic;
            this.currentStair.linearDamping = 0;
            this.currentStair.gravity = 2;
            this.currentStair = this.nextStair;
            // this.isJump = true;
            //  }
        }, this);
    };
    GameManager.prototype.addScore = function (score) {
        if (GameData_1.default.score >= 10) {
            this.patrol.enabled = true;
        }
        //if (this.isJump) {
        GameData_1.default.score += score;
        this.scoreLabel.string = GameData_1.default.score.toString();
        Jump_1.default.instance.node.emit("addScore");
        this.isSpawn = false;
        /*  setTimeout(() => {
            if (!this.isSpawn) {
              this.isSpawn = true;
              this.spawnStair();
              this.isJump = false;
            }
           // this.spawnStair();
          }, 1500); */
        // }
    };
    GameManager.prototype.spawnStair = function () {
        if (!this.gameOver) {
            var nextStair = RandomSpawner_1.default.instance.spawn().getComponent(cc.RigidBody);
            this.nextStair = nextStair;
        }
    };
    GameManager.prototype.update = function (dt) {
        if (!this.gameOver) {
            cc.log("startdrop" + this.currentStair.node.position.y + "/" + this.stairStartPos);
            // cc.log(this.currentStair.node.position.y + "," + this.stairStartPos);
            if (this.currentStair.node.position.y > this.stairStartPos) {
                cc.log("drop" + dt);
                // this.isDrop = true;
                this.currentStair.gravityScale = 2000;
            }
            else {
                // this.isDrop = false;
                this.currentStair.gravityScale = 10;
            }
        }
    };
    var GameManager_1;
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "gameOverView", void 0);
    __decorate([
        property(cc.RigidBody)
    ], GameManager.prototype, "currentStair", void 0);
    __decorate([
        property(cc.RigidBody)
    ], GameManager.prototype, "nextStair", void 0);
    __decorate([
        property(AutoPatrol_1.default)
    ], GameManager.prototype, "patrol", void 0);
    __decorate([
        property
    ], GameManager.prototype, "stairStartPos", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "scoreSfx", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "gameOverSfx", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "jumpSfx", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();