
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Jump.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76474vrEvBPUK8wbJXhBdGE', 'Jump');
// scripts/Jump.ts

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
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Jump = /** @class */ (function (_super) {
    __extends(Jump, _super);
    function Jump() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        _this.isJump = false;
        _this.isAvailable = true;
        return _this;
    }
    Jump_1 = Jump;
    //maxPower: number;
    // LIFE-CYCLE CALLBACKS:
    Jump.prototype.onLoad = function () {
        Jump_1.instance = this;
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.animation = this.getComponent(cc.Animation);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    Jump.prototype.start = function () {
        this.node.on("addScore", function (score) {
            var _this = this;
            this.isJump = false;
            //this.isAvailable = true;
            // GameManager.instance.node.emit("addScore", 1);
            setTimeout(function () {
                if (_this.touchNode != null) {
                    _this.isAvailable = true;
                    _this.touchNode.active = true;
                }
            }, 1000);
            this.collider.sensor = false;
        }, this);
        this.node.on("touchStart", function (event) {
            if (this.isAvailable) {
                this.startTime = Date.now().toFixed();
                this.tween = cc.tween(this.node).to(1, { scale: 1.5 }).start();
            }
        }, this);
        this.node.on("touchEnd", function (event) {
            if (this.isAvailable && !this.isJump) {
                var delta = parseInt(Date.now().toFixed()) - this.startTime;
                //console.log("Mouse up" + delta);
                this.jump(delta);
            }
        }, this);
    };
    Jump.prototype.jump = function (power) {
        if (this.isAvailable) {
            this.touchNode.active = false;
            this.isAvailable = false;
            this.isJump = true;
            this.collider.sensor = true;
            GameManager_1.default.instance.node.emit("jump");
            this.tween.stop();
            this.tween = cc.tween(this.node).to(1, { scale: 1 }).start();
            //console.log("jump" + power);
            this.animation.play();
            this.rigidBody.linearVelocity = cc.v2(0, power * this.speed);
        }
    };
    Jump.prototype.update = function (dt) {
        // if (this.node.position.y >= GameManager.currentGoal && this.isJump) {
        //  this.isJump = false;
        // GameManager.instance.node.emit("addScore", 1);
        //   this.collider.sensor = false;
        // }
    };
    var Jump_1;
    __decorate([
        property
    ], Jump.prototype, "speed", void 0);
    __decorate([
        property(cc.Node)
    ], Jump.prototype, "touchNode", void 0);
    Jump = Jump_1 = __decorate([
        ccclass
    ], Jump);
    return Jump;
}(cc.Component));
exports.default = Jump;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0p1bXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkNBQXdDO0FBRWxDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUFxR0M7UUE1RkMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQVVsQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsaUJBQVcsR0FBRyxJQUFJLENBQUM7O0lBZ0ZyQixDQUFDO2FBcEdvQixJQUFJO0lBeUJ2QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBRXhCLHFCQUFNLEdBQU47UUFDRSxNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNWLFVB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RHhCLE9BQU87T0FDYSxJQUFJLENBb0d4QjtJQUFELFdBQUM7Q0FwR0QsQUFvR0MsQ0FwR2lDLEVBQUUsQ0FBQyxTQUFTLEdBb0c3QztrQkFwR29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdW1wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gIHN0YXRpYyBpbnN0YW5jZTogSnVtcDtcblxuICBzdGFydFRpbWU6IG51bWJlcjtcblxuICBAcHJvcGVydHlcbiAgc3BlZWQ6IG51bWJlciA9IDE7XG5cbiAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHk7XG5cbiAgY29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlcjtcblxuICBhbmltYXRpb246IGNjLkFuaW1hdGlvbjtcblxuICB0d2VlbjogY2MuVHdlZW47XG5cbiAgaXNKdW1wID0gZmFsc2U7XG5cbiAgaXNBdmFpbGFibGUgPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0b3VjaE5vZGU6IGNjLk5vZGU7XG5cbiAgLy9tYXhQb3dlcjogbnVtYmVyO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgSnVtcC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICBcImFkZFNjb3JlXCIsXG4gICAgICBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgdGhpcy5pc0p1bXAgPSBmYWxzZTtcbiAgICAgICAgLy90aGlzLmlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gR2FtZU1hbmFnZXIuaW5zdGFuY2Uubm9kZS5lbWl0KFwiYWRkU2NvcmVcIiwgMSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnRvdWNoTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgXCJ0b3VjaFN0YXJ0XCIsXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCkudG9GaXhlZCgpO1xuICAgICAgICAgIHRoaXMudHdlZW4gPSBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDEsIHsgc2NhbGU6IDEuNSB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICBcInRvdWNoRW5kXCIsXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgIXRoaXMuaXNKdW1wKSB7XG4gICAgICAgICAgdmFyIGRlbHRhID0gcGFyc2VJbnQoRGF0ZS5ub3coKS50b0ZpeGVkKCkpIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1vdXNlIHVwXCIgKyBkZWx0YSk7XG4gICAgICAgICAgdGhpcy5qdW1wKGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAganVtcChwb3dlcjogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNBdmFpbGFibGUpIHtcbiAgICAgIHRoaXMudG91Y2hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0p1bXAgPSB0cnVlO1xuICAgICAgdGhpcy5jb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xuICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2Uubm9kZS5lbWl0KFwianVtcFwiKTtcbiAgICAgIHRoaXMudHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy50d2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImp1bXBcIiArIHBvd2VyKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgcG93ZXIgKiB0aGlzLnNwZWVkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgIC8vIGlmICh0aGlzLm5vZGUucG9zaXRpb24ueSA+PSBHYW1lTWFuYWdlci5jdXJyZW50R29hbCAmJiB0aGlzLmlzSnVtcCkge1xuICAgIC8vICB0aGlzLmlzSnVtcCA9IGZhbHNlO1xuICAgICAvLyBHYW1lTWFuYWdlci5pbnN0YW5jZS5ub2RlLmVtaXQoXCJhZGRTY29yZVwiLCAxKTtcbiAgIC8vICAgdGhpcy5jb2xsaWRlci5zZW5zb3IgPSBmYWxzZTtcbiAgIC8vIH1cbiAgfVxufVxuIl19