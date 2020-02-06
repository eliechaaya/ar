var i= Math.floor(Math.random() * 3);

(function () {
    var games = [
	
	  { img: 'img/animals-cries.png', color: '#ccecfb',  word: '',        voice: 'sounds/sounds/cries/title',caption:'',caption_Ar:'أصوات الحيوانات 🔊' ,sound:'sounds/sounds/cries/title' },

	
       { img: 'img/dog'+i+'.gif', color: '#ccecfb',  word: 'dog',        voice: 'sounds/sounds/animals/dog',caption:'dog 🔊',caption_Ar:'كلب 🔊' ,sound:'sounds/sounds/cries/dog' },

		 
		{ img: 'img/mouse'+i+'.png', color: '#ccecfb',    word: '',   voice: 'sounds/sounds/animals/mouse' ,caption:'Mouse 🐘',caption_Ar:'فأر 🔊',sound:'sounds/sounds/cries/mouse', voice_en:'sounds/sounds/cries/parrot'},


		
		{ img: 'img/parrot'+i+'.png', color: '#ccecfb',  word: 'parrot',   voice: 'sounds/sounds/animals/parrot' ,caption:'parrot 🔊',caption_Ar:'ببغاء 🔊',sound:'sounds/sounds/cries/parrot'},
		
		{ img: 'img/cat'+i+'.png', color: '#ccecfb',  word: 'cat',   voice: 'sounds/sounds/animals/cat' ,caption:'cat 🔊',caption_Ar:'قط 🔊',sound:'sounds/sounds/cries/cat'  },
		
		
		
		
		{ img: 'img/turtle'+i+'.png', color: '#ccecfb',  word: '',   voice: 'sounds/sounds/animals/turtle',caption:'turtle',caption_Ar:'سلحفاة 🔊',sound:'sounds/sounds/cries/turtle'   },
		
		
		
			
        { img: 'img/fish'+i+'.gif', color: '#ccecfb',  word: 'fish',  voice: 'sounds/sounds/animals/fish',caption:'fish',caption_Ar:'سمكة 🔊',sound:'sounds/sounds/cries/fish'  },
		
       
		
		{ img: 'img/horse'+i+'.gif', color: '#ccecfb',  word: 'horse',   voice: 'sounds/sounds/animals/horse',caption:'horse 🔊',caption_Ar:'حصان 🔊',sound:'sounds/sounds/cries/horse'  },
		
        { img: 'img/donkey'+i+'.png', color: '#ccecfb',  word: 'donkey',  voice: 'sounds/sounds/animals/donkey',caption:'donkey 🔊',caption_Ar:'حمار 🔊' ,sound:'sounds/sounds/cries/donkey' },
		
		{ img: 'img/goat'+i+'.png', color: '#ccecfb',  word: 'goat',      voice: 'sounds/sounds/animals/goat',caption:'goat 🔊',caption_Ar:'ماعز 🔊' ,sound:'sounds/sounds/cries/goat' },
		
		{ img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e7d81771805451.5ca68e4ac7166.gif', color: '#ccecfb',  word: 'sheep 🔊',    voice: 'sounds/sounds/animals/sheep',caption:'sheep 🔊',caption_Ar:'خروف 🔊' ,sound:'sounds/sounds/cries/sheep' },
		
		{ img: 'img/chicken'+i+'.png', color: '#ccecfb',  word: 'chicken', voice: 'sounds/sounds/animals/chicken',caption:'chicken  🔊',caption_Ar:'دجاجة 🔊' ,sound:'sounds/sounds/cries/chicken' },
		
      
		
        { img: 'img/cow'+i+'.png', color: '#ccecfb',  word: 'cow',         voice: 'sounds/sounds/animals/cow',caption:'cow 🔊',caption_Ar:'بقرة 🔊',sound:'sounds/sounds/cries/cow' },
		
     
		
		 { img: 'img/snake'+i+'.png', color: '#ccecfb',  word: 'snake',   voice: 'sounds/sounds/animals/snake',caption:'Snake 🔊',caption_Ar:'ثعبان 🔊',sound:'sounds/sounds/cries/snake' },
		 
		 { img: 'img/fox'+i+'.png', color: '#ccecfb',  word: 'fox',        voice: 'sounds/sounds/animals/fox' ,caption:'Fox 🔊',caption_Ar:'ثعلب 🔊',sound:'sounds/sounds/cries/fox'  },
		
		{ img: 'img/frog'+i+'.png', color: '#ccecfb',  word: 'frog',       voice: 'sounds/sounds/animals/frog' ,caption:'frog 🔊',caption_Ar:'ضفدع 🔊',sound:'sounds/sounds/cries/frog'  },
		
		{ img: 'img/rabbit.png', color: '#ccecfb',  word: 'rabbit',   voice: 'sounds/sounds/animals/rabbit' ,caption:'rabbit 🔊',
		caption_Ar:'أرنب 🔊',sound:'sounds/sounds/cries/rabbit'  },
		
		{ img: 'img/Beaver.png', color: '#ccecfb',  word: 'beaver',   voice: 'sounds/sounds/animals/beaver' ,caption:'Beaver 🔊',
		caption_Ar:'قندس 🔊',sound:'sounds/sounds/cries/beaver'  },
		
		{ img: 'img/panda.png', color: '#ccecfb',  word: 'panda', voice: 'sounds/sounds/animals/panda' ,caption:'Panda 🔊',caption_Ar:'باندا 🔊',sound:'sounds/sounds/cries/panda'  },
		
		{ img: 'img/mole.png', color: '#ccecfb',  word: 'mole',        voice: 'sounds/sounds/animals/mole' ,caption:'Mole 🔊',caption_Ar:'خلد 🔊',sound:'sounds/sounds/cries/mole'  },
		
		 { img: 'img/crocodile.png', color: '#ccecfb',  word: 'crocodile',   voice: 'sounds/sounds/animals/crocodile',caption:'Crocodile 🔊',caption_Ar:'تمساح 🔊',sound:'sounds/sounds/cries/crocodile' },
		 
		 { img: 'img/giraffe.png', color: '#ccecfb',  word: 'giraffe',     voice: 'sounds/sounds/animals/giraffe',caption:'Giraffe 🔊',caption_Ar:'زرافة 🔊',sound:'sounds/sounds/cries/giraffe'  },
		 
		 { img: 'img/elephant.gif', color: '#ccecfb',  word: 'elephant', voice: 'sounds/sounds/animals/elephant',caption:'Elephant 🔊',caption_Ar:'فيل 🔊',sound:'sounds/sounds/cries/elephant'  },
		 
		 { img: 'img/bear.gif', color: '#ccecfb',  word: 'bear',   voice: 'sounds/sounds/animals/bear' ,caption:'Bear 🔊',caption_Ar:'دب 🔊',sound:'sounds/sounds/cries/bear'  },
		 
		  { img: 'img/lion.png', color: '#ccecfb',  word: 'Lion', voice: 'sounds/sounds/animals/lion',caption:'Lion 🔊',caption_Ar:'اسد 🔊',sound:'sounds/sounds/cries/lion'},
		  
		  { img: 'img/monkey.gif', color: '#ccecfb',  word: 'monkey',   voice: 'sounds/sounds/animals/monkey' ,caption:'Monkey 🔊',caption_Ar:'قرد 🔊',sound:'sounds/sounds/cries/monkey'  },
		 
		 
		{ img: 'img/wolf.png', color: '#ccecfb',  word: 'wolf',   voice: 'sounds/sounds/animals/wolf',caption:'wolf 🔊',caption_Ar:'ذئب 🔊',sound:'sounds/sounds/cries/wolf' },
		
		
		 { img: 'img/duck.gif', color: '#ccecfb',  word: 'Duck',   voice: 'sounds/sounds/animals/duck',caption:'Duck 🔊',caption_Ar:'بطة 🔊',sound:'sounds/sounds/cries/duck' },
		 
		 { img: 'img/owl.png', color: '#ccecfb',  word: 'owl',   voice: 'sounds/sounds/animals/owl' ,caption:'owl 🔊',caption_Ar:'بومة 🔊',sound:'sounds/sounds/cries/owl'},
		 
		 
		 { img: 'img/pigeon.gif', color: '#ccecfb',  word: 'pigon',    voice: 'sounds/sounds/animals/pigeon',caption:'Pigeon 🔊',caption_Ar:'حمامة 🔊' ,sound:'sounds/sounds/cries/pigeon' },
		 
		 
		 { img: 'img/crow.png', color: '#ccecfb',  word: 'crow',   voice: 'sounds/sounds/animals/crow' ,caption:'crow 🔊',caption_Ar:'غراب 🔊',sound:'sounds/sounds/cries/crow'},
		 
		 
		{ img: 'img/seagull.png', color: '#ccecfb',  word: 'seagull',   voice: 'sounds/sounds/animals/seagull' ,caption:'Seagull 🔊',caption_Ar:'نورس 🔊',sound:'sounds/sounds/cries/seagull'},
		
		
		
		{ img: 'img/eagle.png', color: '#ccecfb',  word: 'eagle',   voice: 'sounds/sounds/animals/eagle' ,caption:'eagle 🔊',caption_Ar:'نسر 🔊',sound:'sounds/sounds/cries/eagle'},
		
		
		{ img: 'img/ostrich.gif', color: '#ccecfb',  word: 'ostrich',   voice: 'sounds/sounds/animals/ostrich' ,caption:'Ostrich 🔊',caption_Ar:'نعامة 🔊',sound:'sounds/sounds/cries/ostrich'},
		
		
		
		{ img: 'img/butterfly.gif', color: '#ccecfb',  word: 'butterfly', voice: 'sounds/sounds/animals/butterfly' ,caption:'butterfly',caption_Ar:'فراشة 🔊',sound:'sounds/sounds/cries/butterfly'},
		
		
		{ img: 'img/ant.png', color: '#ccecfb',  word: 'ant',   voice: 'sounds/sounds/animals/ant' ,caption:'ant',caption_Ar:'نملة 🔊',sound:'sounds/sounds/cries/ant'  },
		
		{ img: 'img/spider.gif', color: '#ccecfb',  word: 'spider',   voice: 'sounds/sounds/animals/spider' ,caption:'spider',caption_Ar:'عنكبوت 🔊',sound:'sounds/sounds/cries/spider'  },
		
		{ img: 'img/ladybug.gif', color: '#ccecfb',  word: 'ladybird',   voice: 'sounds/sounds/animals/ladybird' ,caption:'ladybird',caption_Ar:'دعسوقة 🔊',sound:'sounds/sounds/cries/ant'  },
		
		
		{ img: 'img/snail.png', color: '#ccecfb',  word: 'snail',   voice: 'sounds/sounds/animals/snail' ,caption:'snail',caption_Ar:'حلزون 🔊',sound:'sounds/sounds/cries/snail'  },
		
	
		
			{ img: 'img/dolphin.png', color: '#ccecfb',  word: 'dolphin',   voice: 'sounds/sounds/animals/dolphin' ,caption:'dolphin 🔊',caption_Ar:'دلفين 🔊',sound:'sounds/sounds/cries/dolphin'  },

		
		{ img: 'img/crab.png', color: '#ccecfb',  word: 'crab',   voice: 'sounds/sounds/animals/crab' ,caption:'Crab',caption_Ar:'سلطعون 🔊',sound:'sounds/sounds/cries/crab'  },
		
		{ img: 'img/seal.png', color: '#ccecfb',  word: 'seal',   voice: 'sounds/sounds/animals/seal' ,caption:'seal 🔊',caption_Ar:'فقمة 🔊',sound:'sounds/sounds/cries/seal'  },
		
		{ img: 'img/whale.gif', color: '#ccecfb',  word: 'whale',   voice: 'sounds/sounds/animals/whale' ,caption:'whale 🔊',caption_Ar:'حوت 🔊',sound:'sounds/sounds/cries/whale'  }
		

		
        
        
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
        win:  new buzz.sound('sounds/win'),
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
