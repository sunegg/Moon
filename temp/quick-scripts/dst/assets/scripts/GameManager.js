
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUMxQixpREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQURyRDtRQUFBLHFFQWdKQztRQWhJQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixjQUFRLEdBQUcsS0FBSyxDQUFDOztJQXlIbkIsQ0FBQztvQkEvSW9CLFdBQVc7SUFxQzlCLHdCQUF3QjtJQUV0Qiw0QkFBTSxHQUFOO1FBQUEsaUJBcUVEO1FBbkVLLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNWLFVBQVUsRUFDVjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsNEJBQTRCO2dCQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUk7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFB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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBKdW1wIGZyb20gXCIuL0p1bXBcIjtcbmltcG9ydCBSYW5kb21TcGF3bmVyIGZyb20gXCIuL1JhbmRvbVNwYXduZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGN1cnJlbnRHb2FsOiBudW1iZXIgPSAxNjtcblxuICBzdGF0aWMgaW5zdGFuY2U6IEdhbWVNYW5hZ2VyO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnYW1lT3ZlclZpZXc6IGNjLk5vZGU7XG5cbiAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSlcbiAgY3VycmVudFN0YWlyOiBjYy5SaWdpZEJvZHk7XG5cbiAgQHByb3BlcnR5KGNjLlJpZ2lkQm9keSlcbiAgbmV4dFN0YWlyOiBjYy5SaWdpZEJvZHk7XG4gICAgXG4gIEBwcm9wZXJ0eVxuICBzY29yZTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHlcbiAgc3RhaXJTdGFydFBvczogbnVtYmVyID0gNDUwO1xuXG4gIGlzSnVtcCA9IGZhbHNlO1xuXG4gIGNhblNwYXduID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBzY29yZUxhYmVsOiBjYy5MYWJlbDtcblxuICBnYW1lT3ZlcjogZmFsc2U7XG4gIFxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBzY29yZVNmeDogY2MuQXVkaW9DbGlwO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGdhbWVPdmVyU2Z4OiBjYy5BdWRpb0NsaXA7XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAganVtcFNmeDogY2MuQXVkaW9DbGlwO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5vbihcbiAgICAgICAgICBcImdhbWVPdmVyXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5nYW1lT3ZlclNmeCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyVmlldy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhaXIubm9kZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5uZXh0U3RhaXIubm9kZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFN0YWlyLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgXG4gICAgICAgIHRoaXMubm9kZS5vbihcbiAgICAgICAgICBcImFkZE1vb25cIixcbiAgICAgICAgICBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgICAgLy8gY2MubG9nKFwiYWRkU2NvcmVcIik7XG4gICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zY29yZVNmeCxmYWxzZSwxKTtcbiAgICAgICAgICAgdGhpcy5zY29yZSs9IHNjb3JlO1xuICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gIHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICBcImFkZFNjb3JlXCIsXG4gICAgICBmdW5jdGlvbiAoc2NvcmUpIHtcblxuICAgICAgIC8vIGNjLmxvZyhcImFkZFNjb3JlXCIpO1xuICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zY29yZVNmeCxmYWxzZSwxKTtcbiAgICAgICBcbiAgICAgICAgdGhpcy5hZGRTY29yZShzY29yZSk7XG4gICAgICAgIHRoaXMuY2FuU3Bhd24gPSB0cnVlO1xuICAgICAgICAgIHRoaXMubmV4dFN0YWlyLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgXCJzcGF3blN0YWlyXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhblNwYXduKSB7XG4gICAgICAgICAgdGhpcy5jYW5TcGF3biA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc3Bhd25TdGFpcigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICBcImp1bXBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSnVtcCkge1xuICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyIGp1bXBcIik7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5qdW1wU2Z4LGZhbHNlLDIpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhaXIubGluZWFyRGFtcGluZyA9IDA7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhaXIuZ3Jhdml0eSA9IDI7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhaXIgPSB0aGlzLm5leHRTdGFpcjtcbiAgICAgICAgICB0aGlzLmlzSnVtcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgfVxuXG5cbiAgYWRkU2NvcmUoc2NvcmUpIHtcbiAgICBcbiAgICBpZiAodGhpcy5pc0p1bXApIHtcblxuICAgICAgdGhpcy5zY29yZSArPSBzY29yZTtcbiAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICBKdW1wLmluc3RhbmNlLm5vZGUuZW1pdChcImFkZFNjb3JlXCIpO1xuICAgICBcbiAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XG4gICAgIC8vICAgdGhpcy5zcGF3blN0YWlyKCk7XG4gICAgIC8vIH0sIDE1MDApOyBcbiAgICAgIHRoaXMuaXNKdW1wID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3Bhd25TdGFpcigpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHZhciBuZXh0U3RhaXIgPSBSYW5kb21TcGF3bmVyLmluc3RhbmNlLnNwYXduKCkuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICB0aGlzLm5leHRTdGFpciA9IG5leHRTdGFpcjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcblxuICAgIGlmKCF0aGlzLmdhbWVPdmVyKVxuICAgLy8gY2MubG9nKHRoaXMuY3VycmVudFN0YWlyLm5vZGUucG9zaXRpb24ueSArIFwiLFwiICsgdGhpcy5zdGFpclN0YXJ0UG9zKTtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhaXIubm9kZS5wb3NpdGlvbi55ID4gdGhpcy5zdGFpclN0YXJ0UG9zKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGFpci5ncmF2aXR5U2NhbGUgPSAyMDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGFpci5ncmF2aXR5U2NhbGUgPSAxMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==