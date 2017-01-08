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

var animate = function() {

};


//================= Init =================//
$(document).ready(function() {
    console.log('init')
    var ctx;
    var chars = loadCharacters();
    chars = loadGraphics(chars);
    chars = loadSound(chars);
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
    $('body').append('<canvas class="canvas" id="gameCanvas"></canvas>');
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
    console.log('loadSound');
    characters.sounds = {
        golem: {},
        wizard: {}
    };

    characters.sounds.golem.attack = new Audio();
    characters.sounds.golem.attack.src = "images/mathgame/golemattack.ogg";

    characters.sounds.wizard.attack = new Audio();
    characters.sounds.wizard.attack.src = "images/mathgame/paralysis.mp3";

    characters.sounds.golem.move = new Audio();
    characters.sounds.golem.move.src = "images/mathgame/rockgolem.mp3";

    return characters;
};

var loadGraphics = function(characters) {
    console.log('loadGraphics');
    characters.graphics = {
        golem: {},
        wizard: {}
    };

    characters.graphics.wizard.rest = new Image();
    characters.graphics.wizard.rest.src = "images/mathgame/wiz-rest-sm.png";
    // characters.graphics.wizard.rest.addEventListener("load", draw);

    characters.graphics.wizard.attack = new Image();
    characters.graphics.wizard.attack.src = "images/mathgame/wiz-attack-sm.png";
    // characters.graphics.wizard.attack.addEventListener("load", draw);

    characters.graphics.wizard.hurt = new Image();
    characters.graphics.wizard.hurt.src = "images/mathgame/wiz-hurt-sm.png";
    // characters.graphics.wizard.hurt.addEventListener("load", draw);

    characters.graphics.wizard.spell1 = new Image();
    characters.graphics.wizard.spell1.src = "images/mathgame/spell1-md.png";
    // characters.graphics.wizard.spell1.addEventListener("load", draw);

    characters.graphics.golem.walk = new Image();
    characters.graphics.golem.walk.src = "images/mathgame/brown-golem-walk-sm.png";
    // characters.graphics.golem.walk.addEventListener("load", draw);

    characters.graphics.golem.shadow = new Image();
    characters.graphics.golem.shadow.src = "images/mathgame/golemdropshadow.png";
    // characters.graphics.golem.shadow.addEventListener("load", draw);

    characters.graphics.golem.rest = new Image();
    characters.graphics.golem.rest.src = "images/mathgame/brown-golem-rest-sm.png";
    // characters.graphics.golem.rest.addEventListener("load", draw);

    characters.graphics.golem.attack = new Image();
    characters.graphics.golem.attack.src = "images/mathgame/brown-golem-attack-sm.png";
    // characters.graphics.golem.attack.addEventListener("load", draw);

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








































