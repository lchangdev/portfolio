$(document).ready(function(){
  $('.carousel').carousel({
    interval: 10000
  });

  $('.menu-btn').on('click', function(){
    var e = $(this);
    if (e.text() == e.data("text-swap")) {
      e.text(e.data(" "));
    } else {
      e.data(" ", e.text());
      e.text(e.data("text-swap"));
    }
  });
});
