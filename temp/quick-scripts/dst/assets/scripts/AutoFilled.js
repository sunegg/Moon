
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AutoFilled.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0db35gl7AlG751Hb4bkb5mb', 'AutoFilled');
// scripts/AutoFilled.ts

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
var AutoFilled = /** @class */ (function (_super) {
    __extends(AutoFilled, _super);
    function AutoFilled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        return _this;
    }
    AutoFilled_1 = AutoFilled;
    AutoFilled.prototype.onLoad = function () {
        AutoFilled_1.instance = this;
        this.image = this.getComponent(cc.Sprite);
        this.node.on("fill", function () {
            this.image.fillRange = 1;
        }, this);
    };
    AutoFilled.prototype.update = function (dt) {
        this.image.fillRange -= dt * this.speed;
        if (this.image.fillRange <= 0) {
            GameManager_1.default.instance.node.emit("gameOver");
        }
    };
    var AutoFilled_1;
    __decorate([
        property
    ], AutoFilled.prototype, "speed", void 0);
    AutoFilled = AutoFilled_1 = __decorate([
        ccclass
    ], AutoFilled);
    return AutoFilled;
}(cc.Component));
exports.default = AutoFilled;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0F1dG9GaWxsZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkNBQXdDO0FBRWxDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUErQkM7UUF6QkcsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUF5QnRCLENBQUM7bUJBOUJvQixVQUFVO0lBUzNCLDJCQUFNLEdBQU47UUFDSSxZQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNSLE1BQU0sRUFDTjtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQ0QsSUFBSSxDQUNMLENBQUM7SUFDUixDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUMzQixxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQzs7SUF0QkQ7UUFEQyxRQUFROzZDQUNTO0lBTEQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThCOUI7SUFBRCxpQkFBQztDQTlCRCxBQThCQyxDQTlCdUMsRUFBRSxDQUFDLFNBQVMsR0E4Qm5EO2tCQTlCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvRmlsbGVkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGltYWdlOiBjYy5TcHJpdGU7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMTtcblxuICAgIHN0YXRpYyBpbnN0YW5jZTogQXV0b0ZpbGxlZDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgQXV0b0ZpbGxlZC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oXG4gICAgICAgICAgICBcImZpbGxcIixcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLmZpbGxSYW5nZSA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmltYWdlLmZpbGxSYW5nZSAtPSBkdCAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIGlmICh0aGlzLmltYWdlLmZpbGxSYW5nZSA8PSAwKSB7XG4gICAgICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5ub2RlLmVtaXQoXCJnYW1lT3ZlclwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufVxuIl19