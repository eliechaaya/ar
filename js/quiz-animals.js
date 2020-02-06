
(function () {
    var games = [
        { img: 'img/bg-animals.png', color: '#bfd647',  word: '', sound: 'sounds/sounds/animals/',caption:'',caption_Ar:'',voice:'',voice_english:'' },
       
		{ img: 'img/mouse.png', color: '#bfd647',  word: '',   sound: 'sounds/sounds/animals/mouse' ,caption:'Mouse',caption_Ar:'فأر',voice:'sounds/sounds/animals/mouse','voice_english':'sounds/sounds/english/mouse'},
		
		{ img: 'img/parrot0.png', color: '#bfd647',  word: 'parrot',   sound: 'sounds/sounds/animals/parrot' ,caption:'parrot',caption_Ar:'ببغاء',voice:'sounds/sounds/animals/parrot','voice_english':'sounds/sounds/english/parrot'},
		
		{ img: 'img/cat.png', color: '#bfd647',  word: 'cat',   sound: 'sounds/sounds/animals/cat' ,caption:'cat',caption_Ar:'قط',voice:'sounds/sounds/animals/cat','voice_english':'sounds/sounds/english/cat'  },
			
				
		{ img: 'img/turtle0.png', color: '#bfd647',  word: '',   sound: 'sounds/sounds/animals/turtle',caption:'turtle',caption_Ar:'سلحفاة',voice:'sounds/sounds/animals/turtle','voice_english':'sounds/sounds/english/turtle'   },
		
		
        { img: 'img/dog0.gif', color: '#bfd647',  word: 'dog',    sound: 'sounds/sounds/animals/dog',caption:'dog',caption_Ar:'كلب' ,voice:'sounds/sounds/animals/dog','voice_english':'sounds/sounds/english/dog' },
		
		{ img: 'img/horse2.gif', color: '#bfd647',  word: 'horse',   sound: 'sounds/sounds/animals/horse',caption:'horse',caption_Ar:'حصان',voice:'sounds/sounds/animals/horse' ,'voice_english':'sounds/sounds/english/horse' },
		
        { img: 'img/donkey0.png', color: '#bfd647',  word: 'donkey',  sound: 'sounds/sounds/animals/donkey',caption:'donkey',caption_Ar:'حمار' ,voice:'sounds/sounds/animals/donkey','voice_english':'sounds/sounds/english/donkey' },
		
		{ img: 'img/goat.png', color: '#bfd647',  word: 'goat',      sound: 'sounds/sounds/animals/goat',caption:'goat',caption_Ar:'ماعز' ,voice:'sounds/sounds/animals/goat','voice_english':'sounds/sounds/english/goat' },
		
		{ img: 'img/sheep.png', color: '#bfd647',  word: 'sheep',    sound: 'sounds/sounds/animals/sheep',caption:'sheep',caption_Ar:'خروف' ,voice:'sounds/sounds/animals/sheep','voice_english':'sounds/sounds/english/sheep' },
		
		{ img: 'img/chicken0.png', color: '#bfd647',  word: 'chicken', sound: 'sounds/sounds/animals/chicken',caption:'chicken',caption_Ar:'دجاجة' ,voice:'sounds/sounds/animals/chicken','voice_english':'sounds/sounds/english/chicken' },
		
      		
        { img: 'img/cow0.png', color: '#bfd647',  word: 'cow',    sound: 'sounds/sounds/animals/cow',caption:'cow',caption_Ar:'بقرة',voice:'sounds/sounds/animals/cow','voice_english':'sounds/sounds/english/cow' },
		
     		
		 { img: 'img/snake2.png', color: '#bfd647',  word: 'snake',   sound: 'sounds/sounds/animals/snake',caption:'snake',caption_Ar:'ثعبان',voice:'sounds/sounds/animals/snake','voice_english':'sounds/sounds/english/snake' },
		 
		
		{ img: 'img/rabbit.png', color: '#bfd647',  word: 'rabbit',   sound: 'sounds/sounds/animals/rabbit' ,caption:'rabbit',		caption_Ar:'أرنب',voice:'sounds/sounds/animals/rabbit','voice_english':'sounds/sounds/english/rabbit'  },

		
		 { img: 'img/crocodile.png', color: '#bfd647',  word: 'Crocodile',   sound: 'sounds/sounds/animals/crocodile',caption:'Crocodile',caption_Ar:'تمساح',voice:'sounds/sounds/animals/Crocodile','voice_english':'sounds/sounds/english/Crocodile' },
		 
		 { img: 'img/giraffe.png', color: '#bfd647',  word: 'giraffe',     sound: 'sounds/sounds/animals/giraffe',caption:'giraffe',caption_Ar:'زرافة',voice:'sounds/sounds/animals/giraffe','voice_english':'sounds/sounds/english/giraffe'  },
		 
		 { img: 'img/elephant.gif', color: '#bfd647',  word: 'elephant', sound: 'sounds/sounds/animals/elephant',caption:'elephant',caption_Ar:'فيل',voice:'sounds/sounds/animals/elephant','voice_english':'sounds/sounds/english/elephant'  },
		 
		 { img: 'img/bear.png', color: '#bfd647',  word: 'bear',   sound: 'sounds/sounds/animals/bear' ,caption:'bear',caption_Ar:'دب',voice:'sounds/sounds/animals/bear','voice_english':'sounds/sounds/english/bear'  },
		 
		  { img: 'img/lion.png', color: '#ccecfb',  word: 'Lion', sound: 'sounds/sounds/animals/lion',caption:'lion',caption_Ar:'اسد',voice:'sounds/sounds/animals/lion','voice_english':'sounds/sounds/english/lion'},
		
		
		 { img: 'img/duck.gif', color: '#ccecfb',  word: 'Duck',   sound: 'sounds/sounds/animals/duck',caption:'duck',caption_Ar:'بطة',voice:'sounds/sounds/animals/duck','voice_english':'sounds/sounds/english/duck' },
		 
		 { img: 'img/owl.png', color: '#ccecfb',  word: 'owl',   sound: 'sounds/sounds/animals/owl' ,caption:'owl',caption_Ar:'بومة',voice:'sounds/sounds/animals/owl','voice_english':'sounds/sounds/english/owl'},
		 
		 
		 { img: 'img/pigeon.gif', color: '#ccecfb',  word: 'pigon',    sound: 'sounds/sounds/animals/pigeon',caption:'pigeon',caption_Ar:'حمامة' ,voice:'sounds/sounds/animals/pigeon','voice_english':'sounds/sounds/english/pigeon' },
		 	
			
		{ img: 'img/eagle.png', color: '#ccecfb',  word: 'eagle',   sound: 'sounds/sounds/animals/eagle' ,caption:'eagle 🔊',caption_Ar:'نسر',voice:'sounds/sounds/animals/eagle','voice_english':'sounds/sounds/english/eagle'},
		
		
		{ img: 'img/ant.png', color: '#ccecfb',  word: 'ant',   sound: 'sounds/sounds/animals/ant' ,caption:'ant',caption_Ar:'نملة',voice:'sounds/sounds/animals/ant','voice_english':'sounds/sounds/english/ant'  },
		
		{ img: 'img/spider.gif', color: '#ccecfb',  word: 'spider',   sound: 'sounds/sounds/animals/spider' ,caption:'spider',caption_Ar:'عنكبوت',voice:'sounds/sounds/animals/spider','voice_english':'sounds/sounds/english/spider'  },
		
		{ img: 'img/ladybug.gif', color: '#ccecfb',  word: 'ladybird',   sound: 'sounds/sounds/animals/ladybird' ,caption:'ladybird',caption_Ar:'دعسوقة',voice:'sounds/sounds/animals/ladybird','voice_english':'sounds/sounds/english/ladybird'  },

				
		{ img: 'img/dolphin.png', color: '#ccecfb',  word: 'dolphin',   sound: 'sounds/sounds/animals/dolphin' ,caption:'dolphin 🔊',caption_Ar:'دلفين',voice:'sounds/sounds/animals/dolphin','voice_english':'sounds/sounds/english/dolphin'  }
		

        
        
    ];
    // var playicon = ' 🔊';
    var playicon = '';

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
        //alphabet  = 'abcdefghijklmnopqrstuvwxyz'.split(''),
		alphabet  = 'أإابتةثجحخدذرزسشصضطظعغفقكلمنهوي'.split(''),
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
        dice: new buzz.sound('sounds/dice'),
        blup: new buzz.sound('sounds/blup')
    };

    for (var g in games) {
        var game = games[g];
        sounds[game.sound] = new buzz.sound(game.sound);

        var img = new Image();
        img.src = game.img;
    }
    for (var g in games) {
    	var newcaption = game.caption + '_english';
        var game = games[g];
        sounds[game.caption] = new buzz.sound(game.voice);
        sounds[game.voice_english] = new buzz.sound(game.voice_english);

        var img = new Image();
        img.src = game.img;
    }

    for (var s in alphabet) {
        sounds[alphabet[s]] = new buzz.sound('./sounds/kid/' + alphabet[s]);
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
            caption_Ar_new      = game.caption_Ar,
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
            var text = document.createTextNode(caption_Ar_new + playicon);
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
        $li.className = 'model1';
        var text1 = document.createTextNode(caption);

        $li.appendChild(text1);
        $li.addEventListener('click', function (e) {
            play_english();
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
    function play_english(){
    	console.log(games[index].voice_english);
    	var newcaption = games[index].caption + '_english';
    	console.log(sounds[newcaption]);
        sounds[games[index].voice_english].play();
    }
    // Start Game

    setGame(index);
    setAnimation($html, 'started', false);
})();
