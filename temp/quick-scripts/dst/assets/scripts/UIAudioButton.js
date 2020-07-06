
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