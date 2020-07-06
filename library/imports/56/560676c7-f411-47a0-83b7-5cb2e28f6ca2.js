"use strict";
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