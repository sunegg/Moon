// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Jump from "./Jump";
import RandomSpawner from "./RandomSpawner";
import GameData from "./GameData";
import AutoPatrol from "./AutoPatrol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

  //static currentGoal: number = 16;

  static instance: GameManager;

  @property(cc.Node)
  gameOverView: cc.Node;

  @property(cc.RigidBody)
  currentStair: cc.RigidBody;

  @property(cc.RigidBody)
  nextStair: cc.RigidBody;

  @property(AutoPatrol)
  patrol: AutoPatrol = null;
  
  @property
  stairStartPos: number = 450;

 // isJump = false;

  //isDrop = true;

  isSpawn = true;

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
    GameData.score = 0;
     // GameData.platformScale = 1;
    //  GameData.patrolSpeed = 1;
    GameManager.instance = this;
      this.gameOver = false;
    this.node.on(
      "gameOver",
      function () {
       // setTimeout(() => {
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
         // 500
       // );
      //},
      this);
           
        this.node.on(
          "spawnStair",
          function () {
            if (!this.isSpawn && GameData.score>=1) {
              this.isSpawn = true;
              this.spawnStair();
             // this.isJump = false;
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
      "addMoon",
      function (score) {
       // cc.log("addScore");
       cc.audioEngine.play(this.scoreSfx,false,1);
       GameData.score+= score;
       this.scoreLabel.string =  GameData.score.toString();
      },
      this
    );
    this.node.on(
        "jump",
      function () {
      //  if (!this.isJump) {
        //  cc.log("player jump");
        cc.audioEngine.play(this.jumpSfx,false,2);
          this.currentStair.type = cc.RigidBodyType.Dynamic;
          this.currentStair.linearDamping = 0;
          this.currentStair.gravity = 2;
          this.currentStair = this.nextStair;
         // this.isJump = true;
         
      //  }
        },
        this
      );
  }

  addScore(score) {
    if (GameData.score >= 10) {
      this.patrol.enabled = true;
    }
    //if (this.isJump) {
      GameData.score += score;
      this.scoreLabel.string =  GameData.score.toString();
      Jump.instance.node.emit("addScore");
     this.isSpawn = false;
    /*  setTimeout(() => {
        if (!this.isSpawn) {
          this.isSpawn = true;
          this.spawnStair();
          this.isJump = false;
        }
       // this.spawnStair();
      }, 1500); */

   // }
  }

  spawnStair() {
    if (!this.gameOver) {
      var nextStair = RandomSpawner.instance.spawn().getComponent(cc.RigidBody);
      this.nextStair = nextStair;
    }
  }

  update(dt) {

    if (!this.gameOver) {
      cc.log("startdrop" + this.currentStair.node.position.y +"/"+this.stairStartPos);
      // cc.log(this.currentStair.node.position.y + "," + this.stairStartPos);
      if (this.currentStair.node.position.y > this.stairStartPos) {
        cc.log("drop" + dt);
       // this.isDrop = true;
        this.currentStair.gravityScale = 2000;
      } else {
       // this.isDrop = false;
        this.currentStair.gravityScale = 10;
      }
    }
  }
}
