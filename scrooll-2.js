 $(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        window.location.hash = hash;
      });
    }
  });
});

$(function() {
   $(window).scroll(function () {
       if ($(window).width() <= 560) {
           if ($(this).scrollTop() > 140) {
                $('article').addClass('changeColor')
            }
           if ($(this).scrollTop() < 140) {
                $('article').removeClass('changeColor')
            }
           if ($(this).scrollTop() > 3200) {
                $('article').removeClass('changeColor')
           }
         }
       if ($(window).width() < 560 <= 820) {
           if ($(this).scrollTop() > 140) {
                $('article').addClass('changeColor')
            }
           if ($(this).scrollTop() < 140) {
                $('article').removeClass('changeColor')
            }
           if ($(this).scrollTop() > 3400) {
                $('article').removeClass('changeColor')
           }
         }
       if ($(window).width() < 820 <= 1000) {
           if ($(this).scrollTop() > 360) {
                $('article').addClass('changeColor')
            }
           if ($(this).scrollTop() < 360) {
                $('article').removeClass('changeColor')
            }
           if ($(this).scrollTop() > 3800) {
                $('article').removeClass('changeColor')
           }
         }
       if ($(window).width() < 1000 <= 1200) {
           if ($(this).scrollTop() > 500) {
                $('article').addClass('changeColor')
            }
           if ($(this).scrollTop() < 500) {
                $('article').removeClass('changeColor')
            }
           if ($(this).scrollTop() > 3900) {
                $('article').removeClass('changeColor')
           }
         }
       if ($(window).width() < 1200 <= 1400) {
           if ($(this).scrollTop() > 500) {
                $('article').addClass('changeColor')
            }
           if ($(this).scrollTop() < 500) {
                $('article').removeClass('changeColor')
            }
           if ($(this).scrollTop() > 2600) {
                $('article').removeClass('changeColor')
           }
         }
   });
});
