     AFRAME.registerComponent('audiohandler', {

        init: function () {

        var theAudio = document.querySelector('[sound]');
        var Pause = document.querySelector('#pause');
        var Stop = document.querySelector('#stop');
        var Play = document.querySelector('#play');

            this.el.addEventListener( 'click', function () {
            theAudio.components.sound.playSound();
            Play.setAttribute('visible', "false");
            Play.setAttribute('scale', "0 0");
            Pause.setAttribute('visible', "true");
            Pause.setAttribute('scale', "0.8 0.8");
            Stop.setAttribute('visible', "true");
          });

            Pause.addEventListener( 'click', function () {
            theAudio.components.sound.pauseSound();
            Pause.setAttribute('visible', "false");
            Pause.setAttribute('scale', "0 0");
            Play.setAttribute('visible', "true");
            Play.setAttribute('scale', "0.2 0.2");
        });

            Stop.addEventListener( 'click', function () {
            theAudio.components.sound.stopSound();
            Stop.setAttribute('visible', "false");
            Pause.setAttribute('visible', "false");
            Play.setAttribute('visible', "true");
            Play.setAttribute('scale', "0.2 0.2");
        });
        }

      });
