     AFRAME.registerComponent('click-change', {

        init: function () {

        var theVideo = document.querySelector('#greenscreenvideo');
        var On = document.querySelector('#swich-on');
        var Off = document.querySelector('#swich-off');

            this.el.addEventListener( 'click', function () {
            theVideo.play();
            this.setAttribute('visible', "false");
            this.setAttribute('scale', "0 0");
            Off.setAttribute('visible', "true");
            Off.setAttribute('scale', "0.8 0.8");
            document.getElementById("lamp").setAttribute('light', "intensity", "3.48");
            document.getElementById("scene").emit("background.color-start");
            document.getElementById("text").emit("text.color-start");
            });

            Off.addEventListener( 'click', function () {
            theVideo.pause();
            theVideo.currentTime = 3;
            Off.setAttribute('visible', "false");
            Off.setAttribute('scale', "0 0");
            On.setAttribute('visible', "true");
            On.setAttribute('scale', "0.2 0.2");
            document.getElementById("lamp").setAttribute('light', "intensity", "0");
            document.getElementById("scene").emit("background.color-pause");
            document.getElementById("scene").setAttribute("background", "color", "#ffffff");
            document.getElementById("text").emit("text.color-pause");
            document.getElementById("text").setAttribute("text", "color", "#000000");
        });

        }

      });
