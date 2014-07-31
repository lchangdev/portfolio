$(document).ready(function(){
  $('.navbar-menu').hide();

  // $("#collapse-trigger").on("click", function() {
  //   var e = $(this);
  //   if (e.text() == e.data("text-swap")) {
  //     e.text(e.data("collapse"));
  //     $('.navbar-menu').show();
  //   } else {
  //     e.data("collapse", e.text());
  //     e.text(e.data("text-swap"));
  //     $('.right-navbar').hide();
  //   }
  // });
  $('.carousel').carousel({
    interval: 10000
  });
});
