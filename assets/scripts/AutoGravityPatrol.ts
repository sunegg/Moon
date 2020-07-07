// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoGravityPatrol extends cc.Component {


    rigidBody: cc.RigidBody;

    @property
    speed: number = 1;
    
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rigidBody = this.getComponent(cc.RigidBody);
    }

    start () {
        this.rigidBody.linearVelocity = cc.v2(this.speed,this.rigidBody.linearVelocity.y);
    }

    // update (dt) {}
}
