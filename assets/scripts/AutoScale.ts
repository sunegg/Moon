// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoScale extends cc.Component {
    @property
    speed: number=1;

    @property
    max: number = 1.1;
    
    @property
    min: number = 0.9;

    start () {
        this.rotate();
    }

    rotate() {
        cc.tween(this.node)
        .to(1*this.speed, { scale: this.max })
        .to(1*this.speed, { scale: this.min })
            .call(() => { this.rotate() }).start();
    }
}
