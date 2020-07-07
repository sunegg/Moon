// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Moon extends cc.Component {


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        this.node.active = false;
        GameManager.instance.node.emit("addMoon", 2);

        setTimeout(() => {
            if(this.node!=null)
            this.node.active = true;
        }, 2000);
    }

 
    // update (dt) {}
}
