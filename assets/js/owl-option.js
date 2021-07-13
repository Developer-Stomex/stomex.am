

$(document).ready(function () {

   $("#banner-slider").owlCarousel({

      // Slider One Full Width
      loop: true,
      navigation: true, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      dots: true,
      items: 1,
      responsive: {
         768: {
            // dots: false,
         }
      }
   });

   //  Slider Shops item 3
   $("#shops").owlCarousel({
      loop: true,
      margin: 172,
      items: 3,
      nav: false,
      dots: false,
      responsiveClass: true,
      slideSpeed: 400,
      paginationSpeed: 200,
      responsive: {
         0: {
            items: 1
         },
         768: {
            dots: true,
            margin: 34,
            items: 2
         },
         1000: {
            items: 3
         }
      }
   })
   //  Parther Companys Logo
   $("#companys-logo").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      responsive: {
         0: {
            dots: false,
            items: 3
         },

         600: {
            dots: false,
            items: 5
         },
         768: {
            dots: false,
         },
         1000: {
            dots: false,
            items: 11
         }
      }
   })
});
const selector = $('#shops');
$('.my-next-button').click(function () {
   selector.trigger('next.owl.carousel');
});
$('.my-prev-button').click(function () {
   selector.trigger('prev.owl.carousel');
});