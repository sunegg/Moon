"use strict";
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