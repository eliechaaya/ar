
(function () {
    var games = [
        { img: 'img/animals.png', color: '#a7f1ac',  word: '', sound: 'sounds/',caption:'',caption_Ar:'',voice:'' },
       
		
            
		
       		
        { img: 'img/camel.gif', color: '#f6e2d3',  word: 'camel',    sound: 'sounds/sounds/animals/snake',caption:'Camel',caption_Ar:'جمل' ,voice:'sounds/lion' },
		
        
		
        { img: 'img/bat2.gif', color: '#c0bedf',  word: 'bat',       sound: 'sounds/sounds/animals/bat',caption:'Bat',caption_Ar:'خفاش' ,voice:'sounds/cries/bat' },
		
		
				
		
		
		
		
		{ img: 'img/mouse.png', color: '#ccecfb',  word: '',   sound: 'sounds/sounds/animals/mouse' ,caption:'mouse',
		caption_Ar:'فأر',voice:'sounds/mouse'  },
		
		
		{ img: 'img/parrot_375.webp', color: '#ccecfb',  word: '',   sound: 'sounds/sounds/animals/parrot' ,caption:'parrot',caption_Ar:'ببغاء',voice:'sounds/lion'  },
		
		{ img: 'img/cat.png', color: '#ccecfb',  word: '',   sound: 'sounds/sounds/animals/cat' ,caption:'cat',caption_Ar:'قط',voice:'sounds/lion'  },
		
		
		
		
		{ img: 'img/turtle_375.webp', color: '#ccecfb',  word: '',   sound: 'sounds/sounds/animals/turtle',caption:'turtle',caption_Ar:'سلحفاة',voice:'sounds/lion'   },
		
		
		
		
		{ img: 'img/rooster3.gif', color: '#fce8b6',  word: '',   sound: 'sounds//animals/rooster' ,caption:'rooster',caption_Ar:'ديك',voice:'sounds/lion'},
		
		
		
			
		
		
        { img: 'img/rooster3.gif', color: '#fce8b6',  word: 'rooster',   sound: 'sounds/sounds/animals/rooster',caption:'Rooster',caption_Ar:'ديك',voice:'sounds/lion'  },
		
        
		
        { img: 'img/iex10.png', color: '#ffc4c4',  word: 'racoon',   sound: 'sounds/sounds/animals/racoon',caption:'Racoon',caption_Ar:'راكون حيوان',voice:'sounds/lion'  },
        
		
        { img: 'img/fish.gif', color: '#ff9f9b',  word: 'fish',      sound: 'sounds/sounds/animals/fish',caption:'Fish',caption_Ar:'سمك',voice:'sounds/lion'  },
		
        { img: 'img/iex13.png', color: '#f6dbb3',  word: 'chibel',   sound: 'sounds/sounds/animals/snake',caption:'Chibel',caption_Ar:'اسد' ,voice:'sounds/lion' },
		
        { img: 'img/iex14.png', color: '#cab875',  word: 'hack',     sound: 'sounds/sounds/animals/snake',caption:'Hack',caption_Ar:'هاك' ,voice:'sounds/lion' },
        { img: 'img/iex15.png', color: '#a3a8af',  word: 'dabee',    sound: 'sounds/sounds/animals/snake',caption:'Dabee',caption_Ar:'اسد' ,voice:'sounds/lion' },
		
        { img: 'img/iex16.png', color: '#ee8489',  word: 'taouss',   sound: 'sounds/sounds/animals/snake',caption:'Taouss',caption_Ar:'اسد' ,voice:'sounds/lion' },
		
        { img: 'img/deer.gif', color: '#ef9c65',  word: 'zabi',      sound: 'sounds/sounds/animals/snake',caption:'Zabi',caption_Ar:'اسد' ,voice:'sounds/lion' },
		
        { img: 'img/bird.gif', color: '#efa4a6',  word: 'bird',      sound: 'sounds/sounds/animals/snake',caption:'Bird',caption_Ar:'طائر',voice:'sounds/lion'  },
		
        { img: 'img/iex19.png', color: '#dcbb8d',  word: 'gazelle',  sound: 'sounds/sounds/animals/snake',caption:'Gazelle',caption_Ar:'غزال',voice:'sounds/lion'  },
		
        
        
		
        { img: 'img/dog.gif', color: '#d3ae7a',  word: 'dog',        sound: 'sounds/sounds/animals/snake',caption:'Dog',caption_Ar:'الكلب' ,voice:'sounds/lion' },
		
        { img: 'img/lama2.gif', color: '#db7f7a',  word: 'lama',     sound: 'sounds/sounds/animals/lama',caption:'Lama',caption_Ar:'لاما' ,voice:'sounds/cries/lama' },
		
		{ img: 'img/horse2.gif', color: '#fbddbc',  word: 'horse',   sound: 'sounds/sounds/animals/horse',caption:'Horse',caption_Ar:'حصان',voice:'sounds/cries/horse'  },
		
        { img: 'img/dunkey.png', color: '#9b928d',  word: 'dunkey',  sound: 'sounds/sounds/animals/dunkey',caption:'dunkey',caption_Ar:'حمار' ,voice:'sounds/cries/dunkey' },
		
		{ img: 'img/goat.png', color: '#f6f6f6',  word: 'goat',      sound: 'sounds/sounds/animals/goat',caption:'goat',caption_Ar:'ماعز' ,voice:'sounds/cries/goat' },
		
		{ img: 'img/sheep.png', color: '#f6f6f6',  word: 'sheep',    sound: 'sounds/sounds/animals/sheep',caption:'sheep',caption_Ar:'خروف' ,voice:'sounds/cries/sheep' },
		
		{ img: 'img/chicken.png', color: '#f6f6f6',  word: 'chicken', sound: 'sounds/sounds/animals/chicken',caption:'chicken',caption_Ar:'دجاجة' ,voice:'sounds/cries/chicken' },
		
      
		
        { img: 'img/cow.png', color: '#eec233',  word: 'cow',         sound: 'sounds/sounds/animals/cow',caption:'cow',caption_Ar:'بقرة',voice:'sounds/cries/cow' },
		
     
		
		 { img: 'img/snake2.png', color: '#ddf59d',  word: 'snake',   sound: 'sounds/sounds/animals/snake',caption:'Snake',caption_Ar:'ثعبان',voice:'sounds/cries/snake' },
		 
		 { img: 'img/fox.png', color: '#ccecfb',  word: 'fox',        sound: 'sounds/sounds/animals/fox' ,caption:'Fox',caption_Ar:'ثعلب',voice:'sounds/cries/lion'  },
		
		{ img: 'img/frog.png', color: '#ccecfb',  word: 'frog',       sound: 'sounds/sounds/animals/frog' ,caption:'frog',caption_Ar:'ضفدع',voice:'sounds/cries/frog'  },
		
		{ img: 'img/rabbit.png', color: '#ccecfb',  word: 'rabbit',   sound: 'sounds/sounds/animals/rabbit' ,caption:'rabbit',
		caption_Ar:'أرنب',voice:'sounds/cries/rabbit'  },
		
		{ img: 'img/beaver.gif', color: '#ccecfb',  word: 'beaver',   sound: 'sounds/sounds/animals/beaver' ,caption:'beaver',
		caption_Ar:'قندس',voice:'sounds/cries/beaver'  },
		
		{ img: 'img/panda_375.webp', color: '#ccecfb',  word: 'panda', sound: 'sounds/sounds/animals/panda' ,caption:'panda',caption_Ar:'باندا',voice:'sounds/cries/panda'  },
		
		{ img: 'img/mole.gif', color: '#ccecfb',  word: 'mole',        sound: 'sounds/sounds/animals/mole' ,caption:'mole',caption_Ar:'خلد',voice:'sounds/cries/mole'  },
		
		 { img: 'img/crocodile.gif', color: '#f7ffc8',  word: 'Crocodile',   sound: 'sounds/sounds/animals/crocodile',caption:'Crocodile',caption_Ar:'تمساح',voice:'sounds/cries/Crocodile' },
		 
		 { img: 'img/iex11.png', color: '#f9d5a5',  word: 'giraffe',     sound: 'sounds/sounds/animals/giraffe',caption:'Giraffe',caption_Ar:'زرافة',voice:'sounds/cries/giraffe'  },
		 
		 { img: 'img/elephant.gif', color: '#83cfe8',  word: 'elephant', sound: 'sounds/sounds/animals/elephant',caption:'elephant',caption_Ar:'فيل',voice:'sounds/cries/elephant'  },
		 
		 { img: 'img/bear.png', color: '#ccecfb',  word: 'bear',   sound: 'sounds/sounds/animals/bear' ,caption:'Bear',caption_Ar:'دب',voice:'sounds/cries/bear'  },
		 
		  { img: 'img/lion_500.webp', color: '#ffe4d2',  word: 'Lion', sound: 'sounds/sounds/animals/lion',caption:'Lion',caption_Ar:'اسد',voice:'sounds/cries/lion'},
		  
		  { img: 'img/monkey.gif', color: '#ddf59d',  word: 'monkey',   sound: 'sounds/sounds/animals/monkey' ,caption:'monkey',caption_Ar:'قرد',voice:'sounds/cries/monkey'  },
		 
		 
		{ img: 'img/wolf.png', color: '#d4d8e9',  word: 'wolf',   sound: 'sounds/sounds/animals/wolf',caption:'wolf',caption_Ar:'ذئب',voice:'sounds/cries/wolf' },
		
		
		 { img: 'img/duck.gif', color: '#ebc9a0',  word: 'Duck',   sound: 'sounds/sounds/animals/duck',caption:'Duck',caption_Ar:'بطة',voice:'sounds/cries/duck' },
		 
		 { img: 'img/owl.png', color: '#fce8b6',  word: 'owl',   sound: 'sounds/sounds/animals/owl' ,caption:'owl',caption_Ar:'بومة',voice:'sounds/cries/owl'},
		 
		 
		 { img: 'img/pigeon.gif', color: '#ebebeb',  word: 'pigon',    sound: 'sounds/sounds/animals/pigeon',caption:'Pigeon',caption_Ar:'حمامة' ,voice:'sounds/cries/pigeon' },
		 
		 
		 { img: 'img/crow.png', color: '#fce8b6',  word: 'crow',   sound: 'sounds/sounds/animals/crow' ,caption:'crow',caption_Ar:'غراب',voice:'sounds/cries/crow'},
		 
		 
		{ img: 'img/seagull.png', color: '#fce8b6',  word: 'seagull',   sound: 'sounds/sounds/animals/seagull' ,caption:'Seagull',caption_Ar:'نورس',voice:'sounds/cries/seagull'},
		
		
		
		{ img: 'img/eagle.png', color: '#fce8b6',  word: 'eagle',   sound: 'sounds/sounds/animals/eagle' ,caption:'eagle',caption_Ar:'نسر',voice:'sounds/cries/eagle'},
		
		
		{ img: 'img/ostrich.gif', color: '#fce8b6',  word: 'ostrich',   sound: 'sounds/sounds/animals/ostrich' ,caption:'Ostrich',caption_Ar:'نعامة',voice:'sounds/ostrich'},
		
		
		{ img: 'img/bee.gif', color: '#f6f6f6',  word: 'bee',         sound: 'sounds/sounds/animals/bee',caption:'Bee',caption_Ar:'نحلة' ,voice:'sounds/cries/Bee' },
		
		
		{ img: 'img/butterfly.png', color: '#fce8b6',  word: 'butterfly',     sound: 'sounds/sounds/animals/butterfly' ,caption:'butterfly',caption_Ar:'فراشة',voice:'sounds/cries/butterfly'},
		
		
		{ img: 'img/ant.png', color: '#ccecfb',  word: 'ant',   sound: 'sounds/sounds/animals/ant' ,caption:'ant',caption_Ar:'نملة',voice:'sounds/cries/ant'  },
		
		{ img: 'img/spider.gif', color: '#ccecfb',  word: 'spider',   sound: 'sounds/sounds/animals/spider' ,caption:'spider',caption_Ar:'عنكبوت',voice:'sounds/cries/spider'  },
		
		{ img: 'img/ladybird.png', color: '#ccecfb',  word: 'ladybird',   sound: 'sounds/sounds/animals/ladybird' ,caption:'ladybird',caption_Ar:'دعسوقة',voice:'sounds/cries/ladybird'  },
		
		
		{ img: 'img/snail.png', color: '#ccecfb',  word: 'snail',   sound: 'sounds/sounds/animals/snail' ,caption:'snail',caption_Ar:'حلزون',voice:'sounds/cries/snail'  },
		
		{ img: 'img/worm.png', color: '#ccecfb',  word: 'worm',   sound: 'sounds/sounds/animals/worm' ,caption:'worm',caption_Ar:'دودة',voice:'sounds/cries/worm'  },
		
		
			{ img: 'img/dolphin_375.webp', color: '#ccecfb',  word: 'dolphin',   sound: 'sounds/sounds/animals/dolphin' ,caption:'dolphin',caption_Ar:'دلفين',voice:'sounds/cries/dolphin'  },
		
		
		{ img: 'img/Shrimp.gif', color: '#ccecfb',  word: 'Shrimp',   sound: 'sounds/sounds/animals/Shrimp' ,caption:'Shrimp',caption_Ar:'روبيان',voice:'sounds/cries/Shrimp'  },
		
		
		{ img: 'img/octopus.png', color: '#ccecfb',  word: 'octopus',   sound: 'sounds/sounds/animals/octopus' ,caption:'octopus',caption_Ar:'أخطبوط',voice:'sounds/cries/octopus'  },
		
		{ img: 'img/jellyfish.png', color: '#ccecfb',  word: 'jellyfish',   sound: 'sounds/sounds/animals/jellyfish' ,caption:'jellyfish',caption_Ar:'سلطعون',voice:'sounds/cries/jellyfish'  },
		
		{ img: 'img/seal.png', color: '#ccecfb',  word: 'seal',   sound: 'sounds/sounds/animals/seal' ,caption:'seal',caption_Ar:'فقمة',voice:'sounds/cries/seal'  },
		
		{ img: 'img/whale.png', color: '#ccecfb',  word: 'whale',   sound: 'sounds/sounds/animals/whale' ,caption:'whale',caption_Ar:'حوت',voice:'sounds/cries/whale'  },
		
		{ img: 'img/oyster.png', color: '#ccecfb',  word: 'oyster',   sound: 'sounds/sounds/animals/oyster' ,caption:'oyster',caption_Ar:'محار',voice:'sounds/cries/oyster'  },
		
		
			
        { img: 'img/pigeon.gif', color: '#ebebeb',  word: 'pigon',    sound: 'sounds/sounds/animals/snake',caption:'Pigeon',caption_Ar:'حمامة' ,voice:'sounds/lion' }
        
        
    ];

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
        win:  new buzz.sound('sounds/win'),
        fail: new buzz.sound('sounds/fail'),
       // dice: new buzz.sound('sounds/dice'),
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
            caption_Ar      = game.caption_Ar,
            color           = game.color,
            shuffledLetters = shuffleLetters(wordLetters);

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

        // for (var a in wordLetters) {
        //     $li = document.createElement('li');
        //     $li.className = 'model';
        //     $li.dataset.letter = wordLetters[a];
        //     $models1.appendChild($li);
        // }
        $li = document.createElement('li');
        $li.className = 'model1';
        var text = document.createTextNode(caption_Ar);

        $li.appendChild(text);
        // $li.addEventListener("click", play, false);
        $li.addEventListener('click', function (e) {
            play();
            setAnimation($models1, 'bouncing');
        });
        $models1.appendChild($li);
        setAnimation($models1, 'bouncing');
        $li = document.createElement('li');
        $li.className = 'model1';
        var text1 = document.createTextNode(caption);

        $li.appendChild(text1);
        $li.addEventListener('click', function (e) {
            play();
            setAnimation($models, 'bouncing');
        });

        $models.appendChild($li);
        setAnimation($models, 'bouncing');
        // for (var a in wordLetters) {
        //     $li = document.createElement('li');
        //     $li.className = 'model';
        //     $li.dataset.letter = wordLetters[a];

        //     $models.appendChild($li);
        // }

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

                    if (++score == wordLetters.length) {
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

            // $letters.appendChild($li);
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

        // setAnimation($letters, 'thrown');
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
