
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
        return _this;
        // update (dt) {}
    }
    RandomSpawner_1 = RandomSpawner;
    RandomSpawner.prototype.onLoad = function () {
        RandomSpawner_1.instance = this;
        this.node.on("spawn", this.spawn, this);
    };
    RandomSpawner.prototype.start = function () {
        if (this.repeat) {
            this.spawn();
            this.schedule(function () {
                // 这里的 this 指向 component
                this.spawn();
            }, this.interval);
        }
    };
    RandomSpawner.prototype.spawn = function () {
        cc.log("spawnStair");
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.prefab);
        node.parent = this.parent;
        node.position = cc.v3(0, this.randomIntFromInterval(this.minY, this.maxY), 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1JhbmRvbVNwYXduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUR2RDtRQUFBLHFFQXNEQztRQTdDRyxZQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFNdkIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixVQUFJLEdBQVcsQ0FBQyxDQUFDOztRQWdDZixpQkFBaUI7SUFDckIsQ0FBQztzQkFyRG9CLGFBQWE7SUFzQjlCLDhCQUFNLEdBQU47UUFDSSxlQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixPQUFPLEVBQ1AsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1Ysd0JBQXdCO2dCQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUM5RSx5QkFBeUI7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUVELDZDQUFxQixHQUFyQixVQUFzQixHQUFHLEVBQUUsR0FBRztRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDOztJQTdDSDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNGO0lBR2xCO1FBREMsUUFBUTtpREFDZTtJQUd4QjtRQURDLFFBQVE7bURBQ1k7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDRjtJQUdsQjtRQURDLFFBQVE7K0NBQ1E7SUFHakI7UUFEQyxRQUFROytDQUNRO0lBcEJFLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FxRGpDO0lBQUQsb0JBQUM7Q0FyREQsQUFxREMsQ0FyRDBDLEVBQUUsQ0FBQyxTQUFTLEdBcUR0RDtrQkFyRG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBpbnN0YW5jZTogUmFuZG9tU3Bhd25lcjtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiOiBjYy5QcmVmYWI7XG5cbiAgICBAcHJvcGVydHlcbiAgICByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGludGVydmFsOiBudW1iZXIgPSA1O1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhcmVudDogY2MuTm9kZTtcblxuICBAcHJvcGVydHlcbiAgbWluWTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHlcbiAgbWF4WTogbnVtYmVyID0gMDtcbiAgICBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFJhbmRvbVNwYXduZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vZGUub24oXG4gICAgICAgICAgICBcInNwYXduXCIsXG4gICAgICAgICAgICB0aGlzLnNwYXduLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVwZWF0KSB7XG4gICAgICAgICAgICB0aGlzLnNwYXduKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyDov5nph4znmoQgdGhpcyDmjIflkJEgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bigpO1xuICAgICAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3Bhd24oKTogY2MuTm9kZSB7XG4gICAgICAgIGNjLmxvZyhcInNwYXduU3RhaXJcIik7XG4gICAgICAgIHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgdmFyIG5vZGU9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9ICBjYy52MygwLHRoaXMucmFuZG9tSW50RnJvbUludGVydmFsKHRoaXMubWluWSwgdGhpcy5tYXhZKSwwKTtcbiAgICAgICAvL25vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==