     AFRAME.registerComponent('click-change', {

        init: function () {

            var theVideo = document.querySelector('#greenscreenvideo');

        var COLOR = [
            "#ffffff",
            "#000000"
        ];

        var ReverseCOLOR = [
            "#000000",
            "#ffffff"
        ];

        var PRIMITIVE = [
            "plane",
            "triangle"
        ];

        var SCALE = [
            "0.7 0.7 0.7",
            "0.2 0.2 0.2"
        ];

        var POSITION = [
            "-0.965 0.15 4.141",
            "-0.935 0.15 4.141"
        ];

        var LIGHT = [
            "2.48",
            "0"
        ];

          var i = 0;

            this.el.addEventListener( 'click', function () {
            this.setAttribute( 'geometry', 'primitive', "plane");
            this.setAttribute( 'scale', "0.7 0.7 0.7");
            this.setAttribute( 'position', "-0.965 0.15 4.141");
            theVideo.play();
            document.getElementById("text").setAttribute('text', 'color', COLOR[ i++ % COLOR.length ]);
            document.getElementById("lamp").setAttribute('light', "intensity", LIGHT[ i++ % LIGHT.length ]);
            document.getElementById("scene").setAttribute('background', "color", ReverseCOLOR[ i++ % ReverseCOLOR.length ]);

          });

        }

      });
