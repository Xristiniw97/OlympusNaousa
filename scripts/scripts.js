

$(document).ready(function() {




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


  


})






