
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bug.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxvQkFBVSxDQUFDOytDQUNLO0lBRzFCO1FBREMsUUFBUTtzREFDbUI7SUFTNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDRTtJQUtyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNBO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ0c7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDRDtJQXZDSCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUsvQjtJQUFELGtCQUFDO0NBaktELEFBaUtDLENBakt3QyxFQUFFLENBQUMsU0FBUyxHQWlLcEQ7a0JBaktvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBKdW1wIGZyb20gXCIuL0p1bXBcIjtcbmltcG9ydCBSYW5kb21TcGF3bmVyIGZyb20gXCIuL1JhbmRvbVNwYXduZXJcIjtcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi9HYW1lRGF0YVwiO1xuaW1wb3J0IEF1dG9QYXRyb2wgZnJvbSBcIi4vQXV0b1BhdHJvbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gIC8vc3RhdGljIGN1cnJlbnRHb2FsOiBudW1iZXIgPSAxNjtcblxuICBzdGF0aWMgaW5zdGFuY2U6IEdhbWVNYW5hZ2VyO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lT3ZlclZpZXc6IGNjLk5vZGU7XG5cbiAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSlcbiAgY3VycmVudFN0YWlyOiBjYy5SaWdpZEJvZHk7XG5cbiAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSlcbiAgbmV4dFN0YWlyOiBjYy5SaWdpZEJvZHk7XG5cbiAgQHByb3BlcnR5KEF1dG9QYXRyb2wpXG4gIHBhdHJvbDogQXV0b1BhdHJvbCA9IG51bGw7XG4gIFxuICBAcHJvcGVydHlcbiAgc3RhaXJTdGFydFBvczogbnVtYmVyID0gNDUwO1xuXG4gLy8gaXNKdW1wID0gZmFsc2U7XG5cbiAgLy9pc0Ryb3AgPSB0cnVlO1xuXG4gIGlzU3Bhd24gPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc2NvcmVMYWJlbDogY2MuTGFiZWw7XG5cbiAgZ2FtZU92ZXI6IGZhbHNlO1xuICBcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgc2NvcmVTZng6IGNjLkF1ZGlvQ2xpcDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBnYW1lT3ZlclNmeDogY2MuQXVkaW9DbGlwO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGp1bXBTZng6IGNjLkF1ZGlvQ2xpcDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgb25Mb2FkKCkge1xuICAgIEdhbWVEYXRhLnNjb3JlID0gMDtcbiAgICAgLy8gR2FtZURhdGEucGxhdGZvcm1TY2FsZSA9IDE7XG4gICAgLy8gIEdhbWVEYXRhLnBhdHJvbFNwZWVkID0gMTtcbiAgICBHYW1lTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgXCJnYW1lT3ZlclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2FtZSBvdmVyJyk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZU92ZXJTZngsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJWaWV3LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhaXIubm9kZSAhPSBudWxsKVxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHRTdGFpci5ub2RlICE9IG51bGwpXG4gICAgICAgICAgICAgIHRoaXMubmV4dFN0YWlyLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgLy8gNTAwXG4gICAgICAgLy8gKTtcbiAgICAgIC8vfSxcbiAgICAgIHRoaXMpO1xuICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgIFwic3Bhd25TdGFpclwiLFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NwYXduICYmIEdhbWVEYXRhLnNjb3JlPj0xKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTcGF3biA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMuc3Bhd25TdGFpcigpO1xuICAgICAgICAgICAgIC8vIHRoaXMuaXNKdW1wID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICBcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICBcImFkZFNjb3JlXCIsXG4gICAgICBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAvLyBjYy5sb2coXCJhZGRTY29yZVwiKTtcbiAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2NvcmVTZngsZmFsc2UsMSk7XG4gICAgICAgICAgdGhpcy5hZGRTY29yZShzY29yZSk7XG4gICAgICAgICAgdGhpcy5uZXh0U3RhaXIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICBcImFkZE1vb25cIixcbiAgICAgIGZ1bmN0aW9uIChzY29yZSkge1xuICAgICAgIC8vIGNjLmxvZyhcImFkZFNjb3JlXCIpO1xuICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zY29yZVNmeCxmYWxzZSwxKTtcbiAgICAgICBHYW1lRGF0YS5zY29yZSs9IHNjb3JlO1xuICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSAgR2FtZURhdGEuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICAgIFwianVtcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gIGlmICghdGhpcy5pc0p1bXApIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllciBqdW1wXCIpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuanVtcFNmeCxmYWxzZSwyKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyLmxpbmVhckRhbXBpbmcgPSAwO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHkgPSAyO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyID0gdGhpcy5uZXh0U3RhaXI7XG4gICAgICAgICAvLyB0aGlzLmlzSnVtcCA9IHRydWU7XG4gICAgICAgICBcbiAgICAgIC8vICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gIH1cblxuICBhZGRTY29yZShzY29yZSkge1xuICAgIGlmIChHYW1lRGF0YS5zY29yZSA+PSAxMCkge1xuICAgICAgdGhpcy5wYXRyb2wuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIC8vaWYgKHRoaXMuaXNKdW1wKSB7XG4gICAgICBHYW1lRGF0YS5zY29yZSArPSBzY29yZTtcbiAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSAgR2FtZURhdGEuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgIEp1bXAuaW5zdGFuY2Uubm9kZS5lbWl0KFwiYWRkU2NvcmVcIik7XG4gICAgIHRoaXMuaXNTcGF3biA9IGZhbHNlO1xuICAgIC8qICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3Bhd24pIHtcbiAgICAgICAgICB0aGlzLmlzU3Bhd24gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3Bhd25TdGFpcigpO1xuICAgICAgICAgIHRoaXMuaXNKdW1wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAvLyB0aGlzLnNwYXduU3RhaXIoKTtcbiAgICAgIH0sIDE1MDApOyAqL1xuXG4gICAvLyB9XG4gIH1cblxuICBzcGF3blN0YWlyKCkge1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdmFyIG5leHRTdGFpciA9IFJhbmRvbVNwYXduZXIuaW5zdGFuY2Uuc3Bhd24oKS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgIHRoaXMubmV4dFN0YWlyID0gbmV4dFN0YWlyO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuXG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XG4gICAgICBjYy5sb2coXCJzdGFydGRyb3BcIiArIHRoaXMuY3VycmVudFN0YWlyLm5vZGUucG9zaXRpb24ueSArXCIvXCIrdGhpcy5zdGFpclN0YXJ0UG9zKTtcbiAgICAgIC8vIGNjLmxvZyh0aGlzLmN1cnJlbnRTdGFpci5ub2RlLnBvc2l0aW9uLnkgKyBcIixcIiArIHRoaXMuc3RhaXJTdGFydFBvcyk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RhaXIubm9kZS5wb3NpdGlvbi55ID4gdGhpcy5zdGFpclN0YXJ0UG9zKSB7XG4gICAgICAgIGNjLmxvZyhcImRyb3BcIiArIGR0KTtcbiAgICAgICAvLyB0aGlzLmlzRHJvcCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHlTY2FsZSA9IDIwMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgIC8vIHRoaXMuaXNEcm9wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHlTY2FsZSA9IDEwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19