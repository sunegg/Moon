"use strict";
cc._RF.push(module, '86cce7eQS5M4o75S+u0/tFy', 'GameManager');
// scripts/GameManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.score = 0;
        _this.stairStartPos = 450;
        _this.isJump = false;
        _this.canSpawn = false;
        return _this;
    }
    GameManager_1 = GameManager;
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        var _this = this;
        GameManager_1.instance = this;
        this.gameOver = false;
        this.node.on("gameOver", function () {
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
        }, this);
        this.node.on("addMoon", function (score) {
            // cc.log("addScore");
            cc.audioEngine.play(this.scoreSfx, false, 1);
            this.score += score;
            this.scoreLabel.string = this.score.toString();
        }, this);
        this.node.on("addScore", function (score) {
            // cc.log("addScore");
            cc.audioEngine.play(this.scoreSfx, false, 1);
            this.addScore(score);
            this.canSpawn = true;
            this.nextStair.type = cc.RigidBodyType.Dynamic;
        }, this);
        this.node.on("spawnStair", function () {
            if (_this.canSpawn) {
                _this.canSpawn = false;
                _this.spawnStair();
            }
        }, this);
        this.node.on("jump", function () {
            if (!this.isJump) {
                //  cc.log("player jump");
                cc.audioEngine.play(this.jumpSfx, false, 2);
                this.currentStair.type = cc.RigidBodyType.Dynamic;
                this.currentStair.linearDamping = 0;
                this.currentStair.gravity = 2;
                this.currentStair = this.nextStair;
                this.isJump = true;
            }
        }, this);
    };
    GameManager.prototype.addScore = function (score) {
        if (this.isJump) {
            this.score += score;
            this.scoreLabel.string = this.score.toString();
            Jump_1.default.instance.node.emit("addScore");
            //setTimeout(() => {
            //   this.spawnStair();
            // }, 1500); 
            this.isJump = false;
        }
    };
    GameManager.prototype.spawnStair = function () {
        if (!this.gameOver) {
            var nextStair = RandomSpawner_1.default.instance.spawn().getComponent(cc.RigidBody);
            this.nextStair = nextStair;
        }
    };
    GameManager.prototype.update = function (dt) {
        if (!this.gameOver)
            // cc.log(this.currentStair.node.position.y + "," + this.stairStartPos);
            if (this.currentStair.node.position.y > this.stairStartPos) {
                this.currentStair.gravityScale = 2000;
            }
            else {
                this.currentStair.gravityScale = 10;
            }
    };
    var GameManager_1;
    GameManager.currentGoal = 16;
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
        property
    ], GameManager.prototype, "score", void 0);
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