(function () {
    var games = [
	
	  { img: 'img/letters.png', color: '#ffffff',  word: '',   sound: 'sounds/colors/',caption:'dog 🔊',caption_Ar:'الحروف الهجائية' ,voice:'' },
	  
	  	
       { img: 'img/letters/1.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t01',caption:'أرنب' ,caption_Ar:'أرنب 🐇', voice: 'sounds/sounds/animals/rabbit'},
	   
	    { img: 'img/letters/2.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t02',caption:'بطة' ,caption_Ar:'بطة 🦆', voice: 'sounds/sounds/animals/duck'},
		
		 { img: 'img/letters/3.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t03',caption:'تمساح' ,caption_Ar:'تمساح 🐊', voice: 'sounds/sounds/animals/crocodile'},
		 
		  { img: 'img/letters/4.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t04',caption:'ثعلب' ,caption_Ar:'ثعلب 🦊', voice: 'sounds/sounds/animals/fox'},
		 
		 { img: 'img/letters/5.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t05',caption:'جمل' ,caption_Ar:'جمل 🐪', voice: 'sounds/sounds/animals/camel'},
		
		   { img: 'img/letters/6.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t06',caption:'حصان' ,caption_Ar:'حصان 🐎', voice: 'sounds/sounds/animals/horse'},
		   
		   { img: 'img/letters/7.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t07',caption:'خروف' ,caption_Ar:'خروف 🐑', voice: 'sounds/sounds/animals/sheep'},
			 
			 
		    { img: 'img/letters/8.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t08',caption:'دب' ,caption_Ar:'دب 🐻', voice: 'sounds/sounds/animals/bear'},
			   
			 { img: 'img/letters/9.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t09',caption:'ذئب' ,caption_Ar:'ذئب 🐺', voice: 'sounds/sounds/animals/wolf'},
				 
			 { img: 'img/letters/10.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t10',caption:'روبيان' ,caption_Ar:'روبيان 🦐', voice: 'sounds/sounds/animals/shrimp'},
				   
			  { img: 'img/letters/11.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t11',caption:'زرافة' ,caption_Ar:'زرافة \ud83e\udd92', voice: 'sounds/sounds/animals/giraffe'},
					 
								   
			  { img: 'img/letters/12.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t12',caption:'سلحفاة' ,caption_Ar:'سلحفاة 🐢', voice: 'sounds/sounds/animals/turtle'},
			 
			 
			  { img: 'img/letters/13.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t13',caption:'شيمبانزي' ,caption_Ar:'شيمبانزي 🐒', voice: 'sounds/sounds/animals/chimpanzee'},
			
			  { img: 'img/letters/14.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t14',caption:'صقر' ,caption_Ar:'صقر 🦅', voice: 'sounds/sounds/animals/falcon'},
			 
			  { img: 'img/letters/15.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t15',caption:'ضفدع' ,caption_Ar:'ضفدع 🐸', voice: 'sounds/sounds/animals/frog'},
			  
			  { img: 'img/letters/16.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t16',caption:'طائرة' ,caption_Ar:'طائرة ✈️ ', voice: 'sounds/transport/plane'},
			  
			  { img: 'img/letters/17.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t17',caption:'ظبي' ,caption_Ar:'ظبي 🦌', voice: 'sounds/sounds/animals/deer'},
			   
			  { img: 'img/letters/18.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t18',caption:'عنكبوت' ,caption_Ar:'عنكبوت 🕷️', voice: 'sounds/sounds/animals/spider'},
			   
			  { img: 'img/letters/19.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t19',caption:'غراب' ,caption_Ar:'غراب 🐦', voice: 'sounds/sounds/animals/crow'},
				
			  { img: 'img/letters/20.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t20',caption:'فيل' ,caption_Ar:'فيل 🐘', voice: 'sounds/sounds/animals/elephant'},
				 
			  { img: 'img/letters/21.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t21',caption:'قرد' ,caption_Ar:'قرد 🐵', voice: 'sounds/sounds/animals/monkey'},
 
			  { img: 'img/letters/22.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t22',caption:'كلب' ,caption_Ar:'كلب 🐕', voice: 'sounds/sounds/animals/dog'},
			  
			  { img: 'img/letters/23.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t23',caption:'ليث' ,caption_Ar:'ليث 🦁', voice: 'sounds/sounds/animals/lion2'},
			   
			  { img: 'img/letters/24.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t24',caption:'ماعز' ,caption_Ar:'ماعز 🐐', voice: 'sounds/sounds/animals/goat'},
				
			  { img: 'img/letters/25.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t25',caption:'نحلة' ,caption_Ar:'نحلة 🐝', voice: 'sounds/sounds/animals/bee'},
				 
			  { img: 'img/letters/26.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t26',caption:'هرّٙة' ,caption_Ar:'هرّٙة 🐈', voice: 'sounds/sounds/animals/cat2'},
	  
			  
			  { img: 'img/letters/27.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t27',caption:'وحيد القرن' ,caption_Ar:'وحيد القرن 🦏', voice: 'sounds/sounds/animals/rhinoceros'},
			  
			  { img: 'img/letters/28.png', color: '#ccecfb',  word: 'dog',  sound: 'sounds/letters/t28',caption:'يرقة' ,caption_Ar:'يرقة 🐛', voice: 'sounds/sounds/animals/caterpillar'}
		
        
        
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
