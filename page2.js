AFRAME.registerComponent('cursor-animator', {
init: function () {
     var On = document.querySelector('#on1');
     var Off = document.querySelector('#off1');

            this.el.addEventListener( 'click', function () {
            this.setAttribute('visible', "false");
            this.setAttribute('scale', "0 0");
            Off.setAttribute('visible', "true");
            Off.setAttribute('scale', "0.8 0.8");

         document.getElementById("type1").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type2").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type3").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type4").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type5").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type6").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type7").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type8").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type9").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type10").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type11").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type12").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type13").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type14").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type15").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type16").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type17").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type18").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type19").setAttribute('animation__in', "autoplay", "true");
         document.getElementById("type20").setAttribute('animation__in', "autoplay", "true");

         document.getElementById("type1").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type2").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type3").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type4").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type5").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type6").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type7").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type8").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type9").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type10").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type11").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type12").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type13").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type14").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type15").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type16").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type17").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type18").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type19").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("type20").setAttribute('animation__turn', "autoplay", "true");

         document.getElementById("type1").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type2").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type3").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type4").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type5").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type6").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type7").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type8").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type9").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type10").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type11").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type12").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type13").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type14").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type15").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type16").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type17").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type18").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type19").setAttribute('animation__fall', "autoplay", "true");
         document.getElementById("type20").setAttribute('animation__fall', "autoplay", "true");
          });
        }
      });

AFRAME.registerComponent('cursor-hold', {
        init: function () {
    Off.addEventListener( 'click', function () {

        });
 }

      });
