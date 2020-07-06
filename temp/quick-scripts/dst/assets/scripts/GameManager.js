
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
        return _this;
    }
    GameManager_1 = GameManager;
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
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
        this.node.on("addScore", function (score) {
            // cc.log("addScore");
            cc.audioEngine.play(this.scoreSfx, false, 1);
            this.addScore(score);
            this.nextStair.type = cc.RigidBodyType.Dynamic;
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
        var _this = this;
        if (this.isJump) {
            this.score += score;
            this.scoreLabel.string = this.score.toString();
            Jump_1.default.instance.node.emit("addScore");
            setTimeout(function () {
                _this.spawnStair();
            }, 1500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUMxQixpREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQURyRDtRQUFBLHFFQXNIQztRQXRHQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBaUdqQixDQUFDO29CQXJIb0IsV0FBVztJQW1DOUIsd0JBQXdCO0lBRXRCLDRCQUFNLEdBQU47UUFFSSxhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVixVQUFVLEVBQ1Y7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLDRCQUE0QjtnQkFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJO29CQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFD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QztxREFDSTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNDO0lBR3hCO1FBREMsUUFBUTs4Q0FDUztJQUdsQjtRQURDLFFBQVE7c0RBQ21CO0lBSzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ0U7SUFLckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDQTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0Q7SUFsQ0gsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFIL0I7SUFBRCxrQkFBQztDQXJIRCxBQXFIQyxDQXJId0MsRUFBRSxDQUFDLFNBQVMsR0FxSHBEO2tCQXJIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSnVtcCBmcm9tIFwiLi9KdW1wXCI7XG5pbXBvcnQgUmFuZG9tU3Bhd25lciBmcm9tIFwiLi9SYW5kb21TcGF3bmVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjdXJyZW50R29hbDogbnVtYmVyID0gMTY7XG5cbiAgc3RhdGljIGluc3RhbmNlOiBHYW1lTWFuYWdlcjtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2FtZU92ZXJWaWV3OiBjYy5Ob2RlO1xuXG4gIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gIGN1cnJlbnRTdGFpcjogY2MuUmlnaWRCb2R5O1xuXG4gIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gIG5leHRTdGFpcjogY2MuUmlnaWRCb2R5O1xuICAgIFxuICBAcHJvcGVydHlcbiAgc2NvcmU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5XG4gIHN0YWlyU3RhcnRQb3M6IG51bWJlciA9IDQ1MDtcblxuICBpc0p1bXAgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNjb3JlTGFiZWw6IGNjLkxhYmVsO1xuXG4gIGdhbWVPdmVyOiBmYWxzZTtcbiAgXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHNjb3JlU2Z4OiBjYy5BdWRpb0NsaXA7XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgZ2FtZU92ZXJTZng6IGNjLkF1ZGlvQ2xpcDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBqdW1wU2Z4OiBjYy5BdWRpb0NsaXA7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgIFwiZ2FtZU92ZXJcIixcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnYW1lIG92ZXInKTtcbiAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVPdmVyU2Z4LCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJWaWV3LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFpci5ub2RlICE9IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhaXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm5leHRTdGFpci5ub2RlICE9IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RhaXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICBcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICBcImFkZFNjb3JlXCIsXG4gICAgICBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAvLyBjYy5sb2coXCJhZGRTY29yZVwiKTtcbiAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2NvcmVTZngsZmFsc2UsMSk7XG4gICAgICAgICAgdGhpcy5hZGRTY29yZShzY29yZSk7XG4gICAgICAgICAgdGhpcy5uZXh0U3RhaXIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICAgIFwianVtcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNKdW1wKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJwbGF5ZXIganVtcFwiKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmp1bXBTZngsZmFsc2UsMik7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhaXIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci5saW5lYXJEYW1waW5nID0gMDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci5ncmF2aXR5ID0gMjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpciA9IHRoaXMubmV4dFN0YWlyO1xuICAgICAgICAgIHRoaXMuaXNKdW1wID0gdHJ1ZTtcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gIH1cblxuICBhZGRTY29yZShzY29yZSkge1xuICAgIGlmICh0aGlzLmlzSnVtcCkge1xuXG4gICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgIEp1bXAuaW5zdGFuY2Uubm9kZS5lbWl0KFwiYWRkU2NvcmVcIik7XG4gICAgIFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3Bhd25TdGFpcigpO1xuICAgICAgfSwgMTUwMCk7IFxuICAgICAgdGhpcy5pc0p1bXAgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzcGF3blN0YWlyKCkge1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdmFyIG5leHRTdGFpciA9IFJhbmRvbVNwYXduZXIuaW5zdGFuY2Uuc3Bhd24oKS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgIHRoaXMubmV4dFN0YWlyID0gbmV4dFN0YWlyO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuXG4gICAgaWYoIXRoaXMuZ2FtZU92ZXIpXG4gICAvLyBjYy5sb2codGhpcy5jdXJyZW50U3RhaXIubm9kZS5wb3NpdGlvbi55ICsgXCIsXCIgKyB0aGlzLnN0YWlyU3RhcnRQb3MpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGFpci5ub2RlLnBvc2l0aW9uLnkgPiB0aGlzLnN0YWlyU3RhcnRQb3MpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHlTY2FsZSA9IDIwMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHlTY2FsZSA9IDEwO1xuICAgIH1cbiAgfVxufVxuIl19