// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Jump extends cc.Component {


  static instance: Jump;

  startTime: number;

  @property
  speed: number = 1;

  rigidBody: cc.RigidBody;

  collider: cc.PhysicsBoxCollider;

  animation: cc.Animation;

  tween: cc.Tween;

  isJump = false;

  isAvailable = true;

  @property(cc.Node)
  touchNode: cc.Node;

  //maxPower: number;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    Jump.instance = this;
    this.rigidBody = this.getComponent(cc.RigidBody);
    this.animation = this.getComponent(cc.Animation);
    this.collider = this.getComponent(cc.PhysicsBoxCollider);
    cc.director.getPhysicsManager().enabled = true;
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
  }

  start() {
    this.node.on(
      "addScore",
      function (score) {
        this.isJump = false;
        //this.isAvailable = true;
        // GameManager.instance.node.emit("addScore", 1);
        setTimeout(() => {
          if (this.touchNode != null) {
            this.isAvailable = true;
            this.touchNode.active = true;
          }
        }, 1000);
         this.collider.sensor = false;
      },
      this
    );
    this.node.on(
      "touchStart",
      function (event) {
        if (this.isAvailable) {
          this.startTime = Date.now().toFixed();
          this.tween = cc.tween(this.node).to(1, { scale: 1.5 }).start();
        }
      },
      this
    );
    this.node.on(
     "touchEnd",
      function (event) {
        if (this.isAvailable && !this.isJump) {
          var delta = parseInt(Date.now().toFixed()) - this.startTime;
          //console.log("Mouse up" + delta);
          this.jump(delta);
        }
      },
      this
    );
  }

  jump(power: number) {
    if (this.isAvailable) {
      this.touchNode.active = false;
      this.isAvailable = false;
      this.isJump = true;
      this.collider.sensor = true;
      GameManager.instance.node.emit("jump");
      this.tween.stop();
      this.tween = cc.tween(this.node).to(1, { scale: 1 }).start();
      //console.log("jump" + power);
      this.animation.play();
      this.rigidBody.linearVelocity = cc.v2(0, power * this.speed);
    }
  }

  update(dt) {
   // if (this.node.position.y >= GameManager.currentGoal && this.isJump) {
    //  this.isJump = false;
     // GameManager.instance.node.emit("addScore", 1);
   //   this.collider.sensor = false;
   // }
  }
}
