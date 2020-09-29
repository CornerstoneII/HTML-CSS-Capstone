$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
      html: true,
      content: function() {
        return $('#popover-content').html();
      }
    });

    $(".dropdown-menu li a").click(function(){
      var selText = $(this).text();
      $(this).parents('.input-group-btn').find('.bs-dropdown-to-select').html('<span><i class="fa fa-caret-down" aria-hidden="true"></i></span> '+selText).dropdown('toggle');
      return false;
    });

    $('.slider').slick({
      centerMode: true,
      centerPadding: '20px',
      infinite: true,
      arrows: true,
      speed: 250,
      dots: false,
      responsive: [
          {
          breakpoint: 1440,
          settings: {
              slidesToShow: 4,
          }
          },
          {
          breakpoint: 769,
          settings: {
              slidesToShow: 4,
              centerPadding: '10px',
          }
          },
          {
          breakpoint: 703,
          settings: {
              slidesToShow: 4,
              centerPadding: '10px',
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              centerMode: false,
              arrows: false
          }
          }
      ]
  });
});