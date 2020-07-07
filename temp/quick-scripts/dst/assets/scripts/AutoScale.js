
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AutoScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7780b0pLipIfJf+QKbJDCns', 'AutoScale');
// scripts/AutoScale.ts

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
var AutoScale = /** @class */ (function (_super) {
    __extends(AutoScale, _super);
    function AutoScale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        _this.max = 1.1;
        _this.min = 0.9;
        return _this;
    }
    AutoScale.prototype.start = function () {
        this.rotate();
    };
    AutoScale.prototype.rotate = function () {
        var _this = this;
        cc.tween(this.node)
            .to(1 * this.speed, { scale: this.max })
            .to(1 * this.speed, { scale: this.min })
            .call(function () { _this.rotate(); }).start();
    };
    __decorate([
        property
    ], AutoScale.prototype, "speed", void 0);
    __decorate([
        property
    ], AutoScale.prototype, "max", void 0);
    __decorate([
        property
    ], AutoScale.prototype, "min", void 0);
    AutoScale = __decorate([
        ccclass
    ], AutoScale);
    return AutoScale;
}(cc.Component));
exports.default = AutoScale;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0F1dG9TY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBcUJDO1FBbEJHLFdBQUssR0FBUyxDQUFDLENBQUM7UUFHaEIsU0FBRyxHQUFXLEdBQUcsQ0FBQztRQUdsQixTQUFHLEdBQVcsR0FBRyxDQUFDOztJQVl0QixDQUFDO0lBVkcseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUFBLGlCQUtDO1FBSkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDckMsRUFBRSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNqQyxJQUFJLENBQUMsY0FBUSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBakJEO1FBREMsUUFBUTs0Q0FDTztJQUdoQjtRQURDLFFBQVE7MENBQ1M7SUFHbEI7UUFEQyxRQUFROzBDQUNTO0lBUkQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9CN0I7SUFBRCxnQkFBQztDQXBCRCxBQW9CQyxDQXBCc0MsRUFBRSxDQUFDLFNBQVMsR0FvQmxEO2tCQXBCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9TY2FsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlcj0xO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbWF4OiBudW1iZXIgPSAxLjE7XG4gICAgXG4gICAgQHByb3BlcnR5XG4gICAgbWluOiBudW1iZXIgPSAwLjk7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMucm90YXRlKCk7XG4gICAgfVxuXG4gICAgcm90YXRlKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC50bygxKnRoaXMuc3BlZWQsIHsgc2NhbGU6IHRoaXMubWF4IH0pXG4gICAgICAgIC50bygxKnRoaXMuc3BlZWQsIHsgc2NhbGU6IHRoaXMubWluIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7IHRoaXMucm90YXRlKCkgfSkuc3RhcnQoKTtcbiAgICB9XG59XG4iXX0=