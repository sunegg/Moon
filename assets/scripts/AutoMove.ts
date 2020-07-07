// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class AutoMove extends cc.Component {
  // @property(cc.Node)
  // target: cc.Node;

  @property
  speed: number = 5;

  startPos: cc.Vec3;

  @property
  endPos: cc.Vec2 = new cc.Vec2(0, 0);
  
  start() {
    this.startPos = this.node.position;
    cc.log(this.startPos.toString());
    this.moveToTarget();
  }

  moveToTarget() {
   cc
      .tween(this.node)
      .to(this.speed, { position: cc.v2(this.endPos.x,this.node.position.y+this.endPos.y) })
      .start();
  }

}
