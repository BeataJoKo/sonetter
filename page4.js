AFRAME.registerComponent('play', {
        init: function () {
 var theAudio = document.querySelector('#soundHolder');
 var Play = document.querySelector('#play');
 var Pause = document.querySelector('#pause');
 var Stop = document.querySelector('#stop');
            this.el.addEventListener( 'click', function () {
            theAudio.components.sound.playSound();
            Play.setAttribute('visible', "false");
            Play.setAttribute('scale', "0 0");
            Pause.setAttribute('visible', "true");
            Pause.setAttribute('scale', "0.8 0.8");
            Stop.setAttribute('visible', "true");
          });
        }
      });

AFRAME.registerComponent('pause', {
        init: function () {
 var theAudio = document.querySelector('#soundHolder');
 var Pause = document.querySelector('#pause');
 var Play = document.querySelector('#play');
            Pause.addEventListener( 'click', function () {
            theAudio.components.sound.pauseSound();
            Pause.setAttribute('visible', "false");
            Pause.setAttribute('scale', "0 0");
            Play.setAttribute('visible', "true");
            Play.setAttribute('scale', "0.2 0.2");
        });
              }
      });

AFRAME.registerComponent('stop', {
        init: function () {
 var theAudio = document.querySelector('#soundHolder');
 var Play = document.querySelector('#play');
 var Pause = document.querySelector('#pause');
 var Stop = document.querySelector('#stop');
            Stop.addEventListener( 'click', function () {
            theAudio.components.sound.stopSound();
            Stop.setAttribute('visible', "false");
            Pause.setAttribute('visible', "false");
            Play.setAttribute('visible', "true");
            Play.setAttribute('scale', "0.2 0.2");
        });
  }
      });
