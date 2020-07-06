"use strict";
cc._RF.push(module, '76474vrEvBPUK8wbJXhBdGE', 'Jump');
// scripts/Jump.ts

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
var Jump = /** @class */ (function (_super) {
    __extends(Jump, _super);
    function Jump() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 1;
        _this.isJump = false;
        _this.isAvailable = true;
        return _this;
    }
    Jump_1 = Jump;
    //maxPower: number;
    // LIFE-CYCLE CALLBACKS:
    Jump.prototype.onLoad = function () {
        Jump_1.instance = this;
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.animation = this.getComponent(cc.Animation);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
        cc.director.getPhysicsManager().enabled = true;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    Jump.prototype.start = function () {
        this.node.on("addScore", function (score) {
            var _this = this;
            this.isJump = false;
            //this.isAvailable = true;
            // GameManager.instance.node.emit("addScore", 1);
            setTimeout(function () {
                if (_this.touchNode != null) {
                    _this.isAvailable = true;
                    _this.touchNode.active = true;
                }
            }, 1000);
            this.collider.sensor = false;
        }, this);
        this.node.on("touchStart", function (event) {
            if (this.isAvailable) {
                this.startTime = Date.now().toFixed();
                this.tween = cc.tween(this.node).to(1, { scale: 1.5 }).start();
            }
        }, this);
        this.node.on("touchEnd", function (event) {
            if (this.isAvailable && !this.isJump) {
                var delta = parseInt(Date.now().toFixed()) - this.startTime;
                //console.log("Mouse up" + delta);
                this.jump(delta);
            }
        }, this);
    };
    Jump.prototype.jump = function (power) {
        if (this.isAvailable) {
            this.touchNode.active = false;
            this.isAvailable = false;
            this.isJump = true;
            this.collider.sensor = true;
            GameManager_1.default.instance.node.emit("jump");
            this.tween.stop();
            this.tween = cc.tween(this.node).to(1, { scale: 1 }).start();
            //console.log("jump" + power);
            this.animation.play();
            this.rigidBody.linearVelocity = cc.v2(0, power * this.speed);
        }
    };
    Jump.prototype.update = function (dt) {
        // if (this.node.position.y >= GameManager.currentGoal && this.isJump) {
        //  this.isJump = false;
        // GameManager.instance.node.emit("addScore", 1);
        //   this.collider.sensor = false;
        // }
    };
    var Jump_1;
    __decorate([
        property
    ], Jump.prototype, "speed", void 0);
    __decorate([
        property(cc.Node)
    ], Jump.prototype, "touchNode", void 0);
    Jump = Jump_1 = __decorate([
        ccclass
    ], Jump);
    return Jump;
}(cc.Component));
exports.default = Jump;

cc._RF.pop();