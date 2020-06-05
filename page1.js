AFRAME.registerComponent('cursor-animator', {
init: function () {
     var theVideo = document.querySelector('#raven');
     var Video = document.querySelector('#raven-flip');
     var On = document.querySelector('#on1');
     var Off = document.querySelector('#off1');

            this.el.addEventListener( 'click', function () {
            this.setAttribute('visible', "false");
            this.setAttribute('scale', "0 0");
            Off.setAttribute('visible', "true");
            Off.setAttribute('scale', "0.8 0.8");
            theVideo.play();
            Video.play();


         document.getElementById("fly-0").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-1").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-2").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-3").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-4").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-5").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-6").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-7").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-8").setAttribute('animation__turn', "autoplay", "true");
         document.getElementById("fly-0").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-1").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-2").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-3").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-4").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-5").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-6").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-7").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("fly-8").setAttribute('animation__hide', "autoplay", "true");
         document.getElementById("global-text").setAttribute('animation', "autoplay", "true");
          });
        }
      });

AFRAME.registerComponent('cursor-hold', {
        init: function () {
    Off.addEventListener( 'click', function () {

        });
 }

      });
