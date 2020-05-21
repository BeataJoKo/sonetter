     AFRAME.registerComponent('audiohandler', {

        init: function () {

        var theAudio = document.querySelector('#Sune');

            this.el.addEventListener( 'click', function () {
            this.setAttribute( 'geometry', 'primitive', "plane");
            this.setAttribute( 'scale', "0.7 0.7 0.7");
            this.setAttribute( 'position', "-0.965 0.15 4.141");
            theAudio.play();

            document.getElementById("lamp").setAttribute('light', "intensity", "3");


          });

        }

      });
