//=============================================================================
// AltMenuScreen.js
//=============================================================================

/*:
 * @plugindesc Alternative and simplified menu.
 * @author Durid
 *
 * @help Simplify the main and item menu to fit puzzle games.
 */

/*:zh
 * @plugindesc 简化菜单
 * @author 小德
 *
 * @help 简化菜单和物品以适应解谜游戏。
 */


Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
};

Window_ItemCategory.prototype.makeCommandList = function() {
    this.addCommand(TextManager.item,    'item');
    this.addCommand(TextManager.keyItem, 'keyItem');
};


Window_Options.prototype.addGeneralOptions = function() {
    this.addCommand(TextManager.alwaysDash, 'alwaysDash');
};

