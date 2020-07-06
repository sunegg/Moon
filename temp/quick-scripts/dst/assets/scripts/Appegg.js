
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