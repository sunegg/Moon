
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
var AutoPatrol_1 = require("./AutoPatrol");
var AutoFilled_1 = require("./AutoFilled");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.patrol = null;
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
            AutoFilled_1.default.instance.node.emit("fill");
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
        if (this.score >= 10) {
            this.patrol.enabled = true;
        }
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
        property(AutoPatrol_1.default)
    ], GameManager.prototype, "patrol", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUMxQixpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUVoQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBc0pDO1FBdElDLFlBQU0sR0FBZSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixtQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUU1QixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUE0SG5CLENBQUM7b0JBckpvQixXQUFXO0lBd0M5Qix3QkFBd0I7SUFFdEIsNEJBQU0sR0FBTjtRQUFBLGlCQXNFRDtRQXBFSyxhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVixVQUFVLEVBQ1Y7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLDRCQUE0QjtnQkFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFB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RUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDQTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0Q7SUF2Q0gsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFKL0I7SUFBRCxrQkFBQztDQXJKRCxBQXFKQyxDQXJKd0MsRUFBRSxDQUFDLFNBQVMsR0FxSnBEO2tCQXJKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSnVtcCBmcm9tIFwiLi9KdW1wXCI7XG5pbXBvcnQgUmFuZG9tU3Bhd25lciBmcm9tIFwiLi9SYW5kb21TcGF3bmVyXCI7XG5pbXBvcnQgQXV0b1BhdHJvbCBmcm9tIFwiLi9BdXRvUGF0cm9sXCI7XG5pbXBvcnQgQXV0b0ZpbGxlZCBmcm9tIFwiLi9BdXRvRmlsbGVkXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjdXJyZW50R29hbDogbnVtYmVyID0gMTY7XG5cbiAgc3RhdGljIGluc3RhbmNlOiBHYW1lTWFuYWdlcjtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2FtZU92ZXJWaWV3OiBjYy5Ob2RlO1xuXG4gIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gIGN1cnJlbnRTdGFpcjogY2MuUmlnaWRCb2R5O1xuXG4gIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gIG5leHRTdGFpcjogY2MuUmlnaWRCb2R5O1xuXG4gIEBwcm9wZXJ0eShBdXRvUGF0cm9sKVxuICBwYXRyb2w6IEF1dG9QYXRyb2wgPSBudWxsO1xuICAgIFxuICBAcHJvcGVydHlcbiAgc2NvcmU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5XG4gIHN0YWlyU3RhcnRQb3M6IG51bWJlciA9IDQ1MDtcblxuICBpc0p1bXAgPSBmYWxzZTtcblxuICBjYW5TcGF3biA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc2NvcmVMYWJlbDogY2MuTGFiZWw7XG5cbiAgZ2FtZU92ZXI6IGZhbHNlO1xuICBcbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgc2NvcmVTZng6IGNjLkF1ZGlvQ2xpcDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBnYW1lT3ZlclNmeDogY2MuQXVkaW9DbGlwO1xuXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIGp1bXBTZng6IGNjLkF1ZGlvQ2xpcDtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUub24oXG4gICAgICAgICAgXCJnYW1lT3ZlclwiLFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2dhbWUgb3ZlcicpO1xuICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ2FtZU92ZXJTZngsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclZpZXcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0YWlyLm5vZGUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubmV4dFN0YWlyLm5vZGUgIT0gbnVsbClcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTdGFpci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIFxuICAgICAgICB0aGlzLm5vZGUub24oXG4gICAgICAgICAgXCJhZGRNb29uXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKHNjb3JlKSB7XG4gICAgICAgICAgIC8vIGNjLmxvZyhcImFkZFNjb3JlXCIpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNjb3JlU2Z4LCBmYWxzZSwgMSk7XG4gICAgICAgICAgICBBdXRvRmlsbGVkLmluc3RhbmNlLm5vZGUuZW1pdChcImZpbGxcIik7XG4gICAgICAgICAgIHRoaXMuc2NvcmUrPSBzY29yZTtcbiAgICAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9ICB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgXCJhZGRTY29yZVwiLFxuICAgICAgZnVuY3Rpb24gKHNjb3JlKSB7XG5cbiAgICAgICAvLyBjYy5sb2coXCJhZGRTY29yZVwiKTtcbiAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2NvcmVTZngsZmFsc2UsMSk7XG4gICAgICAgXG4gICAgICAgIHRoaXMuYWRkU2NvcmUoc2NvcmUpO1xuICAgICAgICB0aGlzLmNhblNwYXduID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm5leHRTdGFpci50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMubm9kZS5vbihcbiAgICAgIFwic3Bhd25TdGFpclwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYW5TcGF3bikge1xuICAgICAgICAgIHRoaXMuY2FuU3Bhd24gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnNwYXduU3RhaXIoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMubm9kZS5vbihcbiAgICAgICAgXCJqdW1wXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0p1bXApIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllciBqdW1wXCIpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuanVtcFNmeCxmYWxzZSwyKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyLmxpbmVhckRhbXBpbmcgPSAwO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHkgPSAyO1xuICAgICAgICAgIHRoaXMuY3VycmVudFN0YWlyID0gdGhpcy5uZXh0U3RhaXI7XG4gICAgICAgICAgdGhpcy5pc0p1bXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gIH1cblxuXG4gIGFkZFNjb3JlKHNjb3JlKSB7XG4gICAgaWYgKHRoaXMuc2NvcmUgPj0gMTApIHtcbiAgICAgIHRoaXMucGF0cm9sLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0p1bXApIHtcblxuICAgICAgdGhpcy5zY29yZSArPSBzY29yZTtcbiAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICBKdW1wLmluc3RhbmNlLm5vZGUuZW1pdChcImFkZFNjb3JlXCIpO1xuICAgICBcbiAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XG4gICAgIC8vICAgdGhpcy5zcGF3blN0YWlyKCk7XG4gICAgIC8vIH0sIDE1MDApOyBcbiAgICAgIHRoaXMuaXNKdW1wID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3Bhd25TdGFpcigpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHZhciBuZXh0U3RhaXIgPSBSYW5kb21TcGF3bmVyLmluc3RhbmNlLnNwYXduKCkuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICB0aGlzLm5leHRTdGFpciA9IG5leHRTdGFpcjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcblxuICAgIGlmKCF0aGlzLmdhbWVPdmVyKVxuICAgLy8gY2MubG9nKHRoaXMuY3VycmVudFN0YWlyLm5vZGUucG9zaXRpb24ueSArIFwiLFwiICsgdGhpcy5zdGFpclN0YXJ0UG9zKTtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhaXIubm9kZS5wb3NpdGlvbi55ID4gdGhpcy5zdGFpclN0YXJ0UG9zKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGFpci5ncmF2aXR5U2NhbGUgPSAyMDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGFpci5ncmF2aXR5U2NhbGUgPSAxMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==