$(document).ready(function () {
   /* Header submenu */
   $('.header-submenu').parent().addClass('active-sub');
   /* Header Multilang */
   $('.multi-lang-item.active a').click(function () {
      $(this).parent().next('.multi-lang-item').css({'display':'block'});
   });
   $('.multi-lang-item a').click(function () {
       let lang = $(this).text();
       $('.multi-lang-item.active a').text(lang);
       if($(this).parent().hasClass('active')){
           console.log('changed')
       }else{
           $(this).parent().css({'display':'none'});
       }
   });
   /* Video slider */
    $('.video-slider').slick({
       arrows: true,
       draggable: true,
       infinite: true,
       swipeToSlide: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       swipe: true,
       prevArrow: '<button type="button" class="video-slider-left icofont-simple-left"></button>',
       nextArrow: '<button type="button" class="video-slider-right icofont-simple-right"></button>'
    });
});