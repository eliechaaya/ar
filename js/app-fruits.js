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
        { img: 'img/fruits.png', color: '#a7f1ac',  word: '', sound: 'sounds/' },
        { img: 'img/item_g_101.png', color: '#ffcccc',  word: 'فراولة',   sound: 'sounds/fruits/fruits_s_01' },
		{ img: 'img/item_g_102.png', color: '#bdfac1',  word: 'إجاص',  sound: 'sounds/fruits/fruits_s_02' },
		{ img: 'img/item_g_103.png', color: '#fff8e2',  word: 'أناناس',   sound: 'sounds/fruits/fruits_s_03' },
		{ img: 'img/item_g_104.png', color: '#fff8e2',  word: 'موز',  sound: 'sounds/fruits/fruits_s_04' },
		{ img: 'img/item_g_105.png', color: '#ffcccc',  word: 'كرز',   sound: 'sounds/fruits/fruits_s_05' },
		{ img: 'img/item_g_106.png', color: '#ffcccc',  word: 'تفاح',    sound: 'sounds/fruits/fruits_s_06' },
		{ img: 'img/item_g_107.png', color: '#bdfac1',  word: 'بطيخ',   sound: 'sounds/fruits/fruits_s_07' },
		{ img: 'img/item_g_108.png', color: '#ffd6fa',  word: 'عنب', sound: 'sounds/fruits/fruits_s_08' },
		{ img: 'img/item_g_109.png', color: '#ffd6fa',  word: 'باذنجان',   sound: 'sounds/fruits/fruits_s_09' },
		{ img: 'img/item_g_110.png', color: '#ffcccc',  word: 'بندورة',   sound: 'sounds/fruits/fruits_s_10' },
		{ img: 'img/item_g_111.png', color: '#fff8e2',  word: 'ليمون',  sound: 'sounds/fruits/fruits_s_011' },
		{ img: 'img/item_g_112.png', color: '#ffc38d',  word: 'جزر',   sound: 'sounds/fruits/fruits_s_012' },
		{ img: 'img/item_g_113.png', color: '#ffc38d',  word: 'برتقال',    sound: 'sounds/fruits/fruits_s_013' },
		{ img: 'img/item_g_114.png', color: '#fbe5bd',  word: 'بطاطا',   sound: 'sounds/fruits/fruits_s_014' },
		{ img: 'img/item_g_115.png', color: '#ffd6fa',  word: 'رمان', sound: 'sounds/fruits/fruits_s_015' },
		{ img: 'img/item_g_116.png', color: '#ebffd5',  word: 'فطر',   sound: 'sounds/fruits/fruits_s_016' },
		{ img: 'img/item_g_117.png', color: '#ffcccc',  word: 'فجل',   sound: 'sounds/fruits/fruits_s_017' },
		{ img: 'img/item_g_118.png', color: '#eed9cb',  word: 'خس',  sound: 'sounds/fruits/fruits_s_018' },
		{ img: 'img/item_g_119.png', color: '#ffe6d4',  word: 'بصل',   sound: 'sounds/fruits/fruits_s_019' },
		{ img: 'img/item_g_120.png', color: '#e0e2f1',  word: 'ثوم',   sound: 'sounds/fruits/fruits_s_020' },
		{ img: 'img/item_g_121.png', color: '#fbe5bd',  word: 'خيار',   sound: 'sounds/fruits/fruits_s_021' },
		{ img: 'img/item_g_122.png', color: '#ffd6fa',  word: 'ذرة',   sound: 'sounds/fruits/fruits_s_022' }
		
		
		
        
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
        dice: new buzz.sound('sounds/dice'),
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
