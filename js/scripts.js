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

function cateredEvent() {
  $("#eventsButtons").toggleClass("hidden");
  $(".catered-event").toggleClass("hidden");
  $("#typeOfEvent").toggleClass("hidden");
}

$(function(){
  $("#cateringButton").click(cateredEvent);
  $("#hostingButton").click(hostedEvent);
});

function hostedEvent() {
  $("#eventsButtons").toggleClass("hidden");
  $(".hosted-event").toggleClass("hidden");
  $("#typeOfEvent").toggleClass("hidden");
}

$(function(){
  $("#catered-choice").click(cateredEvent);
  $("#hosted-choice").click(hostedEvent);
});

$(function(){
  $('input[name="rentingRadios"]').click(function(){
    let radioValue = $('input[name="rentingRadios"]:checked').val();
    if (radioValue === "yes") {
      $(".size-warning").removeClass("hidden");
    } else {
      $(".size-warning").addClass("hidden");
    }
  });
});

$(function(){
  $('input[name="cateringRadios"]').click(function(){
    let radioValue = $('input[name="cateringRadios"]:checked').val();
    if (radioValue === "on-site") {
      $("#cateringNeeds").removeClass("hidden");
    } else {
      $("#cateringNeeds").addClass("hidden");
    }
  });
});