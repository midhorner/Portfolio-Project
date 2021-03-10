$(function(){
  $(".navbar-toggler").click(function(){
    $(".bars").toggleClass("hidden");
    $(".close-icon").toggleClass("hidden");
  });
});

$(function() {
  $('.form-group :input')
  .focus(function() {
      $(this).prev('small').removeClass('hide');
    })
  .blur(function() {
    $(this).prev('small').addClass('hide');
  });
});