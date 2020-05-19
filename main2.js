 AFRAME.registerComponent('cursor-animator', {

init: function () {

//    document.getElementById("lamp").setAttribute('light', "intensity", "3");
 /*
 1:Videt hører farvers spil intelligible
 2:    at smage på ord og
     bogstaveligt i øvrigt
 3:           lad tanken om ordet være kort -
 4:føl musikken, så
 5:     bitter/sød med teksturens blødhed,
 6:          lappende toner med tungen
 7:              atomerne grundfarver
 8:                 røde gule blå, i skala
 9:                    kvarker rytmer grå -
10:lugten gerne mad eller lort
11:      hvid god/ond sort, følelser
12:            aroma af fristet punani hvor
13:  smagen har bid lig duften, lig cymbaler lydende
14:      [tcsh ja]   det pink lille kød
15:                  juice salt syrlig umami -
16:  nogle tænder på hun vil
17:   nogle på hun ikke -
18:    sensible psyker kilder
19:     de dyriske, intime blikke.*/

     var theVideo = document.querySelector('#fish');

            this.el.addEventListener( 'click', function () {
            this.setAttribute( 'geometry', 'primitive', "plane");
            this.setAttribute( 'scale', "0.7 0.7 0.7");
            this.setAttribute( 'position', "-1.15 0.15 4.141");
            theVideo.play();

         document.getElementById("ryba").setAttribute('animation__reverse', "autoplay", "true");
         document.getElementById("ryba").setAttribute('animation__hop', "autoplay", "true");
         document.getElementById("ryba").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("ryba").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("ryba").setAttribute('animation__show', "loop", "false");

         document.getElementById("type-1").setAttribute('animation__1', "autoplay", "true");
         document.getElementById("type-2").setAttribute('animation__2', "autoplay", "true");
         document.getElementById("type-3").setAttribute('animation__3', "autoplay", "true");
         document.getElementById("type-1").setAttribute('animation__4', "autoplay", "true");
         document.getElementById("type-4").setAttribute('animation__7', "autoplay", "true");
         document.getElementById("type-2").setAttribute('animation__5', "autoplay", "true");
         document.getElementById("type-3").setAttribute('animation__6', "autoplay", "true");
         document.getElementById("type-5").setAttribute('animation__8', "autoplay", "true");
         document.getElementById("type-6").setAttribute('animation__9', "autoplay", "true");
         document.getElementById("type-7").setAttribute('animation__10', "autoplay", "true");
         document.getElementById("type-8").setAttribute('animation__11', "autoplay", "true");
         document.getElementById("type-9").setAttribute('animation__12', "autoplay", "true");
         document.getElementById("type-4").setAttribute('animation__13', "autoplay", "true");
         document.getElementById("type-10").setAttribute('animation__19', "autoplay", "true");
         document.getElementById("type-5").setAttribute('animation__14', "autoplay", "true");
         document.getElementById("type-6").setAttribute('animation__15', "autoplay", "true");
         document.getElementById("type-7").setAttribute('animation__16', "autoplay", "true");
         document.getElementById("type-8").setAttribute('animation__17', "autoplay", "true");
         document.getElementById("type-9").setAttribute('animation__18', "autoplay", "true");
         document.getElementById("type-11").setAttribute('animation__20', "autoplay", "true");
         document.getElementById("type-12").setAttribute('animation__21', "autoplay", "true");
         document.getElementById("type-10").setAttribute('animation__22', "autoplay", "true");
         document.getElementById("type-13").setAttribute('animation__25', "autoplay", "true");
         document.getElementById("type-11").setAttribute('animation__23', "autoplay", "true");
         document.getElementById("type-12").setAttribute('animation__24', "autoplay", "true");
         document.getElementById("type-14").setAttribute('animation__26', "autoplay", "true");
         document.getElementById("type-15").setAttribute('animation__27', "autoplay", "true");
         document.getElementById("type-13").setAttribute('animation__28', "autoplay", "true");
         document.getElementById("type-16").setAttribute('animation__31', "autoplay", "true");
         document.getElementById("type-14").setAttribute('animation__29', "autoplay", "true");
         document.getElementById("type-15").setAttribute('animation__30', "autoplay", "true");
         document.getElementById("type-17").setAttribute('animation__32', "autoplay", "true");
         document.getElementById("type-18").setAttribute('animation__33', "autoplay", "true");
         document.getElementById("type-19").setAttribute('animation__34', "autoplay", "true");
         document.getElementById("type-16").setAttribute('animation__35', "autoplay", "true");
         document.getElementById("type-17").setAttribute('animation__36', "autoplay", "true"); document.getElementById("type-18").setAttribute('animation__37', "autoplay", "true");
         document.getElementById("type-19").setAttribute('animation__38', "autoplay", "true");

         document.getElementById("ryba").setAttribute('animation__show', "loop", "true");
          });

 }

      });
