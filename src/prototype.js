"use strict";
var Game = {
    start: function () {
        var gameLoadingDiv,
            gameDiv;
        
        gameLoadingDiv= document.getElementById('game-loading');
        gameLoadingDiv.innerHTML = '';

        gameLoadingDiv= document.getElementById('game');

        Crafty.init(1200, 600, gameDiv);

        Crafty.background('black url(assets/ferriswheel.png) no-repeat center center');

        Crafty.sprite("assets/ghost.png", {
            GameCart: [0, 0, 700, 730]
        }, 10, 10, 10);

        Crafty.e('2D,Color,DOM,Twoway,Sprite,GameCart,Collision')
            .attr({
                x: 10,
                y: 10,
                h: 200,
                w: 200
            })
            .gravity('Platform')
            .gravityConst(1)
            .twoway(5, 15)
            .sprite(0,0)
            .onHit('Platform', function (collisions) {
                var collision, i;

                for (i in collisions) {
                    collision = collisions[i];

                    console.log(collision);
                }

            }, function () {
            });
        
        Crafty.e('2D,DOM,Platform,Color')
            .attr({
                x: 600,
                y: 300,
                h: 10,
                w: 600
            })
            .color('green');

        Crafty.e('2D,DOM,Platform,Color')
            .attr({
                x: 0,
                y: 590,
                h: 10,
                w: 600
            })
            .color('green');
    }
};
