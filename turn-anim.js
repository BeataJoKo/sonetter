     AFRAME.registerComponent('click-change', {

        init: function () {

            this.el.addEventListener( 'click', function () {
            this.setAttribute( 'geometry', 'primitive', "plane");
            this.setAttribute( 'scale', "0.7 0.7 0.7");
            this.setAttribute( 'position', '-0.965 0.15 4.141');
            document.getElementById("text").setAttribute('text', 'color', "#ffffff");
            document.getElementById("lamp").setAttribute('light', "intensity", "2.48");
            document.getElementById("greenscreenvideo").setAttribute('autoplay', "true");
            document.getElementById("scene").setAttribute('background', "color", "#000000");

          });


        }

      });
