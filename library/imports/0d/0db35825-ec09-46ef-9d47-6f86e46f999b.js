"use strict";
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