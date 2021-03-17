$(function(){
  $(".navbar-toggler").on("click", function(){
    $(".bars").toggleClass("hidden");
    $(".close-icon").toggleClass("hidden");
  });

  $('.form-group :input')
  .on("focus", function() {
      $(this).prev('small').removeClass('hide');
    })
  .on("blur", function() {
    $(this).prev('small').addClass('hide');
  });
  
  $("#cateringButton").on("click", cateredEvent);
  $("#hostingButton").on("click", hostedEvent);

  $("#cateredClose").on("click", cateredEvent);
  $("#hostedClose").on("click", hostedEvent);

  $('input[name="rentingRadios"]').on("click", function(){
    let radioValue = $('input[name="rentingRadios"]:checked').val();
    if (radioValue === "yes") {
      $(".size-warning").removeClass("hidden");
    } else {
      $(".size-warning").addClass("hidden");
    }
  });

  $('input[name="cateringRadios"]').on("click", function(){
    let radioValue = $('input[name="cateringRadios"]:checked').val();
    if (radioValue === "on-site") {
      $("#cateringNeeds").removeClass("hidden");
    } else {
      $("#cateringNeeds").addClass("hidden");
    }
  });
});


function cateredEvent() {
  $("#eventsButtons").toggleClass("hidden");
  $(".catered-event").toggleClass("hidden");
  $("#typeOfEvent").toggleClass("hidden");
}

function hostedEvent() {
  $("#eventsButtons").toggleClass("hidden");
  $(".hosted-event").toggleClass("hidden");
  $("#typeOfEvent").toggleClass("hidden");
}

