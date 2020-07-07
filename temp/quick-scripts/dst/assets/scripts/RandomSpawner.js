
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/RandomSpawner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JhbmRvbVNwYXduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUR2RDtRQUFBLHFFQTJEQztRQWxERyxZQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFNdkIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBSWpCLGFBQU8sR0FBVyxDQUFDLENBQUM7O1FBaUNsQixpQkFBaUI7SUFDckIsQ0FBQztzQkExRG9CLGFBQWE7SUEwQjlCLDhCQUFNLEdBQU47UUFDSSxlQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixPQUFPLEVBQ1AsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUY7Ozs7Ozs7O1FBUUk7SUFFSCw2QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLHlCQUF5QjtRQUN2QixPQUFPLElBQUksQ0FBQztJQUNqQixDQUFDO0lBRUQsNkNBQXFCLEdBQXJCLFVBQXNCLEdBQUcsRUFBRSxHQUFHO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7O0lBbERIO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0Y7SUFHbEI7UUFEQyxRQUFRO2lEQUNlO0lBR3hCO1FBREMsUUFBUTttREFDWTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNGO0lBR2xCO1FBREMsUUFBUTsrQ0FDUTtJQUdqQjtRQURDLFFBQVE7K0NBQ1E7SUFJakI7UUFEQyxRQUFRO2tEQUNXO0lBeEJELGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EwRGpDO0lBQUQsb0JBQUM7Q0ExREQsQUEwREMsQ0ExRDBDLEVBQUUsQ0FBQyxTQUFTLEdBMER0RDtrQkExRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBpbnN0YW5jZTogUmFuZG9tU3Bhd25lcjtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiOiBjYy5QcmVmYWI7XG5cbiAgICBAcHJvcGVydHlcbiAgICByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGludGVydmFsOiBudW1iZXIgPSA1O1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhcmVudDogY2MuTm9kZTtcblxuICBAcHJvcGVydHlcbiAgbWluWTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHlcbiAgbWF4WTogbnVtYmVyID0gMDtcbiAgICBcbiAgICBcbiAgQHByb3BlcnR5XG4gIG9mZnNldFk6IG51bWJlciA9IDA7XG4gICAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBSYW5kb21TcGF3bmVyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgICAgXCJzcGF3blwiLFxuICAgICAgICAgICAgdGhpcy5zcGF3biwgdGhpcyk7XG4gICAgfVxuXG4gICAvKiBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVwZWF0KSB7XG4gICAgICAgICAgICB0aGlzLnNwYXduKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyDov5nph4znmoQgdGhpcyDmjIflkJEgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bigpO1xuICAgICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9Ki9cbiAgICBcbiAgICBzcGF3bigpOiBjYy5Ob2RlIHtcbiAgICAgICAgY2MubG9nKFwic3Bhd25TdGFpclwiKTtcbiAgICAgICAgdmFyIHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICB2YXIgbm9kZT0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICBub2RlLnBvc2l0aW9uID0gIGNjLnYzKDAsdGhpcy5yYW5kb21JbnRGcm9tSW50ZXJ2YWwodGhpcy5taW5ZLCB0aGlzLm1heFkrdGhpcy5vZmZzZXRZKSwwKTtcbiAgICAgICAvL25vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==