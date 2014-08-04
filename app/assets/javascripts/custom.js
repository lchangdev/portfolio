$(document).ready(function(){

  $('.menu-btn').on('click', function(){
    var e = $(this);
    if (e.text() == e.data("text-swap")) {
      e.text(e.data(" "));
    } else {
      e.data(" ", e.text());
      e.text(e.data("text-swap"));
    }
  });

  // buttons
  $('.menu-item, .logo').mouseenter(function(){
    $(this).fadeTo('medium', 0.6);
  });

  $('.menu-item, .logo').mouseleave(function(){
    $(this).fadeTo('medium', 1);
  });
});
