
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AutoMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a941d7I9FNP9LamsiFFbU28', 'AutoMove');
// scripts/AutoMove.ts

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
var AutoMove = /** @class */ (function (_super) {
    __extends(AutoMove, _super);
    function AutoMove() {
        // @property(cc.Node)
        // target: cc.Node;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.endPos = new cc.Vec2(0, 0);
        return _this;
    }
    AutoMove.prototype.start = function () {
        this.startPos = this.node.position;
        cc.log(this.startPos.toString());
        this.moveToTarget();
    };
    AutoMove.prototype.moveToTarget = function () {
        cc
            .tween(this.node)
            .to(this.speed, { position: cc.v2(this.endPos.x, this.node.position.y + this.endPos.y) })
            .start();
    };
    __decorate([
        property
    ], AutoMove.prototype, "speed", void 0);
    __decorate([
        property
    ], AutoMove.prototype, "endPos", void 0);
    AutoMove = __decorate([
        ccclass
    ], AutoMove);
    return AutoMove;
}(cc.Component));
exports.default = AutoMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0F1dG9Nb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFFRSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBSHJCLHFFQTBCQztRQXBCQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBS2xCLFlBQU0sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQWV0QyxDQUFDO0lBYkMsd0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0MsRUFBRTthQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUNyRixLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFsQkQ7UUFEQyxRQUFROzJDQUNTO0lBS2xCO1FBREMsUUFBUTs0Q0FDMkI7SUFWakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlCNUI7SUFBRCxlQUFDO0NBekJELEFBeUJDLENBekJxQyxFQUFFLENBQUMsU0FBUyxHQXlCakQ7a0JBekJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvTW92ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAvLyB0YXJnZXQ6IGNjLk5vZGU7XG5cbiAgQHByb3BlcnR5XG4gIHNwZWVkOiBudW1iZXIgPSA1O1xuXG4gIHN0YXJ0UG9zOiBjYy5WZWMzO1xuXG4gIEBwcm9wZXJ0eVxuICBlbmRQb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcbiAgXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgY2MubG9nKHRoaXMuc3RhcnRQb3MudG9TdHJpbmcoKSk7XG4gICAgdGhpcy5tb3ZlVG9UYXJnZXQoKTtcbiAgfVxuXG4gIG1vdmVUb1RhcmdldCgpIHtcbiAgIGNjXG4gICAgICAudHdlZW4odGhpcy5ub2RlKVxuICAgICAgLnRvKHRoaXMuc3BlZWQsIHsgcG9zaXRpb246IGNjLnYyKHRoaXMuZW5kUG9zLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkrdGhpcy5lbmRQb3MueSkgfSlcbiAgICAgIC5zdGFydCgpO1xuICB9XG5cbn1cbiJdfQ==