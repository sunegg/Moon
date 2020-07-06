// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Jump from "./Jump";
import RandomSpawner from "./RandomSpawner";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
  static currentGoal: number = 16;

  static instance: GameManager;

  @property(cc.Node)
  gameOverView: cc.Node;

  @property(cc.RigidBody)
  currentStair: cc.RigidBody;

  @property(cc.RigidBody)
  nextStair: cc.RigidBody;
    
  @property
  score: number = 0;

  @property
  stairStartPos: number = 450;

  isJump = false;

  @property(cc.Label)
  scoreLabel: cc.Label;

  gameOver: false;
  
  @property(cc.AudioClip)
  scoreSfx: cc.AudioClip;

  @property(cc.AudioClip)
  gameOverSfx: cc.AudioClip;

  @property(cc.AudioClip)
  jumpSfx: cc.AudioClip;
  // LIFE-CYCLE CALLBACKS:

    onLoad() {

        GameManager.instance = this;
      this.gameOver = false;
        this.node.on(
          "gameOver",
          function () {
            if (!this.gameOver) {
              this.gameOver = true;
              // console.log('game over');
              cc.audioEngine.play(this.gameOverSfx, false, 1);
              this.gameOverView.active = true;
              if (this.currentStair.node != null)
                this.currentStair.node.destroy();
              if (this.nextStair.node != null)
                this.nextStair.node.destroy();
            }
          },
          this
        );
      
    this.node.on(
      "addScore",
      function (score) {
       // cc.log("addScore");
       cc.audioEngine.play(this.scoreSfx,false,1);
          this.addScore(score);
          this.nextStair.type = cc.RigidBodyType.Dynamic;
      },
      this
    );
    this.node.on(
        "jump",
      function () {
        if (!this.isJump) {
        //  cc.log("player jump");
        cc.audioEngine.play(this.jumpSfx,false,2);
          this.currentStair.type = cc.RigidBodyType.Dynamic;
          this.currentStair.linearDamping = 0;
          this.currentStair.gravity = 2;
          this.currentStair = this.nextStair;
          this.isJump = true;
         
        }
        },
        this
      );
  }

  addScore(score) {
    if (this.isJump) {

      this.score += score;
      this.scoreLabel.string = this.score.toString();
      Jump.instance.node.emit("addScore");
     
      setTimeout(() => {
        this.spawnStair();
      }, 1500); 
      this.isJump = false;
    }
  }

  spawnStair() {
    if (!this.gameOver) {
      var nextStair = RandomSpawner.instance.spawn().getComponent(cc.RigidBody);
      this.nextStair = nextStair;
    }
  }

  update(dt) {

    if(!this.gameOver)
   // cc.log(this.currentStair.node.position.y + "," + this.stairStartPos);
    if (this.currentStair.node.position.y > this.stairStartPos) {
      this.currentStair.gravityScale = 2000;
    } else {
      this.currentStair.gravityScale = 10;
    }
  }
}
