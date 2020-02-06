 // ----------------------------------------------------------------------------
 // Real Life Demo - Buzz, a Javascript HTML5 Audio library
 // http://buzz.jaysalvat.com/demo
 // ----------------------------------------------------------------------------
 // Copyright (C) Jay Salvat
 // http://jaysalvat.com/
 // ----------------------------------------------------------------------------

/* global buzz, interact */

(function () {
    var games = [
        { img: 'img/animal-voices.png', color: '#a7f1ac',  word: '', sound: 'sounds/' },
        { img: 'img/animals/bat.png', color: '#ffe4d2',  word: '',   sound: 'sounds/animals-sound/bat' },
		{ img: 'img/animals/beer.png', color: '#ebc9a0',  word: '',   sound: 'sounds/animals-sound/beer' },
		{ img: 'img/animals/camel.png', color: '#f7ffc8',  word: '',   sound: 'sounds/animals-sound/camel' },
		{ img: 'img/animals/cat.png', color: '#ddf59d',  word: '',   sound: 'sounds/animals-sound/cat' },
		{ img: 'img/animals/dog.png', color: '#f6e2d3',  word: '',   sound: 'sounds/animals-sound/dog' },
		{ img: 'img/animals/dolphen.png', color: '#fbddbc',  word: '',   sound: 'sounds/animals-sound/dolphen' },
		{ img: 'img/animals/falcon.png', color: '#c0bedf',  word: '',   sound: 'sounds/animals-sound/falcon' },
		{ img: 'img/animals/elephant.png', color: '#d4d8e9',  word: '',   sound: 'sounds/animals-sound/elephant' },
		{ img: 'img/animals/eagle.png', color: '#ffc4c4',  word: '',   sound: 'sounds/animals-sound/eagle' },
        { img: 'img/animals/fox.png', color: '#f9d5a5',  word: '',  sound: 'sounds/animals-sound/fox' },
		{ img: 'img/animals/frog.png', color: '#ff9f9b',  word: '',   sound: 'sounds/animals-sound/frog' },
		{ img: 'img/animals/horse.png', color: '#f6dbb3',  word: '',   sound: 'sounds/animals-sound/horse' },
		{ img: 'img/animals/lion.png', color: '#cab875',  word: '',   sound: 'sounds/animals-sound/lion' },
		{ img: 'img/animals/monkey.png', color: '#a3a8af',  word: '',   sound: 'sounds/animals-sound/monkey' },
		{ img: 'img/animals/penguin.png', color: '#ee8489',  word: '',   sound: 'sounds/animals-sound/penguin' },
		{ img: 'img/animals/sheep.png', color: '#ef9c65',  word: '',   sound: 'sounds/animals-sound/sheep' },
		{ img: 'img/animals/tiger.png', color: '#efa4a6',  word: '',   sound: 'sounds/animals-sound/tiger' },
		{ img: 'img/animals/wolf.png', color: '#dcbb8d',  word: '',   sound: 'sounds/animals-sound/wolf' },
		{ img: 'img/animals/zebra.png', color: '#e2a8b1',  word: '',   sound: 'sounds/animals-sound/zebra' },
		{ img: 'img/animals/snake.png', color: '#83cfe8',  word: '',   sound: 'sounds/animals-sound/snake' },
		{ img: 'img/animals/rooster.png', color: '#d3ae7a',  word: '',   sound: 'sounds/animals-sound/rooster' },
		{ img: 'img/animals/cow.png', color: '#db7f7a',  word: '',   sound: 'sounds/animals-sound/cow' },
		{ img: 'img/animals/rabbit.png', color: '#9b928d',  word: '',   sound: 'sounds/animals-sound/rabbit' },
		{ img: 'img/animals/bee.png', color: '#f6f6f6',  word: '',   sound: 'sounds/animals-sound/bee' },
		{ img: 'img/animals/owl.png', color: '#ebebeb',  word: '',   sound: 'sounds/animals-sound/owl' }
		
        
    ];

    var $html     = $('html'),
        $link     = $('.header a'),
        $warning  = $('.warning'),
        $ad       = $('.ad'),
        $adClose  = $('.ad a'),
        $figure   = $('.figure'),
        $letters  = $('.letters'),
        $models   = $('.models'),
        $prev     = $('.prev'),
        $next     = $('.next'),
        $levl     = $('.levl');

    var index     = 0,
        score     = 0,
        alphabet  = 'أإابتةثجحخدذرزسشصضطظعغفقكلمنهوي'.split(''),
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
        } else {
            $levl.textContent = 'harder';
            $models.classList.remove('hard');
        }
    });

    // Play sound illustration is clicked

    $figure.addEventListener('click', function (e) {
        sounds[games[index].sound].play();
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

        for (var a in wordLetters) {
            $li = document.createElement('li');
            $li.className = 'model';
            $li.dataset.letter = wordLetters[a];

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

        // Build Letters

        $letters.innerHTML = '';

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

    // Start Game

    setGame(index);
    setAnimation($html, 'started', false);
})();
