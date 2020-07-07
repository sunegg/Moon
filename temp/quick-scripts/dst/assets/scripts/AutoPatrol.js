
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AutoPatrol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffdbfcwhs1OY7IQQOKqVOhS', 'AutoPatrol');
// scripts/AutoPatrol.ts

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
var AutoPatrol = /** @class */ (function (_super) {
    __extends(AutoPatrol, _super);
    function AutoPatrol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.amplitude = 200;
        _this.speed = 1;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    AutoPatrol.prototype.start = function () {
        this.move();
    };
    AutoPatrol.prototype.move = function () {
        var _this = this;
        cc.tween(this.node)
            .to(1 * this.speed, { position: cc.v2(-this.amplitude, this.node.position.y) })
            .to(1 * this.speed, { position: cc.v2(this.amplitude, this.node.position.y) })
            .call(function () { _this.move(); }).start();
    };
    __decorate([
        property
    ], AutoPatrol.prototype, "amplitude", void 0);
    __decorate([
        property
    ], AutoPatrol.prototype, "speed", void 0);
    AutoPatrol = __decorate([
        ccclass
    ], AutoPatrol);
    return AutoPatrol;
}(cc.Component));
exports.default = AutoPatrol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0F1dG9QYXRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQURwRDtRQUFBLHFFQXdCQztRQXBCRyxlQUFTLEdBQVMsR0FBRyxDQUFDO1FBR3RCLFdBQUssR0FBVyxDQUFDLENBQUM7O1FBZ0JsQixpQkFBaUI7SUFDckIsQ0FBQztJQWZHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUFBLGlCQUtDO1FBSkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ3RFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUM3RSxJQUFJLENBQUMsY0FBUSxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBbEJEO1FBREMsUUFBUTtpREFDYTtJQUd0QjtRQURDLFFBQVE7NkNBQ1M7SUFORCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdUI5QjtJQUFELGlCQUFDO0NBdkJELEFBdUJDLENBdkJ1QyxFQUFFLENBQUMsU0FBUyxHQXVCbkQ7a0JBdkJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi9HYW1lRGF0YVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9QYXRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgYW1wbGl0dWRlOiBudW1iZXI9MjAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDE7XG4gICAgXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAudG8oMSp0aGlzLnNwZWVkLCB7IHBvc2l0aW9uOmNjLnYyKC10aGlzLmFtcGxpdHVkZSx0aGlzLm5vZGUucG9zaXRpb24ueSkgfSlcbiAgICAgICAgICAgIC50bygxICogdGhpcy5zcGVlZCwgeyBwb3NpdGlvbjogY2MudjIodGhpcy5hbXBsaXR1ZGUsIHRoaXMubm9kZS5wb3NpdGlvbi55KSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLm1vdmUoKSB9KS5zdGFydCgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19