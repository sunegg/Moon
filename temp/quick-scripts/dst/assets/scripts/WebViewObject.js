
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