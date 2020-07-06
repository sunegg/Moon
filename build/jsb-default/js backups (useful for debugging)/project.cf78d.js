window.__require = function t(e, o, n) {
function r(i, a) {
if (!o[i]) {
if (!e[i]) {
var p = i.split("/");
p = p[p.length - 1];
if (!e[p]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(p, !0);
if (c) return c(p, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = p;
}
var u = o[i] = {
exports: {}
};
e[i][0].call(u.exports, function(t) {
return r(e[i][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
Appegg: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "56067bH9BFHoIO3XLLij2yi", "Appegg");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./GameData"), i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.configUrl = "https://api2.bmob.cn/1/classes/List/uYzgaaad";
e.apiKey = "cea1f887c9266afc24caef6c822b200d";
e.restApiKey = "690abdf51c311db72949a4d6410f2b66";
return e;
}
e.prototype.start = function() {
this.connect();
};
e.prototype.connect = function() {
this.httpGetAsync(this.configUrl, function(t) {
console.log(t);
var e = JSON.parse(t);
c.default.url = e.url;
c.default.privacyUrl = e.privacyUrl;
console.log("当前appType为" + e.appType);
switch (e.appType) {
case 1:
cc.director.loadScene("main");
break;

case 2:
cc.director.loadScene("web");
}
}, function() {});
};
e.prototype.httpGetAsync = function(t, e, o) {
void 0 === o && (o = null);
var n = new XMLHttpRequest();
n.onerror;
n.ontimeout;
n.onreadystatechange = function() {
4 == n.readyState && 200 == n.status ? e(n.responseText) : o();
};
n.open("GET", t, !1);
n.setRequestHeader("X-Bmob-Application-Id", this.apiKey);
n.setRequestHeader("X-Bmob-REST-API-Key", this.restApiKey);
n.send(null);
};
return e = r([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"./GameData": "GameData"
} ],
AudioManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1f222jv03VMmZ1o18MEtTSL", "AudioManager");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, a = (c.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.audioSource = this.getComponent(cc.AudioSource);
cc.game.addPersistRootNode(this.node);
};
e.prototype.start = function() {
cc.audioEngine.playMusic(this.audioSource.clip, !0);
};
e.prototype.play = function() {
this.audioSource.play();
};
e.prototype.pause = function() {
this.audioSource.pause();
};
return e = r([ i ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Deadline: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2f058gmeKtKVIkmd+mdctye", "Deadline");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./GameManager"), i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t, e) {
c.default.instance.node.emit("gameOver");
};
return e = r([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"./GameManager": "GameManager"
} ],
GameData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a6da6IKwsVJOZ7mEH2hMbdB", "GameData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.score = 0;
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
GameManager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "86cce7eQS5M4o75S+u0/tFy", "GameManager");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./Jump"), i = t("./RandomSpawner"), a = cc._decorator, p = a.ccclass, s = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.score = 0;
e.stairStartPos = 450;
e.isJump = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.gameOver = !1;
this.node.on("gameOver", function() {
if (!this.gameOver) {
this.gameOver = !0;
cc.audioEngine.play(this.gameOverSfx, !1, 1);
this.gameOverView.active = !0;
null != this.currentStair.node && this.currentStair.node.destroy();
null != this.nextStair.node && this.nextStair.node.destroy();
}
}, this);
this.node.on("addScore", function(t) {
cc.audioEngine.play(this.scoreSfx, !1, 1);
this.addScore(t);
this.nextStair.type = cc.RigidBodyType.Dynamic;
}, this);
this.node.on("jump", function() {
if (!this.isJump) {
cc.audioEngine.play(this.jumpSfx, !1, 2);
this.currentStair.type = cc.RigidBodyType.Dynamic;
this.currentStair.linearDamping = 0;
this.currentStair.gravity = 2;
this.currentStair = this.nextStair;
this.isJump = !0;
}
}, this);
};
e.prototype.addScore = function(t) {
var e = this;
if (this.isJump) {
this.score += t;
this.scoreLabel.string = this.score.toString();
c.default.instance.node.emit("addScore");
setTimeout(function() {
e.spawnStair();
}, 1500);
this.isJump = !1;
}
};
e.prototype.spawnStair = function() {
if (!this.gameOver) {
var t = i.default.instance.spawn().getComponent(cc.RigidBody);
this.nextStair = t;
}
};
e.prototype.update = function(t) {
this.gameOver || (this.currentStair.node.position.y > this.stairStartPos ? this.currentStair.gravityScale = 2e3 : this.currentStair.gravityScale = 10);
};
var o;
e.currentGoal = 16;
r([ s(cc.Node) ], e.prototype, "gameOverView", void 0);
r([ s(cc.RigidBody) ], e.prototype, "currentStair", void 0);
r([ s(cc.RigidBody) ], e.prototype, "nextStair", void 0);
r([ s ], e.prototype, "score", void 0);
r([ s ], e.prototype, "stairStartPos", void 0);
r([ s(cc.Label) ], e.prototype, "scoreLabel", void 0);
r([ s(cc.AudioClip) ], e.prototype, "scoreSfx", void 0);
r([ s(cc.AudioClip) ], e.prototype, "gameOverSfx", void 0);
r([ s(cc.AudioClip) ], e.prototype, "jumpSfx", void 0);
return e = o = r([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./Jump": "Jump",
"./RandomSpawner": "RandomSpawner"
} ],
Jump: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "76474vrEvBPUK8wbJXhBdGE", "Jump");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./GameManager"), i = cc._decorator, a = i.ccclass, p = i.property, s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.speed = 1;
e.isJump = !1;
e.isAvailable = !0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.rigidBody = this.getComponent(cc.RigidBody);
this.animation = this.getComponent(cc.Animation);
this.collider = this.getComponent(cc.PhysicsBoxCollider);
cc.director.getPhysicsManager().enabled = !0;
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {
this.node.on("addScore", function(t) {
var e = this;
this.isJump = !1;
setTimeout(function() {
if (null != e.touchNode) {
e.isAvailable = !0;
e.touchNode.active = !0;
}
}, 1e3);
this.collider.sensor = !1;
}, this);
this.node.on("touchStart", function(t) {
if (this.isAvailable) {
this.startTime = Date.now().toFixed();
this.tween = cc.tween(this.node).to(1, {
scale: 1.5
}).start();
}
}, this);
this.node.on("touchEnd", function(t) {
if (this.isAvailable && !this.isJump) {
var e = parseInt(Date.now().toFixed()) - this.startTime;
this.jump(e);
}
}, this);
};
e.prototype.jump = function(t) {
if (this.isAvailable) {
this.touchNode.active = !1;
this.isAvailable = !1;
this.isJump = !0;
this.collider.sensor = !0;
c.default.instance.node.emit("jump");
this.tween.stop();
this.tween = cc.tween(this.node).to(1, {
scale: 1
}).start();
this.animation.play();
this.rigidBody.linearVelocity = cc.v2(0, t * this.speed);
}
};
e.prototype.update = function(t) {};
var o;
r([ p ], e.prototype, "speed", void 0);
r([ p(cc.Node) ], e.prototype, "touchNode", void 0);
return e = o = r([ a ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./GameManager": "GameManager"
} ],
PrivacySetup: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "84df0WtzxpNCYA8w364uodV", "PrivacySetup");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./GameData"), i = cc._decorator, a = i.ccclass, p = i.property, s = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
cc.log("privacyUrl" + this.encode_utf8(c.default.privacyUrl));
this.webView.url = this.encode_utf8(c.default.privacyUrl);
};
e.prototype.encode_utf8 = function(t) {
return unescape(encodeURIComponent(t));
};
r([ p(cc.WebView) ], e.prototype, "webView", void 0);
return e = r([ a ], e);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./GameData": "GameData"
} ],
RandomSpawner: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "18c8f4yXeREFqz+lDkzkDLA", "RandomSpawner");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.repeat = !1;
e.interval = 5;
e.minY = 0;
e.maxY = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.node.on("spawn", this.spawn, this);
};
e.prototype.start = function() {
if (this.repeat) {
this.spawn();
this.schedule(function() {
this.spawn();
}, this.interval);
}
};
e.prototype.spawn = function() {
cc.log("spawnStair");
cc.director.getScene();
var t = cc.instantiate(this.prefab);
t.parent = this.parent;
t.position = cc.v3(0, this.randomIntFromInterval(this.minY, this.maxY), 0);
return t;
};
e.prototype.randomIntFromInterval = function(t, e) {
return Math.floor(Math.random() * (e - t + 1) + t);
};
var o;
r([ a(cc.Prefab) ], e.prototype, "prefab", void 0);
r([ a ], e.prototype, "repeat", void 0);
r([ a ], e.prototype, "interval", void 0);
r([ a(cc.Node) ], e.prototype, "parent", void 0);
r([ a ], e.prototype, "minY", void 0);
r([ a ], e.prototype, "maxY", void 0);
return e = o = r([ i ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
RandomSprite: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "54f1fjd9ndMGoGrN6SyCrrd", "RandomSprite");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteFrames = [];
return e;
}
e.prototype.start = function() {
this.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this.randomIntFromInterval(0, this.spriteFrames.length - 1)];
};
e.prototype.randomIntFromInterval = function(t, e) {
return Math.floor(Math.random() * (e - t + 1) + t);
};
r([ a([ cc.SpriteFrame ]) ], e.prototype, "spriteFrames", void 0);
return e = r([ i ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Sensor: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f22b1a6JrZFDqJwMan5b8QK", "Sensor");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./GameManager"), i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {};
e.prototype.onCollisionEnter = function(t, e) {
console.log("on collision enter");
c.default.instance.node.emit("addScore", 1);
this.node.destroy();
};
return e = r([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"./GameManager": "GameManager"
} ],
Touch: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2bcfdBdoh1FK66QmYQwUwGj", "Touch");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./Jump"), i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
c.default.instance.node.emit("touchStart");
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
c.default.instance.node.emit("touchEnd");
}, this);
};
return e = r([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"./Jump": "Jump"
} ],
UIAudioButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1c9c1gjx25MeaNvmVpCQvrc", "UIAudioButton");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.audio = null;
return e;
}
e.prototype.playAudio = function() {
cc.audioEngine.play(this.audio, !1, 1);
};
e.prototype.onLoad = function() {
this.btn = this.node.getComponent(cc.Button);
};
e.prototype.start = function() {
var t = new cc.Component.EventHandler();
t.target = this.node;
t.component = "UIAudioButton";
t.handler = "playAudio";
t.customEventData = null;
this.btn.clickEvents.push(t);
};
r([ a(cc.AudioClip) ], e.prototype, "audio", void 0);
return e = r([ i ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
UICloneText: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a08c7Ckq11LHq3QIsmnsixV", "UICloneText");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.target = null;
return e;
}
e.prototype.start = function() {
this.getComponent(cc.Label).string = this.target.string;
};
r([ a(cc.Label) ], e.prototype, "target", void 0);
return e = r([ i ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
UILoadScene: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "78ca7lIMsRPhqEmuJuEblST", "UILoadScene");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scene = "main";
return e;
}
e.prototype.loadScene = function() {
cc.director.loadScene(this.scene);
};
e.prototype.onLoad = function() {
this.btn = this.node.getComponent(cc.Button);
};
e.prototype.start = function() {
var t = new cc.Component.EventHandler();
t.target = this.node;
t.component = "UILoadScene";
t.handler = "loadScene";
t.customEventData = null;
this.btn.clickEvents.push(t);
};
r([ a ], e.prototype, "scene", void 0);
return e = r([ i ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
UIShowNode: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8db82XASG1AqKt3pKXxmXsu", "UIShowNode");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, i = c.ccclass, a = c.property, p = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.show = function() {
null != this.hideScene && (this.hideScene.active = !1);
this.showScene.active = !0;
};
e.prototype.onLoad = function() {
this.btn = this.node.getComponent(cc.Button);
};
e.prototype.start = function() {
var t = new cc.Component.EventHandler();
t.target = this.node;
t.component = "UIShowNode";
t.handler = "show";
t.customEventData = null;
this.btn.clickEvents.push(t);
};
r([ a(cc.Node) ], e.prototype, "hideScene", void 0);
r([ a(cc.Node) ], e.prototype, "showScene", void 0);
return e = r([ i ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
WebViewObject: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7d16forR2xGObPIeC7EU3ln", "WebViewObject");
var n = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./GameData"), i = cc._decorator, a = i.ccclass, p = (i.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.start = function() {
this.node.setContentSize(cc.winSize);
var t = this.getComponent(cc.WebView), e = jsb.reflection.callStaticMethod("DeviceUtils", "getIDFAString"), o = jsb.reflection.callStaticMethod("DeviceUtils", "getIDFVString");
t.url = this.encode_utf8(this.FormatString(c.default.url, e, o));
};
e.prototype.FormatString = function(t) {
for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
for (var n = 0; n < e.length; n++) t = t.replace("{" + n + "}", e[n]);
return t;
};
e.prototype.encode_utf8 = function(t) {
return unescape(encodeURIComponent(t));
};
return e = r([ a ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"./GameData": "GameData"
} ]
}, {}, [ "Appegg", "AudioManager", "Deadline", "GameData", "GameManager", "Jump", "PrivacySetup", "RandomSpawner", "RandomSprite", "Sensor", "Touch", "UIAudioButton", "UICloneText", "UILoadScene", "UIShowNode", "WebViewObject" ]);