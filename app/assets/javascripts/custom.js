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
  $('.menu-item, .logo, .arrow, .home-enter-btn, .social-link, .contact-email, .enter-btn').mouseenter(function(){
    $(this).fadeTo('medium', 0.6);
  });

  $('.menu-item, .logo, .arrow, .home-enter-btn, .social-link, .contact-email, .enter-btn').mouseleave(function(){
    $(this).fadeTo('medium', 1);
  });

  $('.piece-btn').mouseenter(function(){
    $(this).fadeTo('medium', 0.7);
  });

  $('.piece-btn').mouseleave(function(){
    $(this).fadeTo('medium', 0.5);
  });
});
