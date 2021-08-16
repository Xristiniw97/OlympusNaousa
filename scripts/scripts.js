$(document).ready(function() {

  var isMobile = window.matchMedia("only screen and (max-width: 767px)");
    if (!isMobile.matches) {
        var $item = $("#bgCarouselSlider .carousel-item");
        var $wHeight = $(window).height();
        $item.eq(0).addClass("active");
        $item.height($wHeight);
        $item.addClass("full-screen");
        $(window).on("resize", function () {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

    // bgCarouselSlider
    $("#bgCarouselSlider").carousel({
        interval: 5000,
        pause: false
    });


  /*Scroll to top*/
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
  $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
  });
  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
  }); 


  $(function(){
    $('.offersCarousel').owlCarousel({
      smartSpeed: 300,
      loop: false,
      responsiveClass: true,
      margin:0,
      nav: false,
      navText: ["", ""],
      dots: false,
      items: 1,
      onInitialized:counter,
      onTranslated:counter,
      responsive: {
      767: {
        nav: true,
      }}
    });

      function counter(event) {
      var items = event.item.count;
      var item = event.item.index + 1;
      if(item<10) {
        item = "0"+item;
      }
      if(items<10) {
        items = "0"+items;
      }
      $('#counter').html(item+ "  /  "+items);
      }
    });

     
    //MENU
    $( ".openMenu" ).click(function() {
      $( "#navbar").css("height", "100vh");
      $( "body").css("overflow", "hidden");
      $("header").addClass('menuHeader');
    });
    $( ".closeMenu" ).click(function() {
      $( "#navbar").css("height", "0");
      $( "body").css("overflow", "auto");
      $( "header").css("transition-duration", "1s");
      $("header").removeClass('menuHeader');
    });

    $(".carouselBtn").click(function() {
      $(".overlay").css("filter","none");
    });


    $(".carouselBtn").mouseenter(function() {
      $(".overlay").css("filter","none");
    });
   
    $(".carouselBtn").mouseleave(function() {
      $(".overlay").css("filter"," grayscale(80%)");
    });


    $(window).on("scroll touchmove", function () {
      $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
  });
})






