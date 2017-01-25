// A game by Eric Eakin
// 1-6-2017

//================= Helpers =================//
var px = function(input) {
    return input + 'px';
};

var pct = function(input) {
    return input + '%';
};

var rand = function(min, max, floor) {
    if (floor)
        return Math.floor(Math.random() * (max - min + 1) + min);
    else
        return Math.random() * (max - min + 1) + min;
};

var animate = function(ctx) {

};


//================= Init =================//
$(document).ready(function() {
    console.log('init')
    var ctx;
    var chars = loadCharacters();
    console.log(chars)
    // gameTitle();

    setTimeout(function() {
        $('div').css({opacity: 0});
        ctx = loadCanvas();
    }, 5000);
});

var gameTitle = function() {
    $('body').append('<div class="gameTitle">GAME TITLE</div>');
    setTimeout(function() {
        $('.gameTitle').css({fontSize: '50px', opacity: 1});
    }, 100);
    setTimeout(function() {
        $('body').append('<div class="gameBy">by Eric Eakin</div>');
        setTimeout(function() {
            $('.gameBy').css({fontSize: '30px', opacity: 1});
        }, 100);
    }, 1000);
};

var loadCanvas = function() {
    console.log('loadCanvas');
    $('body').append('<canvas class="canvas" id="gameCanvas">Canvas is not working.</canvas>');
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(20,20,150,100);

    var timeout = true;
    $(window).resize(function() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        if (timeout) {
            $('.canvas').css({width: width, height: height});
            timeout = false;
            setTimeout(function() {timeout = true;}, 100);
        }
    });

    return ctx;
};

var loadCharacters = function() {
    return {wizard: new Wizard(), golem: new Golem()};
};

var loadSound = function(characters) {
    console.log('loadSound')

    characters.golem.sfx.attack = new Audio();
    characters.golem.sfx.attack.src = "images/mathgame/golemattack.ogg";
   
    characters.golem.sfx.move = new Audio();
    characters.golem.sfx.move.src = "images/mathgame/rockgolem.mp3";

    characters.wizard.sfx.attack = new Audio();
    characters.wizard.sfx.attack.src = "images/mathgame/paralysis.mp3";

    return characters;
};

var loadGraphics = function(characters) {
    console.log('loadGraphics');

    characters.wizard.gfx.rest = new Image();
    characters.wizard.gfx.rest.src = "images/mathgame/wiz-rest-sm.png";
    // characters.wizard.gfx.rest.addEventListener("load", draw);

    characters.wizard.gfx.attack = new Image();
    characters.wizard.gfx.attack.src = "images/mathgame/wiz-attack-sm.png";
    // characters.wizard.gfx.attack.addEventListener("load", draw);

    characters.wizard.gfx.hurt = new Image();
    characters.wizard.gfx.hurt.src = "images/mathgame/wiz-hurt-sm.png";
    // characters.wizard.gfx.hurt.addEventListener("load", draw);

    characters.wizard.gfx.spell1 = new Image();
    characters.wizard.gfx.spell1.src = "images/mathgame/spell1-md.png";
    // characters.wizard.gfx.spell1.addEventListener("load", draw);

    characters.golem.gfx.walk = new Image();
    characters.golem.gfx.walk.src = "images/mathgame/brown-golem-walk-sm.png";
    // characters.golem.gfx.walk.addEventListener("load", draw);

    characters.golem.gfx.shadow = new Image();
    characters.golem.gfx.shadow.src = "images/mathgame/golemdropshadow.png";
    // characters.golem.gfx.shadow.addEventListener("load", draw);

    characters.golem.gfx.rest = new Image();
    characters.golem.gfx.rest.src = "images/mathgame/brown-golem-rest-sm.png";
    // characters.golem.gfx.rest.addEventListener("load", draw);

    characters.golem.gfx.attack = new Image();
    characters.golem.gfx.attack.src = "images/mathgame/brown-golem-attack-sm.png";
    // characters.golem.gfx.attack.addEventListener("load", draw);

    return characters;
};

var Wizard = function() {
    this.hp = 100;
    this.mana = 100;
    this.speed = 1;
    this.damage = 10;

    //Sounds
    this.sfx = {
        attack: new Audio(),
        jump: new Audio(),
        hurt: new Audio(),
    }
    this.sfx.attack.src = "images/mathgame/paralysis.mp3";

    //Graphics
    this.gfx = {
        attack: new Image(),
        hurt: new Image(),
        rest: new Image(),
        shadow: new Image(),
        spell1: new Image(),
        walk: new Image(),
    }
    this.gfx.rest.src = "images/mathgame/wiz-rest-sm.png";
    this.gfx.attack.src = "images/mathgame/wiz-attack-sm.png";
    this.gfx.hurt.src = "images/mathgame/wiz-hurt-sm.png";
    this.gfx.spell1.src = "images/mathgame/spell1-md.png";
    // this.gfx.walk.src = 

}

Wizard.prototype.attack = function() {

}

var Golem = function() {
    this.hp = 10;
    this.speed = 1;
    this.damage = 1;
}



























