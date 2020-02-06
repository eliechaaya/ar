var i= Math.floor(Math.random() * 3);

(function () {
    var games = [
	
	  { img: 'img/bg-animals.png', color: '#ccecfb',  word: '',        sound: 'sounds/sounds/english/',caption:'dog 🔊',caption_Ar:'Animals 🦁' ,voice:'sounds/sounds/cries/' },

	
       { img: 'img/dog'+i+'.gif', color: '#ccecfb',  word: 'dog',        sound: 'sounds/sounds/english/dog',caption:'dog 🔊',caption_Ar:'Dog 🔊' ,voice:'sounds/sounds/cries/dog' },

		{ img: 'img/bee.gif', color: '#ccecfb',  word: 'bee',         sound: 'sounds/sounds/english/bee',caption:'Bee 🔊',caption_Ar:'Bee 🔊' ,voice:'sounds/sounds/cries/Bee' },
		

		 
		{ img: 'img/mouse'+i+'.png', color: '#ccecfb',    word: '',   sound: 'sounds/sounds/english/mouse' ,caption:'Mouse 🐘',caption_Ar:'Mouse 🔊',voice:'sounds/sounds/cries/mouse', voice_en:'sounds/sounds/cries/parrot'},


		
		{ img: 'img/parrot'+i+'.png', color: '#ccecfb',  word: 'parrot',   sound: 'sounds/sounds/english/parrot' ,caption:'parrot 🔊',caption_Ar:'Parrot 🔊',voice:'sounds/sounds/cries/parrot'},
		
		{ img: 'img/cat'+i+'.png', color: '#ccecfb',  word: 'cat',   sound: 'sounds/sounds/english/cat' ,caption:'cat 🔊',caption_Ar:'Cat 🔊',voice:'sounds/sounds/cries/cat'  },
		
		
		
		
		{ img: 'img/turtle'+i+'.png', color: '#ccecfb',  word: '',   sound: 'sounds/sounds/english/turtle',caption:'turtle',caption_Ar:'Turtle 🔊',voice:'sounds/sounds/cries/turtle'   },
		
		
		
			
        { img: 'img/fish'+i+'.gif', color: '#ccecfb',  word: 'fish',  sound: 'sounds/sounds/english/fish',caption:'fish',caption_Ar:'Fish 🔊',voice:'sounds/sounds/cries/fish'  },
		
     		      
        
		
       
		
		{ img: 'img/horse'+i+'.gif', color: '#ccecfb',  word: 'horse',   sound: 'sounds/sounds/english/horse',caption:'horse 🔊',caption_Ar:'Horse 🔊',voice:'sounds/sounds/cries/horse'  },
		
        { img: 'img/donkey'+i+'.png', color: '#ccecfb',  word: 'donkey',  sound: 'sounds/sounds/english/donkey',caption:'donkey 🔊',caption_Ar:'Donkey 🔊' ,voice:'sounds/sounds/cries/donkey' },
		
		{ img: 'img/goat'+i+'.png', color: '#ccecfb',  word: 'goat',      sound: 'sounds/sounds/english/goat',caption:'goat 🔊',caption_Ar:'Goat 🔊' ,voice:'sounds/sounds/cries/goat' },
		
		{ img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e7d81771805451.5ca68e4ac7166.gif', color: '#ccecfb',  word: 'sheep 🔊',    sound: 'sounds/sounds/english/sheep',caption:'sheep 🔊',caption_Ar:'Sheep 🔊' ,voice:'sounds/sounds/cries/sheep' },
		
		{ img: 'img/chicken'+i+'.png', color: '#ccecfb',  word: 'chicken', sound: 'sounds/sounds/english/chicken',caption:'chicken  🔊',caption_Ar:'Chicken 🔊' ,voice:'sounds/sounds/cries/chicken' },
		
      
		
        { img: 'img/cow'+i+'.png', color: '#ccecfb',  word: 'cow',         sound: 'sounds/sounds/english/cow',caption:'cow 🔊',caption_Ar:'Cow 🔊',voice:'sounds/sounds/cries/cow' },
		
     
		
		 { img: 'img/snake'+i+'.png', color: '#ccecfb',  word: 'snake',   sound: 'sounds/sounds/english/snake',caption:'Snake 🔊',caption_Ar:'Snake 🔊',voice:'sounds/sounds/cries/snake' },
		 
		 { img: 'img/fox'+i+'.png', color: '#ccecfb',  word: 'fox',        sound: 'sounds/sounds/english/fox' ,caption:'Fox 🔊',caption_Ar:'Fox 🔊',voice:'sounds/sounds/cries/fox'  },
		
		{ img: 'img/frog'+i+'.png', color: '#ccecfb',  word: 'frog',       sound: 'sounds/sounds/english/frog' ,caption:'frog 🔊',caption_Ar:'Frog 🔊',voice:'sounds/sounds/cries/frog'  },
		
		{ img: 'img/rabbit.png', color: '#ccecfb',  word: 'rabbit',   sound: 'sounds/sounds/english/rabbit' ,caption:'rabbit 🔊',
		caption_Ar:'Rabbit 🔊',voice:'sounds/sounds/cries/rabbit'  },
		
		{ img: 'img/Beaver.png', color: '#ccecfb',  word: 'beaver',   sound: 'sounds/sounds/english/beaver' ,caption:'Beaver 🔊',
		caption_Ar:'Beaver 🔊',voice:'sounds/sounds/cries/beaver'  },
		
		{ img: 'img/panda.png', color: '#ccecfb',  word: 'panda', sound: 'sounds/sounds/english/panda' ,caption:'Panda 🔊',caption_Ar:'Panda 🔊',voice:'sounds/sounds/cries/panda'  },
		
		{ img: 'img/mole.png', color: '#ccecfb',  word: 'mole',        sound: 'sounds/sounds/english/mole' ,caption:'Mole 🔊',caption_Ar:'Mole 🔊',voice:'sounds/sounds/cries/mole'  },
		
		{ img: 'img/crocodile.png', color: '#ccecfb',  word: 'Crocodile',   sound: 'sounds/sounds/english/crocodile',caption:'Crocodile 🔊',caption_Ar:'Crocodile 🔊',voice:'sounds/sounds/cries/Crocodile' },
		 
		{ img: 'img/Giraffe.png', color: '#ccecfb',  word: 'giraffe',     sound: 'sounds/sounds/english/giraffe',caption:'Giraffe 🔊',caption_Ar:'Giraffe 🔊',voice:'sounds/sounds/cries/giraffe'  },
		 
		{ img: 'img/elephant.gif', color: '#ccecfb',  word: 'elephant', sound: 'sounds/sounds/english/elephant',caption:'Elephant 🔊',caption_Ar:'Elephant 🔊',voice:'sounds/sounds/cries/elephant'  },
		 
		{ img: 'img/bear.gif', color: '#ccecfb',  word: 'bear',   sound: 'sounds/sounds/english/bear' ,caption:'Bear 🔊',caption_Ar:'Bear 🔊',voice:'sounds/sounds/cries/bear'  },
		 
		{ img: 'img/lion.png', color: '#ccecfb',  word: 'Lion', sound: 'sounds/sounds/english/lion',caption:'Lion 🔊',caption_Ar:'Lion 🔊',voice:'sounds/sounds/cries/lion'},
		  
		{ img: 'img/monkey.gif', color: '#ccecfb',  word: 'monkey',   sound: 'sounds/sounds/english/monkey' ,caption:'Monkey 🔊',caption_Ar:'Monkey 🔊',voice:'sounds/sounds/cries/monkey'  },
		 
		 
		{ img: 'img/wolf.png', color: '#ccecfb',  word: 'wolf',   sound: 'sounds/sounds/english/wolf',caption:'Wolf 🔊',caption_Ar:'Wolf 🔊',voice:'sounds/sounds/cries/wolf' },
		
		
		{ img: 'img/duck.gif', color: '#ccecfb',  word: 'Duck',   sound: 'sounds/sounds/english/duck',caption:'Duck 🔊',caption_Ar:'Duck 🔊',voice:'sounds/sounds/cries/duck' },
		 
		 { img: 'img/owl.png', color: '#ccecfb',  word: 'owl',   sound: 'sounds/sounds/english/owl' ,caption:'Owl 🔊',caption_Ar:'Owl 🔊',voice:'sounds/sounds/cries/owl'},
		 
		 
		{ img: 'img/pigeon.gif', color: '#ccecfb',  word: 'pigon',    sound: 'sounds/sounds/english/pigeon',caption:'Pigeon 🔊',caption_Ar:'Pigeon 🔊' ,voice:'sounds/sounds/cries/pigeon' },
		 
		 
		{ img: 'img/crow.png', color: '#ccecfb',  word: 'crow',   sound: 'sounds/sounds/english/crow' ,caption:'crow 🔊',caption_Ar:'Crow 🔊',voice:'sounds/sounds/cries/crow'},
		 
		 
		{ img: 'img/seagull.png', color: '#ccecfb',  word: 'seagull',   sound: 'sounds/sounds/english/seagull' ,caption:'Seagull 🔊',caption_Ar:'Seagull 🔊',voice:'sounds/sounds/cries/seagull'},
		
				
		{ img: 'img/eagle.png', color: '#ccecfb',  word: 'eagle',   sound: 'sounds/sounds/english/eagle' ,caption:'eagle 🔊',caption_Ar:'Eagle 🔊',voice:'sounds/sounds/cries/eagle'},
		
		
		{ img: 'img/ostrich.gif', color: '#ccecfb',  word: 'ostrich',   sound: 'sounds/sounds/english/ostrich' ,caption:'Ostrich 🔊',caption_Ar:'Ostrich 🔊',voice:'sounds/sounds/cries/ostrich'},
		
		
		{ img: 'img/butterfly.gif', color: '#ccecfb',  word: 'butterfly', sound: 'sounds/sounds/english/butterfly' ,caption:'butterfly',caption_Ar:'Butterfly 🔊',voice:'sounds/sounds/cries/butterfly'},
		
		
		{ img: 'img/ant.png', color: '#ccecfb',  word: 'ant',   sound: 'sounds/sounds/english/ant' ,caption:'ant',caption_Ar:'Ant 🔊',voice:'sounds/sounds/cries/ant'  },
		
		{ img: 'img/spider.gif', color: '#ccecfb',  word: 'spider',   sound: 'sounds/sounds/english/spider' ,caption:'spider',caption_Ar:'Spider 🔊',voice:'sounds/sounds/cries/spider'  },
		
		{ img: 'img/ladybug.gif', color: '#ccecfb',  word: 'ladybird',   sound: 'sounds/sounds/english/ladybug' ,caption:'ladybug',caption_Ar:'Ladybug',voice:'sounds/sounds/cries/ladybird'  },
		
		
		{ img: 'img/snail.png', color: '#ccecfb',  word: 'snail',   sound: 'sounds/sounds/english/snail' ,caption:'snail',caption_Ar:'Snail 🔊',voice:'sounds/sounds/cries/snail'  },
		
		{ img: 'img/worm.gif', color: '#ccecfb',  word: 'worm',   sound: 'sounds/sounds/english/worm' ,caption:'worm',caption_Ar:'Worm',voice:'sounds/sounds/cries/worm'  },
		
		
		{ img: 'img/dolphin.png', color: '#ccecfb',  word: 'dolphin',   sound: 'sounds/sounds/english/dolphin' ,caption:'dolphin 🔊',caption_Ar:'Dolphin 🔊',voice:'sounds/sounds/cries/dolphin'  },
		
		
		{ img: 'img/shrimp.png', color: '#ccecfb',  word: 'Shrimp',   sound: 'sounds/sounds/english/shrimp' ,caption:'Shrimp',caption_Ar:'Shrimp',voice:'sounds/sounds/cries/shrimp'  },
		
		
		{ img: 'img/octopus.gif', color: '#ccecfb',  word: 'octopus',   sound: 'sounds/sounds/english/octopus' ,caption:'Octopus',caption_Ar:'Octopus',voice:'sounds/sounds/cries/octopus'  },
		
		{ img: 'img/crab.png', color: '#ccecfb',  word: 'crab',   sound: 'sounds/sounds/english/crab' ,caption:'Crab',caption_Ar:'Crab 🔊',voice:'sounds/sounds/cries/crab'  },
		
		{ img: 'img/seal.png', color: '#ccecfb',  word: 'seal',   sound: 'sounds/sounds/english/seal' ,caption:'seal 🔊',caption_Ar:'Seal 🔊',voice:'sounds/sounds/cries/seal'  },
		
		{ img: 'img/whale.gif', color: '#ccecfb',  word: 'whale',   sound: 'sounds/sounds/english/whale' ,caption:'whale 🔊',caption_Ar:'Whale 🔊',voice:'sounds/sounds/cries/whale'  },
		
		{ img: 'img/oyster.png', color: '#ccecfb',  word: 'oyster',   sound: 'sounds/sounds/english/oyster' ,caption:'oyster',caption_Ar:'Oyster',voice:'sounds/sounds/cries/oyster'  }
		
        
        
    ];
    //var playicon = ' 🔊';

    var $html     = $('html'),
        $link     = $('.header a'),
        $warning  = $('.warning'),
        $ad       = $('.ad'),
        $adClose  = $('.ad a'),
        $figure   = $('.figure'),
        $letters  = $('.letters'),
        $models   = $('.models'),
        $letters1  = $('.letters1'),
        $models1   = $('.models1'),
        $models_caption   = $('.models_caption'),
        $prev     = $('.prev'),
        $next     = $('.next'),
        $levl     = $('.levl');

    var index     = 0,
        score     = 0,
        alphabet  = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        click     = 'ontouchstart' in $html ? 'touchstart' : 'mousedown';

    // Buzz & sounds

    if (!buzz.isSupported()) {
        $warning.style.visibility = 'visible';
    }

    buzz.defaults.formats = [ 'ogg', 'mp3' ];
    buzz.defaults.preload = 'metadata';

    var sounds = {
        win:  new buzz.sound('sounds/win-new'),
        fail: new buzz.sound('sounds/fail'),
        //dice: new buzz.sound('sounds/dice'),
        blup: new buzz.sound('sounds/blup')
    };

    for (var g in games) {
        var game = games[g];
        sounds[game.sound] = new buzz.sound(game.sound);

        var img = new Image();
        img.src = game.img;
    }
    for (var g in games) {
        var game = games[g];
        sounds[game.caption] = new buzz.sound(game.voice);

        var img = new Image();
        img.src = game.img;
    }

    for (var s in alphabet) {
        sounds[alphabet[s]] = new buzz.sound('sounds/kid/' + alphabet[s]);
    }

    // Go to previous Game

    $prev.addEventListener('click', function (e) {
        e.preventDefault();

        prevGame();
    });

    function prevGame () {
        if (--index <= 0) {
            index = games.length - 1;
        }

        setGame(index);
    }

    // Go to next game

    $next.addEventListener('click', function (e) {
        e.preventDefault();

        nextGame();
    });

    function nextGame () {
        if (++index >= games.length) {
            index = 0;
        }

        setGame(index);
    }

    // Change level

    $levl.addEventListener('click', function (e) {
        e.preventDefault();

        if ($levl.textContent == 'harder') {
            $levl.textContent = 'easier';
            $models.classList.add('hard');
            $models1.classList.add('hard');
        } else {
            $levl.textContent = 'harder';
            $models.classList.remove('hard');
            $models1.classList.remove('hard');
        }
    });

    // Play sound illustration is clicked

    $figure.addEventListener('click', function (e) {
        sounds[games[index].sound].play();
        setAnimation($figure, 'bouncing');
    });

    // Hide ad

    $adClose.addEventListener('click', function (e) {
        e.preventDefault();
        $ad.style.display = 'none';
    });

    // Set a new Game

    function setGame(index) {
        var $li,
            game            = games[index],
            gameSound       = sounds[game.sound],
            wordLetters     = game.word.split(''),
            caption         = game.caption,
            caption_Ar_new  = game.caption_Ar,
            caption_Ar      = game.caption_Ar.split(''),
            color           = game.color,
            shuffledLetters = shuffleLetters(caption_Ar);

        $html.classList.add('transitionable');
        $html.classList.remove('won');

        // Reset score

        score = 0;

        // Change background

        $html.style.background = game.color;
        $link.style.color = game.color;

        // Change Figure

        $figure.src = game.img;

        setAnimation($figure, 'bouncing');

        // Build Models

        $models.innerHTML = '';
        $models1.innerHTML = '';
        $models_caption.innerHTML = '';

        // for (var a in wordLetters) {
        //     $li = document.createElement('li');
        //     $li.className = 'model';
        //     $li.dataset.letter = wordLetters[a];
        //     $models1.appendChild($li);
        // }
        $li = document.createElement('li');
        $li.className = 'model1';
        if(caption_Ar_new != ''){
            var text = document.createTextNode(caption_Ar_new);
        }else{
            var text = document.createTextNode(caption_Ar_new);
        }

        $li.appendChild(text);
        // $li.addEventListener("click", play, false);
        $li.addEventListener('click', function (e) {
            play();
            setAnimation($models1, 'bouncing');
        });
        $models1.appendChild($li);
        setAnimation($models1, 'bouncing');
        $li = document.createElement('li');
        $li.className = 'model2';
        var text1 = document.createTextNode(caption);

        $li.appendChild(text1);
        $li.addEventListener('click', function (e) {
            play();
            setAnimation($models_caption, 'bouncing');
        });

        $models_caption.appendChild($li);
        setAnimation($models_caption, 'bouncing');
        for (var a in caption_Ar) {
            $li = document.createElement('li');
            $li.className = 'model';
            $li.dataset.letter = caption_Ar[a];

            $models.appendChild($li);
        }

        interact('.model').dropzone({
            overlap: 0.10,
            ondragenter: function (event) {
                event.target.classList.add('hovered');
            },
            ondragleave: function (event) {
                event.target.classList.remove('hovered');
            },
            ondrop: function (event) {
                var $droppable = event.target,
                    $draggable = event.relatedTarget;

                $droppable.classList.remove('hovered');

                if (!$droppable.classList.contains('done') && $draggable.dataset.letter == $droppable.dataset.letter) {
                    sounds.blup.play();

                    $draggable.style.visibility = 'hidden';

                    $droppable.classList.add('done');
                    $droppable.classList.add('bouncing');

                    if (++score == caption_Ar.length) {
                        winGame();
                    }
                } else {
                    sounds.fail.play();

                    moveElement(event.dragEvent, $draggable);

                    setAnimation($draggable, 'bouncing', true);
                }
            }
        });

        setAnimation($models, 'shown');
        setAnimation($models1, 'shown');

        // Build Letters

        $letters.innerHTML = '';
        $letters1.innerHTML = '';

        for (var b in shuffledLetters) {
            $li = document.createElement('li');
            $li.className = 'letter';
            $li.dataset.letter = shuffledLetters[b];

            // $letters1.appendChild($li);
        }
        for (var b in shuffledLetters) {
            $li = document.createElement('li');
            $li.className = 'letter';
            $li.dataset.letter = shuffledLetters[b];

            $letters.appendChild($li);
        }

        interact('.letter').draggable({
            onmove: moveElement,
            onstart: function (event) {
                var letter = event.target.dataset.letter;

                if (sounds[letter]) {
                    sounds[letter].play();
                }

                event.target.style.zIndex = parseInt(new Date().getTime() / 1000);
            }
        });

        setAnimation($letters, 'thrown');
        // setAnimation($letters1, 'thrown');

        // Play sounds

        gameSound.play();

        setTimeout(function () {
            sounds.dice.play();
        }, 1000);

        // Disable transition

        setTimeout(function () {
            $html.classList.remove('transitionable');
        }, 1500);
    }

    // When a Game is won

    function winGame () {
        $html.classList.add('won');
        $html.classList.add('transitionable');

        $('.model', true).forEach(function ($model) {
            $model.classList.remove('bouncing');

            setAnimation($model, 'flipping');
        });

        sounds.win.play();

        setTimeout( function() {
            nextGame();
        }, 3000);
    }

    // InteractJS drag function

    function moveElement (event, $elmt) {
        var x, y, dir = -1;

        if (!$elmt) {
            $elmt = event.target;
            dir = 1;
        }

        x = ((parseFloat($elmt.getAttribute('data-x')) || 0) + event.dx * dir);
        y = ((parseFloat($elmt.getAttribute('data-y')) || 0) + event.dy * dir);
        r = getRotationValue($elmt);

        $elmt.setAttribute('data-x', x);
        $elmt.setAttribute('data-y', y);
        $elmt.style.transform = 'translate(' + x + 'px, ' + y + 'px) rotate(' + r + 'deg)';
    }

    function setAnimation ($elmt, className, remove) {
        $elmt.classList.remove(className);
        $elmt.offsetHeight;
        $elmt.classList.add(className);

        if (remove) {
            $elmt.addEventListener("animationend", function () {
                $elmt.classList.remove(className);
            });

            $elmt.addEventListener("transitionend", function () {
                $elmt.classList.remove(className);
            });
        }
    }

    // Get the rotation value of the letter

    function getRotationValue ($elmt) {

        var style = window.getComputedStyle($elmt, null);

        var t = style.getPropertyValue("-webkit-transform") ||
                style.getPropertyValue("-moz-transform") ||
                style.getPropertyValue("-ms-transform") ||
                style.getPropertyValue("-o-transform") ||
                style.getPropertyValue("transform") ||
                '';

        var values = t.split('(')[1],
            values = values.split(')')[0],
            values = values.split(',');

        var b = values[1];

        return Math.round(Math.asin(b) * (180 / Math.PI));
    }
    // Shuffle letters

    function shuffleLetters (array) {
        return array.slice().reverse().sort(function () {
            return 0.5 - Math.random();
        });
    }

    // Selector function

    function $ (selector, all) {
        if (all) {
            return [].slice.call(document.querySelectorAll(selector));
        }

        return document.querySelector(selector);
    }
    function play(){
        sounds[games[index].caption].play();
    }
    // Start Game

    setGame(index);
    setAnimation($html, 'started', false);
})();
