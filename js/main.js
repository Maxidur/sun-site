 // videobackground

 $(document).ready(function() {
    var videobackground = new $.backgroundVideo($('#bgVideo'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "video/",
      "filename": "cloud",
      "types": ["mp4","ogg","webm"],
      "preload": true,
      "autoplay": true,
      "loop": true
    });
  });

// top_menu

function showMenu(){

  $(".header_top_buttonMenu").click(function(){
    $(".header_menu_wrapper").show("slow");
  });

  $(".header_menu_button").click(function(){
    $(".header_menu_wrapper").hide("slow");
  })
};

showMenu();

// sliders

$(document).ready(function(){
  $(".owl-carousel.comments_slider").owlCarousel({
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      800: {
        items: 3
      }
    }
  });
});

$(document).ready(function(){
  $(".owl-carousel.guidance_slider").owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        margin: 10
      },

      600: {
        items: 2,
        margin: 20,
        dots: false
      },

      800: {
        items: 3,
        margin: 20
      }
    }
  });
});

// scrolling

$(document).ready(function() {
  $(".header-aroowDown").on("click", function(event) {
    event.preventDefault();

    var id = $(this).attr("href");
    var top = $(id).offset().top;

    $("body,html").animate({scrollTop: top}, 1500);
  });
});

