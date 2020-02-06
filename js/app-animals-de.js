
(function () {
    var games = [
        { img: 'img/animals.png', color: '#ccecfb',  word: '',   sound: 'sounds/sounds/animals/de/farm',
		caption:'',caption_Ar:'',voice:'' },
       
		{ img: 'img/mouse.png', color: '#ccecfb',    word: '',   sound: 'sounds/sounds/animals/de/maus' ,
		caption:'Maus',caption_Ar:'Maus \ud83d\udd0a',voice:'sounds/sounds/cries/mouse', },

		
		{ img: 'img/parrot.png', color: '#ccecfb',  word: '',    sound: 'sounds/sounds/animals/de/papagei' ,
		caption:'papagei',caption_Ar:'Papagei \ud83d\udd0a',voice:'sounds/sounds/cries/parrot'},
		
		{ img: 'img/cat.png', color: '#ccecfb',  word: 'Katze',  sound: 'sounds/sounds/animals/de/katze' ,
		caption:'Katze',caption_Ar:'Katze \ud83d\udd0a',voice:'sounds/sounds/cries/cat'  },
		
		
		
		{ img: 'img/turtle.png', color: '#ccecfb',  word: '',    sound: 'sounds/sounds/animals/de/schildkrote',caption:'Schildkr\u00f6te',caption_Ar:'Schildkr\u00f6te \ud83d\udd0a',voice:'sounds/sounds/cries/turtle'   },
		
		
					
        { img: 'img/fish.gif', color: '#ccecfb',  word: 'fish',  sound: 'sounds/sounds/animals/de/fisch',
		caption:'Fish',caption_Ar:'Fisch',voice:'sounds/sounds/cries/fish'  },
		
     	  
        
		
        { img: 'img/dog.gif', color: '#ccecfb',  word: 'dog',    sound: 'sounds/sounds/animals/de/hund',
		caption:'Hund',caption_Ar:'Hund \ud83d\udd0a' ,voice:'sounds/sounds/cries/dog' },
		
		{ img: 'img/horse.gif', color: '#ccecfb',  word: 'Pferd',   sound: 'sounds/sounds/animals/de/pferd',caption:'Pferd',caption_Ar:'Pferd \ud83d\udd0a',voice:'sounds/sounds/cries/horse'  },
		
        { img: 'img/donkey.png', color: '#ccecfb',  word: 'donkey',  sound: 'sounds/sounds/animals/de/esel',caption:'Esel',caption_Ar:'Esel \ud83d\udd0a' ,voice:'sounds/sounds/cries/donkey' },
		
		{ img: 'img/goat.png', color: '#ccecfb',  word: 'goat',      sound: 'sounds/sounds/animals/de/ziege',caption:'Ziege',caption_Ar:'ziege \ud83d\udd0a' ,voice:'sounds/sounds/cries/goat' },
		
		{ img: 'img/sheep.gif', color: '#ccecfb',  word: 'sheep',    sound: 'sounds/sounds/animals/de/schaf',caption:'Schaf',caption_Ar:'Schaf \ud83d\udd0a' ,voice:'sounds/sounds/cries/sheep' },
		
		{ img: 'img/chicken.png', color: '#ccecfb',  word: 'huhn', sound: 'sounds/sounds/animals/de/huhn',
		caption:'Huhn',caption_Ar:'Huhn \ud83d\udd0a' ,voice:'sounds/sounds/cries/chicken' },
		
      
		
        { img: 'img/cow2.gif', color: '#ccecfb',  word: 'cow',   sound: 'sounds/sounds/animals/de/kuh',
		caption:'Kuh',caption_Ar:'Kuh \ud83d\udd0a',voice:'sounds/sounds/cries/cow' },
		
     
		
		 { img: 'img/snake2.png', color: '#ccecfb',  word: 'snake',   sound: 'sounds/sounds/animals/de/schlange',caption:'Schlange',caption_Ar:'Schlange \ud83d\udd0a',voice:'sounds/sounds/cries/snake' },
		 
		 { img: 'img/fox.png', color: '#ccecfb',  word: 'fox',        sound: 'sounds/sounds/animals/de/fuchs' ,caption:'Fuchs',caption_Ar:'Fuchs \ud83d\udd0a', voice:'sounds/sounds/cries/fox'  },
		
		{ img: 'img/frog.png', color: '#ccecfb',  word: 'frog',       sound: 'sounds/sounds/animals/de/frosch' ,caption:'frog',caption_Ar:'Frosch \ud83d\udd0a', voice:'sounds/sounds/cries/frog'  },
		
		{ img: 'img/rabbit.png', color: '#ccecfb',  word: 'rabbit',   sound: 'sounds/sounds/animals/de/hase' ,caption:'hase',	caption_Ar:'Hase \ud83d\udd0a',voice:'sounds/sounds/cries/rabbit'  },
		
		{ img: 'img/Beaver.png', color: '#ccecfb',  word: 'beaver',   sound: 'sounds/sounds/animals/de/biber' ,caption:'Biber',	caption_Ar:'Biber \ud83d\udd0a' ,voice:'sounds/sounds/cries/beaver'  },
		
		{ img: 'img/panda.png', color: '#ccecfb',  word: 'panda', sound: 'sounds/sounds/animals/de/panda' ,
		caption:'panda', caption_Ar:'Panda \ud83d\udd0a', voice:'sounds/sounds/cries/panda'  },
		
		{ img: 'img/mole.gif', color: '#ccecfb',  word: 'mole',        sound: 'sounds/sounds/animals/de/maulwurf' ,caption:'Maulwurf',caption_Ar:'Maulwurf \ud83d\udd0a',voice:'sounds/sounds/cries/mole'  },
		
		{ img: 'img/crocodile.gif',color: '#ccecfb',word: '', sound:'sounds/sounds/animals/de/krokodil',
		 caption:'Krokodil', caption_Ar:'Krokodil \ud83d\udd0a',voice:'sounds/sounds/cries/Crocodile' },
		 
		{ img: 'img/iex11.png', color: '#ccecfb',  word: '',     sound: 'sounds/sounds/animals/de/giraffe',
		caption:'Giraffe',caption_Ar:'Giraffe \ud83d\udd0a',voice:'sounds/sounds/cries/giraffe'  },
		 
		{ img: 'img/elephant.gif', color: '#ccecfb',  word: '', sound: 'sounds/sounds/animals/de/elefant',caption:'Elefant',caption_Ar:'Elefant \ud83d\udd0a',voice:'sounds/sounds/cries/elephant'  },
		 
		{ img: 'img/bear.png', color: '#ccecfb',  word: 'bear',   sound: 'sounds/sounds/animals/de/Bar' ,
		 caption:'B\u00e4r',caption_Ar:'B\u00e4r \ud83d\udd0a',voice:'sounds/sounds/cries/bear'  },
		 
		{ img: 'img/lion.gif', color: '#ccecfb',  word: 'Lion', sound: 'sounds/sounds/animals/de/lowe',
		  caption:'L\u00f6we',caption_Ar:'L\u00f6we \ud83d\udd0a',voice:'sounds/sounds/cries/lion'},
		  
		{ img: 'img/monkey.gif', color: '#ccecfb',  word: 'affe',   sound: 'sounds/sounds/animals/de/affe' ,caption:'Affe',caption_Ar:'Affe \ud83d\udd0a',voice:'sounds/sounds/cries/monkey'  },
		 
		 
		{ img: 'img/wolf.png', color: '#ccecfb',  word: 'wolf',   sound: 'sounds/sounds/animals/de/wolf',
		caption:'Wolf',caption_Ar:'Wolf \ud83d\udd0a',voice:'sounds/sounds/cries/wolf' },
		
		
		{ img: 'img/duck.gif', color: '#ccecfb',  word: 'Duck',   sound: 'sounds/sounds/animals/de/ente',
		 caption:'Ente',caption_Ar:'Ente \ud83d\udd0a',voice:'sounds/sounds/cries/duck' },
		 
		{ img: 'img/owl.png', color: '#ccecfb',  word: 'owl',   sound: 'sounds/sounds/animals/de/eule' ,
		 caption:'Eule',caption_Ar:'Eule \ud83d\udd0a',voice:'sounds/sounds/cries/owl'},
		 
		 
		{ img: 'img/pigeon.gif', color: '#ccecfb',  word: 'pigon',    sound: 'sounds/sounds/animals/de/taube',caption:'Taube',caption_Ar:'Taube \ud83d\udd0a' ,voice:'sounds/sounds/cries/pigeon' },
		 
		 
		{ img: 'img/crow.png', color: '#ccecfb',  word: 'crow',   sound: 'sounds/sounds/animals/de/krahe' ,
		 caption:'Kr\u00e4he',caption_Ar:'Kr\u00e4he \ud83d\udd0a',voice:'sounds/sounds/cries/crow'},
		 
		 
		{ img: 'img/seagull.png', color: '#ccecfb',  word: 'seagull',   sound: 'sounds/sounds/animals/de/mowe' ,caption:'M\u00f6we',caption_Ar:'M\u00f6we \ud83d\udd0a',voice:'sounds/sounds/cries/seagull'},
		
		
		{ img: 'img/eagle.png', color: '#ccecfb',  word: 'eagle',   sound: 'sounds/sounds/animals/de/adler' ,caption:'Adler',caption_Ar:'Adler \ud83d\udd0a',voice:'sounds/sounds/cries/eagle'},
		
		
		{ img: 'img/ostrich.gif', color: '#ccecfb',  word: 'ostrich', sound: 'sounds/sounds/animals/de/Straus' ,caption:'Strau\u00df',caption_Ar:'Strau\u00df \ud83d\udd0a',voice:'sounds/sounds/ostrich'},
		
		
		{ img: 'img/bee.gif', color: '#ccecfb',  word: 'bee',         sound: 'sounds/sounds/animals/de/Biene',caption:'Biene',caption_Ar:'Biene \ud83d\udd0a' ,voice:'sounds/sounds/cries/Bee' },
		
		
		{ img: 'img/butterfly.gif', color: '#ccecfb',  word: 'butterfly',  sound: 'sounds/sounds/animals/de/schmetterling' ,caption:'Schmetterling',caption_Ar:'Schmetterling',voice:'sounds/sounds/cries/butterfly'},
		
		
		{ img: 'img/ant.png', color: '#ccecfb',  word: 'ant',   sound: 'sounds/sounds/animals/de/ameise' ,
		caption:'Ameise',caption_Ar:'Ameise',voice:'sounds/sounds/cries/ant'  },
		
		{ img: 'img/spider.gif', color: '#ccecfb',  word: 'spider',   sound: 'sounds/sounds/animals/de/spinne' ,caption:'Spinne',caption_Ar:'Spinne',voice:'sounds/sounds/cries/spider'  },
		
		
		
		{ img: 'img/snail.png', color: '#ccecfb',  word: 'snail',   sound: 'sounds/sounds/animals/de/schnecke' ,caption:'Schnecke',caption_Ar:'Schnecke',voice:'sounds/sounds/cries/snail'  },
		
		
		{ img: 'img/dolphin.png', color: '#ccecfb',  word: 'dolphin',   sound: 'sounds/sounds/animals/de/delfin' ,caption:'Delfin',caption_Ar:'Delfin \ud83d\udd0a',voice:'sounds/sounds/cries/dolphin'  },
		
		
		{ img: 'img/octopus.gif', color: '#ccecfb',  word: 'octopus',   sound: 'sounds/sounds/animals/de/tintenfisch' ,caption:'Tintenfisch',caption_Ar:'Tintenfisch',voice:'sounds/sounds/cries/octopus'  },
		
			
		{ img: 'img/seal.png', color: '#ccecfb',  word: 'seal',   sound: 'sounds/sounds/animals/de/siegel' ,caption:'Siegel',caption_Ar:'Siegel \ud83d\udd0a',voice:'sounds/sounds/cries/seal'  },
		
		{ img: 'img/whale.gif', color: '#ccecfb',  word: 'whale',   sound: 'sounds/sounds/animals/de/wal' ,caption:'Wal',caption_Ar:'Wal \ud83d\udd0a',voice:'sounds/sounds/cries/whale'  },
		
        
        
    ];
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
