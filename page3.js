AFRAME.registerComponent('cursor-animator', {
init: function () {
     var theVideo = document.querySelector('#fish');
     var On = document.querySelector('#on');
     var Off = document.querySelector('#off');

            this.el.addEventListener( 'click', function () {
            this.setAttribute('visible', "false");
            this.setAttribute('scale', "0 0");
            Off.setAttribute('visible', "true");
            Off.setAttribute('scale', "0.8 0.8");
            theVideo.play();

         document.getElementById("ryba").setAttribute('animation__reverse', "autoplay", "true");
         document.getElementById("ryba").setAttribute('animation__hop', "autoplay", "true");
         document.getElementById("ryba").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("ryba").setAttribute('animation__hide', "autoplay", "true");

         document.getElementById("type-1").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-2").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-3").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-1").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-4").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-2").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-3").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-5").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-6").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-7").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-8").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-9").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-4").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-10").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-5").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-6").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-7").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-8").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-9").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-11").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-12").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-10").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-13").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-11").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-12").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-14").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-15").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-13").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-16").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-14").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-15").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-17").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-18").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-19").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type-16").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-17").setAttribute('animation__out', "autoplay", "true"); document.getElementById("type-18").setAttribute('animation__out', "autoplay", "true");
         document.getElementById("type-19").setAttribute('animation__out', "autoplay", "true");
          });
        }
      });

AFRAME.registerComponent('cursor-hold', {
init: function () {
    Off.addEventListener( 'click', function () {
            theVideo.pause();
            theVideo.currentTime = 0;

        });
 }

      });
