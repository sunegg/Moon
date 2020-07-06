
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Appegg');
require('./assets/scripts/AudioManager');
require('./assets/scripts/Deadline');
require('./assets/scripts/GameData');
require('./assets/scripts/GameManager');
require('./assets/scripts/Jump');
require('./assets/scripts/PrivacySetup');
require('./assets/scripts/RandomSpawner');
require('./assets/scripts/RandomSprite');
require('./assets/scripts/Sensor');
require('./assets/scripts/Touch');
require('./assets/scripts/UIAudioButton');
require('./assets/scripts/UICloneText');
require('./assets/scripts/UILoadScene');
require('./assets/scripts/UIShowNode');
require('./assets/scripts/WebViewObject');

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0p1bXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkNBQXdDO0FBRWxDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUFxR0M7UUE1RkMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQVVsQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsaUJBQVcsR0FBRyxJQUFJLENBQUM7O0lBZ0ZyQixDQUFDO2FBcEdvQixJQUFJO0lBeUJ2QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBRXhCLHFCQUFNLEdBQU47UUFDRSxNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNWLFVBQVUsRUFDVixVQUFVLEtBQUs7WUFBZixpQkFXQztZQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLDBCQUEwQjtZQUMxQixpREFBaUQ7WUFDakQsVUFBVSxDQUFDO2dCQUNULElBQUksS0FBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7b0JBQzFCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNWLFlBQVksRUFDWixVQUFVLEtBQUs7WUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoRTtRQUNILENBQUMsRUFDRCxJQUFJLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNYLFVBQVUsRUFDVCxVQUFVLEtBQUs7WUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNwQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDNUQsa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxFQUNELElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVELG1CQUFJLEdBQUosVUFBSyxLQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzVCLHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3RCw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1Isd0VBQXdFO1FBQ3ZFLHdCQUF3QjtRQUN2QixpREFBaUQ7UUFDbkQsa0NBQWtDO1FBQ2xDLElBQUk7SUFDTCxDQUFDOztJQTNGRDtRQURDLFFBQVE7dUNBQ1M7SUFlbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDQztJQXZCQSxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0d4QjtJQUFELFdBQUM7Q0FwR0QsQUFvR0MsQ0FwR2lDLEVBQUUsQ0FBQyxTQUFTLEdBb0c3QztrQkFwR29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL0dhbWVNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdW1wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gIHN0YXRpYyBpbnN0YW5jZTogSnVtcDtcblxuICBzdGFydFRpbWU6IG51bWJlcjtcblxuICBAcHJvcGVydHlcbiAgc3BlZWQ6IG51bWJlciA9IDE7XG5cbiAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHk7XG5cbiAgY29sbGlkZXI6IGNjLlBoeXNpY3NCb3hDb2xsaWRlcjtcblxuICBhbmltYXRpb246IGNjLkFuaW1hdGlvbjtcblxuICB0d2VlbjogY2MuVHdlZW47XG5cbiAgaXNKdW1wID0gZmFsc2U7XG5cbiAgaXNBdmFpbGFibGUgPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0b3VjaE5vZGU6IGNjLk5vZGU7XG5cbiAgLy9tYXhQb3dlcjogbnVtYmVyO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICBvbkxvYWQoKSB7XG4gICAgSnVtcC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICBcImFkZFNjb3JlXCIsXG4gICAgICBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgdGhpcy5pc0p1bXAgPSBmYWxzZTtcbiAgICAgICAgLy90aGlzLmlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gR2FtZU1hbmFnZXIuaW5zdGFuY2Uubm9kZS5lbWl0KFwiYWRkU2NvcmVcIiwgMSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnRvdWNoTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICAgXCJ0b3VjaFN0YXJ0XCIsXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCkudG9GaXhlZCgpO1xuICAgICAgICAgIHRoaXMudHdlZW4gPSBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDEsIHsgc2NhbGU6IDEuNSB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5ub2RlLm9uKFxuICAgICBcInRvdWNoRW5kXCIsXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgIXRoaXMuaXNKdW1wKSB7XG4gICAgICAgICAgdmFyIGRlbHRhID0gcGFyc2VJbnQoRGF0ZS5ub3coKS50b0ZpeGVkKCkpIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1vdXNlIHVwXCIgKyBkZWx0YSk7XG4gICAgICAgICAgdGhpcy5qdW1wKGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAganVtcChwb3dlcjogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaXNBdmFpbGFibGUpIHtcbiAgICAgIHRoaXMudG91Y2hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0F2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0p1bXAgPSB0cnVlO1xuICAgICAgdGhpcy5jb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xuICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2Uubm9kZS5lbWl0KFwianVtcFwiKTtcbiAgICAgIHRoaXMudHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy50d2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMSwgeyBzY2FsZTogMSB9KS5zdGFydCgpO1xuICAgICAgLy9jb25zb2xlLmxvZyhcImp1bXBcIiArIHBvd2VyKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgcG93ZXIgKiB0aGlzLnNwZWVkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgIC8vIGlmICh0aGlzLm5vZGUucG9zaXRpb24ueSA+PSBHYW1lTWFuYWdlci5jdXJyZW50R29hbCAmJiB0aGlzLmlzSnVtcCkge1xuICAgIC8vICB0aGlzLmlzSnVtcCA9IGZhbHNlO1xuICAgICAvLyBHYW1lTWFuYWdlci5pbnN0YW5jZS5ub2RlLmVtaXQoXCJhZGRTY29yZVwiLCAxKTtcbiAgIC8vICAgdGhpcy5jb2xsaWRlci5zZW5zb3IgPSBmYWxzZTtcbiAgIC8vIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIShowNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8db82XASG1AqKt3pKXxmXsu', 'UIShowNode');
// UIShowNode.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIShowNode = /** @class */ (function (_super) {
    __extends(UIShowNode, _super);
    function UIShowNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIShowNode.prototype.show = function () {
        if (this.hideScene != null)
            this.hideScene.active = false;
        this.showScene.active = true;
    };
    UIShowNode.prototype.onLoad = function () {
        this.btn = this.node.getComponent(cc.Button);
    };
    UIShowNode.prototype.start = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "UIShowNode";
        clickEventHandler.handler = "show";
        clickEventHandler.customEventData = null;
        this.btn.clickEvents.push(clickEventHandler);
    };
    __decorate([
        property(cc.Node)
    ], UIShowNode.prototype, "hideScene", void 0);
    __decorate([
        property(cc.Node)
    ], UIShowNode.prototype, "showScene", void 0);
    UIShowNode = __decorate([
        ccclass
    ], UIShowNode);
    return UIShowNode;
}(cc.Component));
exports.default = UIShowNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9VSVNob3dOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBOEJBLENBQUM7SUFsQlUseUJBQUksR0FBWDtRQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxJQUFJO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDM0MsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUExQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDQztJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNDO0lBTkYsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThCOUI7SUFBRCxpQkFBQztDQTlCRCxBQThCQyxDQTlCdUMsRUFBRSxDQUFDLFNBQVMsR0E4Qm5EO2tCQTlCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTaG93Tm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoaWRlU2NlbmU6IGNjLk5vZGU7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaG93U2NlbmU6IGNjLk5vZGU7XG5cblxuXG4gICAgYnRuOiBjYy5CdXR0b247XG5cbiAgICBwdWJsaWMgc2hvdygpIHtcbiAgICAgICAgaWYodGhpcy5oaWRlU2NlbmUhPW51bGwpXG4gICAgICAgIHRoaXMuaGlkZVNjZW5lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dTY2VuZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idG4gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJVSVNob3dOb2RlXCI7XG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNob3dcIjtcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5idG4uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f222jv03VMmZ1o18MEtTSL', 'AudioManager');
// scripts/AudioManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    AudioManager.prototype.onLoad = function () {
        this.audioSource = this.getComponent(cc.AudioSource);
        cc.game.addPersistRootNode(this.node);
    };
    AudioManager.prototype.start = function () {
        cc.audioEngine.playMusic(this.audioSource.clip, true);
    };
    AudioManager.prototype.play = function () {
        this.audioSource.play();
    };
    AudioManager.prototype.pause = function () {
        this.audioSource.pause();
    };
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREOztJQXdCQSxDQUFDO0lBcEJHLHdCQUF3QjtJQUV4Qiw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUYsNEJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXJCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdCaEM7SUFBRCxtQkFBQztDQXhCRCxBQXdCQyxDQXhCeUMsRUFBRSxDQUFDLFNBQVMsR0F3QnJEO2tCQXhCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBhdWRpb1NvdXJjZTogY2MuQXVkaW9Tb3VyY2U7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5hdWRpb1NvdXJjZS5jbGlwLHRydWUpO1xuICAgIH1cblxuICAgIHBsYXkgKCkge1xuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBsYXkoKTtcbiAgICB9XG5cbiAgICBwYXVzZSAoKXtcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wYXVzZSgpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RandomSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18c8f4yXeREFqz+lDkzkDLA', 'RandomSpawner');
// scripts/RandomSpawner.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RandomSpawner = /** @class */ (function (_super) {
    __extends(RandomSpawner, _super);
    function RandomSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repeat = false;
        _this.interval = 5;
        _this.minY = 0;
        _this.maxY = 0;
        return _this;
        // update (dt) {}
    }
    RandomSpawner_1 = RandomSpawner;
    RandomSpawner.prototype.onLoad = function () {
        RandomSpawner_1.instance = this;
        this.node.on("spawn", this.spawn, this);
    };
    RandomSpawner.prototype.start = function () {
        if (this.repeat) {
            this.spawn();
            this.schedule(function () {
                // 这里的 this 指向 component
                this.spawn();
            }, this.interval);
        }
    };
    RandomSpawner.prototype.spawn = function () {
        cc.log("spawnStair");
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.prefab);
        node.parent = this.parent;
        node.position = cc.v3(0, this.randomIntFromInterval(this.minY, this.maxY), 0);
        //node.setPosition(0, 0);
        return node;
    };
    RandomSpawner.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    var RandomSpawner_1;
    __decorate([
        property(cc.Prefab)
    ], RandomSpawner.prototype, "prefab", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "repeat", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "interval", void 0);
    __decorate([
        property(cc.Node)
    ], RandomSpawner.prototype, "parent", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "minY", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "maxY", void 0);
    RandomSpawner = RandomSpawner_1 = __decorate([
        ccclass
    ], RandomSpawner);
    return RandomSpawner;
}(cc.Component));
exports.default = RandomSpawner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JhbmRvbVNwYXduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUR2RDtRQUFBLHFFQXNEQztRQTdDRyxZQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFNdkIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixVQUFJLEdBQVcsQ0FBQyxDQUFDOztRQWdDZixpQkFBaUI7SUFDckIsQ0FBQztzQkFyRG9CLGFBQWE7SUFzQjlCLDhCQUFNLEdBQU47UUFDSSxlQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixPQUFPLEVBQ1AsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1Ysd0JBQXdCO2dCQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSx5QkFBeUI7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUVELDZDQUFxQixHQUFyQixVQUFzQixHQUFHLEVBQUUsR0FBRztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDOztJQTdDSDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNGO0lBR2xCO1FBREMsUUFBUTtpREFDZTtJQUd4QjtRQURDLFFBQVE7bURBQ1k7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDRjtJQUdsQjtRQURDLFFBQVE7K0NBQ1E7SUFHakI7UUFEQyxRQUFROytDQUNRO0lBcEJFLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FxRGpDO0lBQUQsb0JBQUM7Q0FyREQsQUFxREMsQ0FyRDBDLEVBQUUsQ0FBQyxTQUFTLEdBcUR0RDtrQkFyRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBpbnN0YW5jZTogUmFuZG9tU3Bhd25lcjtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiOiBjYy5QcmVmYWI7XG5cbiAgICBAcHJvcGVydHlcbiAgICByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGludGVydmFsOiBudW1iZXIgPSA1O1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhcmVudDogY2MuTm9kZTtcblxuICBAcHJvcGVydHlcbiAgbWluWTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHlcbiAgbWF4WTogbnVtYmVyID0gMDtcbiAgICBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFJhbmRvbVNwYXduZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vZGUub24oXG4gICAgICAgICAgICBcInNwYXduXCIsXG4gICAgICAgICAgICB0aGlzLnNwYXduLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVwZWF0KSB7XG4gICAgICAgICAgICB0aGlzLnNwYXduKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyDov5nph4znmoQgdGhpcyDmjIflkJEgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bigpO1xuICAgICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3Bhd24oKTogY2MuTm9kZSB7XG4gICAgICAgIGNjLmxvZyhcInNwYXduU3RhaXJcIik7XG4gICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgdmFyIG5vZGU9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9ICBjYy52MygwLHRoaXMucmFuZG9tSW50RnJvbUludGVydmFsKHRoaXMubWluWSwgdGhpcy5tYXhZKSwwKTtcbiAgICAgICAvL25vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UILoadScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78ca7lIMsRPhqEmuJuEblST', 'UILoadScene');
// scripts/UILoadScene.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UILoadScene = /** @class */ (function (_super) {
    __extends(UILoadScene, _super);
    function UILoadScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scene = 'main';
        return _this;
    }
    UILoadScene.prototype.loadScene = function () {
        cc.director.loadScene(this.scene);
    };
    UILoadScene.prototype.onLoad = function () {
        this.btn = this.node.getComponent(cc.Button);
    };
    UILoadScene.prototype.start = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点，这里就是Button2
        clickEventHandler.component = "UILoadScene"; //这个是脚本文件名
        clickEventHandler.handler = "loadScene"; //回调函名称
        clickEventHandler.customEventData = null; //用户数据
        this.btn.clickEvents.push(clickEventHandler);
    };
    __decorate([
        property
    ], UILoadScene.prototype, "scene", void 0);
    UILoadScene = __decorate([
        ccclass
    ], UILoadScene);
    return UILoadScene;
}(cc.Component));
exports.default = UILoadScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1VJTG9hZFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUEwQkM7UUF0QkcsV0FBSyxHQUFXLE1BQU0sQ0FBQzs7SUFzQjNCLENBQUM7SUFsQlUsK0JBQVMsR0FBaEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsd0NBQXdDO1FBQzlFLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQSxVQUFVO1FBQ3RELGlCQUFpQixDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxPQUFPO1FBQ2hELGlCQUFpQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRWhELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFwQkQ7UUFEQyxRQUFROzhDQUNjO0lBSE4sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXlCL0I7SUFBRCxrQkFBQztDQXpCRCxBQXlCQyxDQXpCd0MsRUFBRSxDQUFDLFNBQVMsR0F5QnBEO2tCQXpCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTG9hZFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNjZW5lOiBzdHJpbmcgPSAnbWFpbic7XG5cbiAgICBidG46IGNjLkJ1dHRvbjtcblxuICAgIHB1YmxpYyBsb2FkU2NlbmUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLnNjZW5lKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K577yM6L+Z6YeM5bCx5pivQnV0dG9uMlxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlVJTG9hZFNjZW5lXCI7Ly/ov5nkuKrmmK/ohJrmnKzmlofku7blkI1cbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwibG9hZFNjZW5lXCI7IC8v5Zue6LCD5Ye95ZCN56ewXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IG51bGw7IC8v55So5oi35pWw5o2uXG5cbiAgICAgICAgdGhpcy5idG4uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XG4gICAgfVxuICAgIFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Deadline.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f058gmeKtKVIkmd+mdctye', 'Deadline');
// scripts/Deadline.ts

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
var Deadline = /** @class */ (function (_super) {
    __extends(Deadline, _super);
    function Deadline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deadline.prototype.onCollisionEnter = function (other, self) {
        GameManager_1.default.instance.node.emit("gameOver");
    };
    Deadline = __decorate([
        ccclass
    ], Deadline);
    return Deadline;
}(cc.Component));
exports.default = Deadline;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0RlYWRsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDZDQUF3QztBQUVsQyxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQU1BLENBQUM7SUFKRyxtQ0FBZ0IsR0FBaEIsVUFBa0IsS0FBaUIsRUFBRSxJQUFnQjtRQUNqRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFKZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQU01QjtJQUFELGVBQUM7Q0FORCxBQU1DLENBTnFDLEVBQUUsQ0FBQyxTQUFTLEdBTWpEO2tCQU5vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi9HYW1lTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlYWRsaW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uQ29sbGlzaW9uRW50ZXIgKG90aGVyOmNjLkNvbGxpZGVyLCBzZWxmOmNjLkNvbGxpZGVyKSB7XG4gICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlLm5vZGUuZW1pdChcImdhbWVPdmVyXCIpO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUMxQixpREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQURyRDtRQUFBLHFFQXNIQztRQXRHQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLG1CQUFhLEdBQVcsR0FBRyxDQUFDO1FBRTVCLFlBQU0sR0FBRyxLQUFLLENBQUM7O0lBaUdqQixDQUFDO29CQXJIb0IsV0FBVztJQW1DOUIsd0JBQXdCO0lBRXRCLDRCQUFNLEdBQU47UUFFSSxhQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVixVQUFVLEVBQ1Y7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLDRCQUE0QjtnQkFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJO29CQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJO29CQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNqQztRQUNILENBQUMsRUFDRCxJQUFJLENBQ0wsQ0FBQztRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNWLFVBQVUsRUFDVixVQUFVLEtBQUs7WUFDZCxzQkFBc0I7WUFDdEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNuRCxDQUFDLEVBQ0QsSUFBSSxDQUNMLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixNQUFNLEVBQ1I7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsMEJBQTBCO2dCQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBRXBCO1FBQ0QsQ0FBQyxFQUNELElBQUksQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQWQsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFFZixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQy9DLGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVwQyxVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLFNBQVMsR0FBRyx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRVAsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2xCLHdFQUF3RTtZQUN2RSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzthQUNyQztJQUNILENBQUM7O0lBbkhNLHVCQUFXLEdBQVcsRUFBRSxDQUFDO0lBS2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDSTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2tEQUNDO0lBR3hCO1FBREMsUUFBUTs4Q0FDUztJQUdsQjtRQURDLFFBQVE7c0RBQ21CO0lBSzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ0U7SUFLckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztpREFDQTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO29EQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ0Q7SUFsQ0gsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFIL0I7SUFBRCxrQkFBQztDQXJIRCxBQXFIQyxDQXJId0MsRUFBRSxDQUFDLFNBQVMsR0FxSHBEO2tCQXJIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgSnVtcCBmcm9tIFwiLi9KdW1wXCI7XG5pbXBvcnQgUmFuZG9tU3Bhd25lciBmcm9tIFwiLi9SYW5kb21TcGF3bmVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjdXJyZW50R29hbDogbnVtYmVyID0gMTY7XG5cbiAgc3RhdGljIGluc3RhbmNlOiBHYW1lTWFuYWdlcjtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2FtZU92ZXJWaWV3OiBjYy5Ob2RlO1xuXG4gIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gIGN1cnJlbnRTdGFpcjogY2MuUmlnaWRCb2R5O1xuXG4gIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXG4gIG5leHRTdGFpcjogY2MuUmlnaWRCb2R5O1xuICAgIFxuICBAcHJvcGVydHlcbiAgc2NvcmU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5XG4gIHN0YWlyU3RhcnRQb3M6IG51bWJlciA9IDQ1MDtcblxuICBpc0p1bXAgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNjb3JlTGFiZWw6IGNjLkxhYmVsO1xuXG4gIGdhbWVPdmVyOiBmYWxzZTtcbiAgXG4gIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gIHNjb3JlU2Z4OiBjYy5BdWRpb0NsaXA7XG5cbiAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgZ2FtZU92ZXJTZng6IGNjLkF1ZGlvQ2xpcDtcblxuICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxuICBqdW1wU2Z4OiBjYy5BdWRpb0NsaXA7XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIEdhbWVNYW5hZ2VyLmluc3RhbmNlID0gdGhpcztcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgIFwiZ2FtZU92ZXJcIixcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnYW1lIG92ZXInKTtcbiAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmdhbWVPdmVyU2Z4LCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJWaWV3LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFpci5ub2RlICE9IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhaXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm5leHRTdGFpci5ub2RlICE9IG51bGwpXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0U3RhaXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICBcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICBcImFkZFNjb3JlXCIsXG4gICAgICBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAvLyBjYy5sb2coXCJhZGRTY29yZVwiKTtcbiAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc2NvcmVTZngsZmFsc2UsMSk7XG4gICAgICAgICAgdGhpcy5hZGRTY29yZShzY29yZSk7XG4gICAgICAgICAgdGhpcy5uZXh0U3RhaXIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgICB0aGlzLm5vZGUub24oXG4gICAgICAgIFwianVtcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNKdW1wKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJwbGF5ZXIganVtcFwiKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmp1bXBTZngsZmFsc2UsMik7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U3RhaXIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci5saW5lYXJEYW1waW5nID0gMDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpci5ncmF2aXR5ID0gMjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFpciA9IHRoaXMubmV4dFN0YWlyO1xuICAgICAgICAgIHRoaXMuaXNKdW1wID0gdHJ1ZTtcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gIH1cblxuICBhZGRTY29yZShzY29yZSkge1xuICAgIGlmICh0aGlzLmlzSnVtcCkge1xuXG4gICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcbiAgICAgIEp1bXAuaW5zdGFuY2Uubm9kZS5lbWl0KFwiYWRkU2NvcmVcIik7XG4gICAgIFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3Bhd25TdGFpcigpO1xuICAgICAgfSwgMTUwMCk7IFxuICAgICAgdGhpcy5pc0p1bXAgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzcGF3blN0YWlyKCkge1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdmFyIG5leHRTdGFpciA9IFJhbmRvbVNwYXduZXIuaW5zdGFuY2Uuc3Bhd24oKS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgIHRoaXMubmV4dFN0YWlyID0gbmV4dFN0YWlyO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuXG4gICAgaWYoIXRoaXMuZ2FtZU92ZXIpXG4gICAvLyBjYy5sb2codGhpcy5jdXJyZW50U3RhaXIubm9kZS5wb3NpdGlvbi55ICsgXCIsXCIgKyB0aGlzLnN0YWlyU3RhcnRQb3MpO1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGFpci5ub2RlLnBvc2l0aW9uLnkgPiB0aGlzLnN0YWlyU3RhcnRQb3MpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHlTY2FsZSA9IDIwMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFN0YWlyLmdyYXZpdHlTY2FsZSA9IDEwO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Sensor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f22b1a6JrZFDqJwMan5b8QK', 'Sensor');
// scripts/Sensor.ts

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
var Sensor = /** @class */ (function (_super) {
    __extends(Sensor, _super);
    function Sensor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sensor.prototype.start = function () {
    };
    Sensor.prototype.onCollisionEnter = function (other, self) {
        console.log('on collision enter');
        GameManager_1.default.instance.node.emit("addScore", 1);
        this.node.destroy();
    };
    Sensor = __decorate([
        ccclass
    ], Sensor);
    return Sensor;
}(cc.Component));
exports.default = Sensor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NlbnNvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDs7SUFZQSxDQUFDO0lBVEcsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCxpQ0FBZ0IsR0FBaEIsVUFBa0IsS0FBaUIsRUFBRSxJQUFnQjtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBVmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FZMUI7SUFBRCxhQUFDO0NBWkQsQUFZQyxDQVptQyxFQUFFLENBQUMsU0FBUyxHQVkvQztrQkFab0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5zb3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlciAob3RoZXI6Y2MuQ29sbGlkZXIsIHNlbGY6Y2MuQ29sbGlkZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbGxpc2lvbiBlbnRlcicpO1xuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5ub2RlLmVtaXQoXCJhZGRTY29yZVwiLCAxKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2bcfdBdoh1FK66QmYQwUwGj', 'NewScript');
// scripts/NewScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL05ld1NjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBa0JDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UICloneText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a08c7Ckq11LHq3QIsmnsixV', 'UICloneText');
// scripts/UICloneText.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UICloneText = /** @class */ (function (_super) {
    __extends(UICloneText, _super);
    function UICloneText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.target = null;
        return _this;
    }
    UICloneText.prototype.start = function () {
        this.getComponent(cc.Label).string = this.target.string;
    };
    __decorate([
        property(cc.Label)
    ], UICloneText.prototype, "target", void 0);
    UICloneText = __decorate([
        ccclass
    ], UICloneText);
    return UICloneText;
}(cc.Component));
exports.default = UICloneText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1VJQ2xvbmVUZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUFXQztRQVBHLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBTzVCLENBQUM7SUFMRywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVELENBQUM7SUFKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNLO0lBSFAsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQVUvQjtJQUFELGtCQUFDO0NBVkQsQUFVQyxDQVZ3QyxFQUFFLENBQUMsU0FBUyxHQVVwRDtrQkFWb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQ2xvbmVUZXh0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0YXJnZXQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudGFyZ2V0LnN0cmluZztcbiAgICB9XG5cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RandomSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54f1fjd9ndMGoGrN6SyCrrd', 'RandomSprite');
// scripts/RandomSprite.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RandomSprite = /** @class */ (function (_super) {
    __extends(RandomSprite, _super);
    function RandomSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteFrames = [];
        return _this;
    }
    RandomSprite.prototype.start = function () {
        this.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this.randomIntFromInterval(0, this.spriteFrames.length - 1)];
    };
    RandomSprite.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    __decorate([
        property([cc.SpriteFrame])
    ], RandomSprite.prototype, "spriteFrames", void 0);
    RandomSprite = __decorate([
        ccclass
    ], RandomSprite);
    return RandomSprite;
}(cc.Component));
exports.default = RandomSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JhbmRvbVNwcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBYUM7UUFURyxrQkFBWSxHQUFxQixFQUFFLENBQUM7O0lBU3hDLENBQUM7SUFQRyw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlILENBQUM7SUFFRCw0Q0FBcUIsR0FBckIsVUFBc0IsR0FBRyxFQUFFLEdBQUc7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQVJIO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3NEQUNTO0lBSG5CLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FZaEM7SUFBRCxtQkFBQztDQVpELEFBWUMsQ0FaeUMsRUFBRSxDQUFDLFNBQVMsR0FZckQ7a0JBWm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21TcHJpdGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVzW3RoaXMucmFuZG9tSW50RnJvbUludGVydmFsKDAsIHRoaXMuc3ByaXRlRnJhbWVzLmxlbmd0aCAtIDEpXTtcbiAgICB9XG5cbiAgICByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AudioButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c9c1gjx25MeaNvmVpCQvrc', 'AudioButton');
// scripts/AudioButton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIAudioButton = /** @class */ (function (_super) {
    __extends(UIAudioButton, _super);
    function UIAudioButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        return _this;
    }
    UIAudioButton.prototype.playAudio = function () {
        cc.audioEngine.play(this.audio, false, 1);
    };
    UIAudioButton.prototype.onLoad = function () {
        this.btn = this.node.getComponent(cc.Button);
    };
    UIAudioButton.prototype.start = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点，这里就是Button2
        clickEventHandler.component = "UIAudioButton"; //这个是脚本文件名
        clickEventHandler.handler = "playAudio"; //回调函名称
        clickEventHandler.customEventData = null; //用户数据
        this.btn.clickEvents.push(clickEventHandler);
    };
    __decorate([
        property(cc.AudioClip)
    ], UIAudioButton.prototype, "audio", void 0);
    UIAudioButton = __decorate([
        ccclass
    ], UIAudioButton);
    return UIAudioButton;
}(cc.Component));
exports.default = UIAudioButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0F1ZGlvQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFEdkQ7UUFBQSxxRUEwQkM7UUF0QkcsV0FBSyxHQUFpQixJQUFJLENBQUM7O0lBc0IvQixDQUFDO0lBakJVLGlDQUFTLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsd0NBQXdDO1FBQzlFLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsQ0FBQSxVQUFVO1FBQ3hELGlCQUFpQixDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxPQUFPO1FBQ2hELGlCQUFpQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDSTtJQUhWLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F5QmpDO0lBQUQsb0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QjBDLEVBQUUsQ0FBQyxTQUFTLEdBeUJ0RDtrQkF6Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUF1ZGlvQnV0dG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cblxuICAgIGJ0bjogY2MuQnV0dG9uO1xuXG4gICAgcHVibGljIHBsYXlBdWRpbygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmJ0biA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCue+8jOi/memHjOWwseaYr0J1dHRvbjJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJVSUF1ZGlvQnV0dG9uXCI7Ly/ov5nkuKrmmK/ohJrmnKzmlofku7blkI1cbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwicGxheUF1ZGlvXCI7IC8v5Zue6LCD5Ye95ZCN56ewXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IG51bGw7IC8v55So5oi35pWw5o2uXG4gICAgICAgIHRoaXMuYnRuLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UIAudioButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c9c1gjx25MeaNvmVpCQvrc', 'UIAudioButton');
// scripts/UIAudioButton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIAudioButton = /** @class */ (function (_super) {
    __extends(UIAudioButton, _super);
    function UIAudioButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        return _this;
    }
    UIAudioButton.prototype.playAudio = function () {
        cc.audioEngine.play(this.audio, false, 1);
    };
    UIAudioButton.prototype.onLoad = function () {
        this.btn = this.node.getComponent(cc.Button);
    };
    UIAudioButton.prototype.start = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点，这里就是Button2
        clickEventHandler.component = "UIAudioButton"; //这个是脚本文件名
        clickEventHandler.handler = "playAudio"; //回调函名称
        clickEventHandler.customEventData = null; //用户数据
        this.btn.clickEvents.push(clickEventHandler);
    };
    __decorate([
        property(cc.AudioClip)
    ], UIAudioButton.prototype, "audio", void 0);
    UIAudioButton = __decorate([
        ccclass
    ], UIAudioButton);
    return UIAudioButton;
}(cc.Component));
exports.default = UIAudioButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1VJQXVkaW9CdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUR2RDtRQUFBLHFFQTBCQztRQXRCRyxXQUFLLEdBQWlCLElBQUksQ0FBQzs7SUFzQi9CLENBQUM7SUFqQlUsaUNBQVMsR0FBaEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyx3Q0FBd0M7UUFDOUUsaUJBQWlCLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxDQUFBLFVBQVU7UUFDeEQsaUJBQWlCLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU87UUFDaEQsaUJBQWlCLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU07UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQXBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNJO0lBSFYsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXlCakM7SUFBRCxvQkFBQztDQXpCRCxBQXlCQyxDQXpCMEMsRUFBRSxDQUFDLFNBQVMsR0F5QnREO2tCQXpCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQXVkaW9CdXR0b24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBhdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuXG4gICAgYnRuOiBjYy5CdXR0b247XG5cbiAgICBwdWJsaWMgcGxheUF1ZGlvKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXVkaW8sIGZhbHNlLCAxKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K577yM6L+Z6YeM5bCx5pivQnV0dG9uMlxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlVJQXVkaW9CdXR0b25cIjsvL+i/meS4quaYr+iEmuacrOaWh+S7tuWQjVxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJwbGF5QXVkaW9cIjsgLy/lm57osIPlh73lkI3np7BcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gbnVsbDsgLy/nlKjmiLfmlbDmja5cbiAgICAgICAgdGhpcy5idG4uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Touch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2bcfdBdoh1FK66QmYQwUwGj', 'Touch');
// scripts/Touch.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Touch = /** @class */ (function (_super) {
    __extends(Touch, _super);
    function Touch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Touch.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            Jump_1.default.instance.node.emit("touchStart");
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            Jump_1.default.instance.node.emit("touchEnd");
        }, this);
    };
    Touch = __decorate([
        ccclass
    ], Touch);
    return Touch;
}(cc.Component));
exports.default = Touch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1RvdWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUVwQixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQW1CQSxDQUFDO0lBaEJHLHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQzdCO1lBQ0ksY0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNSLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0I7WUFDSSxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO0lBQ04sQ0FBQztJQWxCZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW1CekI7SUFBRCxZQUFDO0NBbkJELEFBbUJDLENBbkJrQyxFQUFFLENBQUMsU0FBUyxHQW1COUM7a0JBbkJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBKdW1wIGZyb20gXCIuL0p1bXBcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgSnVtcC5pbnN0YW5jZS5ub2RlLmVtaXQoXCJ0b3VjaFN0YXJ0XCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEp1bXAuaW5zdGFuY2Uubm9kZS5lbWl0KFwidG91Y2hFbmRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PrivacySetup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84df0WtzxpNCYA8w364uodV', 'PrivacySetup');
// scripts/PrivacySetup.ts

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
var GameData_1 = require("./GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrivacySetup = /** @class */ (function (_super) {
    __extends(PrivacySetup, _super);
    function PrivacySetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrivacySetup.prototype.start = function () {
        cc.log("privacyUrl" + this.encode_utf8(GameData_1.default.privacyUrl));
        this.webView.url = this.encode_utf8(GameData_1.default.privacyUrl);
    };
    PrivacySetup.prototype.encode_utf8 = function (s) {
        return unescape(encodeURIComponent(s));
    };
    __decorate([
        property(cc.WebView)
    ], PrivacySetup.prototype, "webView", void 0);
    PrivacySetup = __decorate([
        ccclass
    ], PrivacySetup);
    return PrivacySetup;
}(cc.Component));
exports.default = PrivacySetup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1ByaXZhY3lTZXR1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1Q0FBa0M7QUFFNUIsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDs7SUFjQSxDQUFDO0lBVEcsNEJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFhLENBQUM7UUFDVixPQUFPLFFBQVEsQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0lBQy9DLENBQUM7SUFURDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNEO0lBSEgsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWNoQztJQUFELG1CQUFDO0NBZEQsQUFjQyxDQWR5QyxFQUFFLENBQUMsU0FBUyxHQWNyRDtrQkFkb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vR2FtZURhdGFcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcml2YWN5U2V0dXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLldlYlZpZXcpXG4gICAgd2ViVmlldzogY2MuV2ViVmlldztcbiAgICAgICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLmxvZyhcInByaXZhY3lVcmxcIit0aGlzLmVuY29kZV91dGY4KEdhbWVEYXRhLnByaXZhY3lVcmwpKTtcbiAgICAgICAgdGhpcy53ZWJWaWV3LnVybCA9IHRoaXMuZW5jb2RlX3V0ZjgoR2FtZURhdGEucHJpdmFjeVVybCk7XG4gICAgfVxuXG4gICAgZW5jb2RlX3V0ZjgoIHMgKXtcbiAgICAgICAgcmV0dXJuIHVuZXNjYXBlKCBlbmNvZGVVUklDb21wb25lbnQoIHMgKSApO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Appegg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56067bH9BFHoIO3XLLij2yi', 'Appegg');
// scripts/Appegg.ts

"use strict";
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
var GameData_1 = require("./GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Appegg = /** @class */ (function (_super) {
    __extends(Appegg, _super);
    function Appegg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.configUrl = "https://api2.bmob.cn/1/classes/List/uYzgaaad";
        _this.apiKey = "cea1f887c9266afc24caef6c822b200d";
        _this.restApiKey = "690abdf51c311db72949a4d6410f2b66";
        return _this;
        /*  onRetryClick(event) {
            this.errorView.active = false;
            this.connect();
          }
        
          onPrivacyClick(event) {
            this.webView.active = true;
          }
        
          onStartClick(event) {
            cc.director.loadScene("entry");
          }*/
    }
    Appegg.prototype.start = function () {
        this.connect();
    };
    Appegg.prototype.connect = function () {
        this.httpGetAsync(this.configUrl, function (str) {
            console.log(str);
            var obj = JSON.parse(str);
            GameData_1.default.url = obj.url;
            GameData_1.default.privacyUrl = obj.privacyUrl;
            console.log("当前appType为" + obj.appType);
            switch (obj.appType) {
                case 1:
                    //if (this.currentVersion != obj.version)
                    cc.director.loadScene("main");
                    break;
                case 2:
                    cc.director.loadScene("web");
                    break;
                case 3:
                    break;
            }
        }, function () {
            //cc.log("连接失败");
        });
    };
    Appegg.prototype.httpGetAsync = function (theUrl, callback, error) {
        if (error === void 0) { error = null; }
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onerror ==
            function (e) {
                console.log("网络错误");
            };
        xmlHttp.ontimeout ==
            function (e) {
                console.log("网络超时");
            };
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
            else {
                error();
            }
        };
        xmlHttp.open("GET", theUrl, false); // true 为异步
        xmlHttp.setRequestHeader("X-Bmob-Application-Id", this.apiKey);
        xmlHttp.setRequestHeader("X-Bmob-REST-API-Key", this.restApiKey);
        xmlHttp.send(null);
    };
    Appegg = __decorate([
        ccclass
    ], Appegg);
    return Appegg;
}(cc.Component));
exports.default = Appegg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0FwcGVnZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFNUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQURoRDtRQUFBLHFFQTRFQztRQTFFQyxlQUFTLEdBQVcsOENBQThDLENBQUM7UUFDbkUsWUFBTSxHQUFXLGtDQUFrQyxDQUFDO1FBQ3BELGdCQUFVLEdBQVcsa0NBQWtDLENBQUM7O1FBMkQxRDs7Ozs7Ozs7Ozs7YUFXSztJQUVMLENBQUM7SUF0RUMsc0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQ2YsSUFBSSxDQUFDLFNBQVMsRUFDZCxVQUFVLEdBQUc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsa0JBQVEsQ0FBQyxHQUFHLEdBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN0QixrQkFBUSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxRQUFRLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQztvQkFDSix5Q0FBeUM7b0JBQ3pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5QixNQUFNO2dCQUNSLEtBQUssQ0FBQztvQkFDSixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsTUFBTTtnQkFDUixLQUFLLENBQUM7b0JBQ0osTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUNEO1lBQ0UsaUJBQWlCO1FBQ25CLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUlELDZCQUFZLEdBQVosVUFBYSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQVk7UUFBWixzQkFBQSxFQUFBLFlBQVk7UUFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsT0FBTztZQUNiLFVBQVUsQ0FBQztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxTQUFTO1lBQ2YsVUFBVSxDQUFDO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLGtCQUFrQixHQUFHO1lBQzNCLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHO2dCQUNsRCxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM1QjtnQkFDSCxLQUFLLEVBQUUsQ0FBQzthQUNUO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVztRQUMvQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBNURrQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMkUxQjtJQUFELGFBQUM7Q0EzRUQsQUEyRUMsQ0EzRW1DLEVBQUUsQ0FBQyxTQUFTLEdBMkUvQztrQkEzRW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4vR2FtZURhdGFcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGVnZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIGNvbmZpZ1VybDogc3RyaW5nID0gXCJodHRwczovL2FwaTIuYm1vYi5jbi8xL2NsYXNzZXMvTGlzdC91WXpnYWFhZFwiO1xuICBhcGlLZXk6IHN0cmluZyA9IFwiY2VhMWY4ODdjOTI2NmFmYzI0Y2FlZjZjODIyYjIwMGRcIjtcbiAgcmVzdEFwaUtleTogc3RyaW5nID0gXCI2OTBhYmRmNTFjMzExZGI3Mjk0OWE0ZDY0MTBmMmI2NlwiO1xuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLmh0dHBHZXRBc3luYyhcbiAgICAgIHRoaXMuY29uZmlnVXJsLFxuICAgICAgZnVuY3Rpb24gKHN0cikge1xuICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xuICAgICAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICBHYW1lRGF0YS51cmw9IG9iai51cmw7XG4gICAgICAgIEdhbWVEYXRhLnByaXZhY3lVcmwgPSBvYmoucHJpdmFjeVVybDtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY1hcHBUeXBl5Li6XCIgKyBvYmouYXBwVHlwZSk7XG4gICAgICAgIHN3aXRjaCAob2JqLmFwcFR5cGUpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAvL2lmICh0aGlzLmN1cnJlbnRWZXJzaW9uICE9IG9iai52ZXJzaW9uKVxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIndlYlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NjLmxvZyhcIui/nuaOpeWksei0pVwiKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cblxuXG4gIGh0dHBHZXRBc3luYyh0aGVVcmwsIGNhbGxiYWNrLCBlcnJvciA9IG51bGwpIHtcbiAgICB2YXIgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhtbEh0dHAub25lcnJvciA9PVxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLnvZHnu5zplJnor69cIik7XG4gICAgICB9O1xuICAgIHhtbEh0dHAub250aW1lb3V0ID09XG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIue9kee7nOi2heaXtlwiKTtcbiAgICAgIH07XG4gICAgeG1sSHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoeG1sSHR0cC5yZWFkeVN0YXRlID09IDQgJiYgeG1sSHR0cC5zdGF0dXMgPT0gMjAwKVxuICAgICAgICBjYWxsYmFjayh4bWxIdHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXJyb3IoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgeG1sSHR0cC5vcGVuKFwiR0VUXCIsIHRoZVVybCwgZmFsc2UpOyAvLyB0cnVlIOS4uuW8guatpVxuICAgIHhtbEh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIlgtQm1vYi1BcHBsaWNhdGlvbi1JZFwiLCB0aGlzLmFwaUtleSk7XG4gICAgeG1sSHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1CbW9iLVJFU1QtQVBJLUtleVwiLCB0aGlzLnJlc3RBcGlLZXkpO1xuICAgIHhtbEh0dHAuc2VuZChudWxsKTtcbiAgfVxuXG4vKiAgb25SZXRyeUNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5lcnJvclZpZXcuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBvblByaXZhY3lDbGljayhldmVudCkge1xuICAgIHRoaXMud2ViVmlldy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgb25TdGFydENsaWNrKGV2ZW50KSB7XG4gICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZW50cnlcIik7XG4gIH0qL1xuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WebViewObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d16forR2xGObPIeC7EU3ln', 'WebViewObject');
// scripts/WebViewObject.ts

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
var GameData_1 = require("./GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WebViewObject = /** @class */ (function (_super) {
    __extends(WebViewObject, _super);
    function WebViewObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebViewObject.prototype.start = function () {
        this.node.setContentSize(cc.winSize);
        var webView = this.getComponent(cc.WebView);
        var idfa = jsb.reflection.callStaticMethod("DeviceUtils", "getIDFAString");
        var idfv = jsb.reflection.callStaticMethod("DeviceUtils", "getIDFVString");
        webView.url = this.encode_utf8(this.FormatString(GameData_1.default.url, idfa, idfv));
    };
    WebViewObject.prototype.FormatString = function (str) {
        var val = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            val[_i - 1] = arguments[_i];
        }
        for (var index = 0; index < val.length; index++) {
            str = str.replace("{" + index + "}", val[index]);
        }
        return str;
    };
    WebViewObject.prototype.encode_utf8 = function (s) {
        return unescape(encodeURIComponent(s));
    };
    WebViewObject = __decorate([
        ccclass
    ], WebViewObject);
    return WebViewObject;
}(cc.Component));
exports.default = WebViewObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1dlYlZpZXdPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsdUNBQWtDO0FBRTVCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7O0lBcUJBLENBQUM7SUFuQkcsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRSxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBUSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEdBQVc7UUFBRSxhQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsNEJBQWdCOztRQUN0QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFJLEtBQUssTUFBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUosbUNBQVcsR0FBWCxVQUFhLENBQUM7UUFDVCxPQUFPLFFBQVEsQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFDO0lBQy9DLENBQUM7SUFuQmdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FxQmpDO0lBQUQsb0JBQUM7Q0FyQkQsQUFxQkMsQ0FyQjBDLEVBQUUsQ0FBQyxTQUFTLEdBcUJ0RDtrQkFyQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVEYXRhIGZyb20gXCIuL0dhbWVEYXRhXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViVmlld09iamVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplIChjYy53aW5TaXplKTtcbiAgICAgICAgbGV0IHdlYlZpZXcgPSB0aGlzLmdldENvbXBvbmVudChjYy5XZWJWaWV3KTtcbiAgICAgICAgdmFyIGlkZmEgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiRGV2aWNlVXRpbHNcIiwgXCJnZXRJREZBU3RyaW5nXCIpO1xuICAgICAgICB2YXIgaWRmdiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJEZXZpY2VVdGlsc1wiLCBcImdldElERlZTdHJpbmdcIik7XG4gICAgICAgIHdlYlZpZXcudXJsID0gdGhpcy5lbmNvZGVfdXRmOCh0aGlzLkZvcm1hdFN0cmluZyhHYW1lRGF0YS51cmwsaWRmYSxpZGZ2KSk7XG4gICAgfVxuXG4gICAgRm9ybWF0U3RyaW5nKHN0cjogc3RyaW5nLCAuLi52YWw6IHN0cmluZ1tdKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWwubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoYHske2luZGV4fX1gLCB2YWxbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfVxuXG4gICBlbmNvZGVfdXRmOCggcyApe1xuICAgICAgICByZXR1cm4gdW5lc2NhcGUoIGVuY29kZVVSSUNvbXBvbmVudCggcyApICk7XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6da6IKwsVJOZ7mEH2hMbdB', 'GameData');
// scripts/GameData.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var GameData = /** @class */ (function () {
    function GameData() {
    }
    GameData.score = 0;
    return GameData;
}());
exports.default = GameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7QUFFbEY7SUFBQTtJQUlBLENBQUM7SUFIVSxjQUFLLEdBQVcsQ0FBQyxDQUFDO0lBRzdCLGVBQUM7Q0FKRCxBQUlDLElBQUE7a0JBSm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURhdGEge1xuICAgIHN0YXRpYyBzY29yZTogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgdXJsOiBzdHJpbmc7XG4gIHN0YXRpYyBwcml2YWN5VXJsOiBzdHJpbmc7XG59XG4gICBcbiJdfQ==
//------QC-SOURCE-SPLIT------
