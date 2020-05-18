 AFRAME.registerComponent('click-change', {

init: function () {

//	var wawe = document.getElementsByClassName("mmm");
    var ocean = document.getElementById("Mgrid");

//    document.getElementById("lamp").setAttribute('light', "intensity", "3");

    var wawe = document.createElement('a-obj-model');
	wawe.className = "mmm";
    wawe.src = "#m-obj";
    wawe.scale = "0.0075 0.0075 0.005";
    wawe.mtl = "#m-mtl";
    wawe.setAttribute('material', "cloro", "#000");
 //    wawe.object3D.position.set(1, 2, 3);
//    wawe.object3D.position.x += 5;
//    wawe.object3D.position.multiplyScalar(5);
 //   ocean.appendChild(wawe);

     var theVideo = document.querySelector('#fish');

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
            document.getElementById("lamp").setAttribute('light', "intensity", LIGHT[ i++ % LIGHT.length ]);;
       //     document.getElementById("fish").setAttribute('animation', "autoplay", "true");



          });

 }

      });
