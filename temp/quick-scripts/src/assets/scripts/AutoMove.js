"use strict";
cc._RF.push(module, 'a941d7I9FNP9LamsiFFbU28', 'AutoMove');
// scripts/AutoMove.ts

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
var AutoMove = /** @class */ (function (_super) {
    __extends(AutoMove, _super);
    function AutoMove() {
        // @property(cc.Node)
        // target: cc.Node;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.endPos = new cc.Vec2(0, 0);
        return _this;
    }
    AutoMove.prototype.start = function () {
        this.startPos = this.node.position;
        cc.log(this.startPos.toString());
        this.moveToTarget();
    };
    AutoMove.prototype.moveToTarget = function () {
        cc
            .tween(this.node)
            .to(this.speed, { position: cc.v2(this.endPos.x, this.node.position.y + this.endPos.y) })
            .start();
    };
    __decorate([
        property
    ], AutoMove.prototype, "speed", void 0);
    __decorate([
        property
    ], AutoMove.prototype, "endPos", void 0);
    AutoMove = __decorate([
        ccclass
    ], AutoMove);
    return AutoMove;
}(cc.Component));
exports.default = AutoMove;

cc._RF.pop();