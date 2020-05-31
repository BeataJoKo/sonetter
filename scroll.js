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
      if ($(this).scrollTop() > 140) {
         $('article').addClass('changeColor')
      }
      if ($(this).scrollTop() < 140) {
         $('article').removeClass('changeColor')
      }
      if ($(this).scrollTop() > 3200) {
         $('article').removeClass('changeColor')
      }
   });
});
