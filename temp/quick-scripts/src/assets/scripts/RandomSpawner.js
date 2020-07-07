"use strict";
cc._RF.push(module, '18c8f4yXeREFqz+lDkzkDLA', 'RandomSpawner');
// scripts/RandomSpawner.ts

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
var RandomSpawner = /** @class */ (function (_super) {
    __extends(RandomSpawner, _super);
    function RandomSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.repeat = false;
        _this.interval = 5;
        _this.minY = 0;
        _this.maxY = 0;
        _this.offsetY = 0;
        return _this;
        // update (dt) {}
    }
    RandomSpawner_1 = RandomSpawner;
    RandomSpawner.prototype.onLoad = function () {
        RandomSpawner_1.instance = this;
        this.node.on("spawn", this.spawn, this);
    };
    /* start() {
         if (this.repeat) {
             this.spawn();
             this.schedule(function () {
                 // 这里的 this 指向 component
                 this.spawn();
             }, this.interval);
         }
     }*/
    RandomSpawner.prototype.spawn = function () {
        cc.log("spawnStair");
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.prefab);
        node.parent = this.parent;
        node.position = cc.v3(0, this.randomIntFromInterval(this.minY, this.maxY + this.offsetY), 0);
        //node.setPosition(0, 0);
        return node;
    };
    RandomSpawner.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    var RandomSpawner_1;
    __decorate([
        property(cc.Prefab)
    ], RandomSpawner.prototype, "prefab", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "repeat", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "interval", void 0);
    __decorate([
        property(cc.Node)
    ], RandomSpawner.prototype, "parent", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "minY", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "maxY", void 0);
    __decorate([
        property
    ], RandomSpawner.prototype, "offsetY", void 0);
    RandomSpawner = RandomSpawner_1 = __decorate([
        ccclass
    ], RandomSpawner);
    return RandomSpawner;
}(cc.Component));
exports.default = RandomSpawner;

cc._RF.pop();