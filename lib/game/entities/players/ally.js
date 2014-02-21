/**
 *  ally.js
 *  -----
 */

ig.module(
    'game.entities.players.ally'
)
.requires(
    'game.entities.abstractities.base_player'
)
.defines(function() {
    "use strict";

    ig.global.EntityAlly = ig.global.EntityBase_player.extend({
        name: 'ally',

        animSheet: new ig.AnimationSheet('media/tilesets/players/monk.png', 32, 32),

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 0.28, [0,1,2]);
            this.addAnim('down', 0.28, [5, 6, 7]);
            this.addAnim('up', 0.28, [15, 16, 17]);
            this.addAnim('right', 0.28, [10, 11, 12]);
        }
    })
});