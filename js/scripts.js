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

  $('#shopModal').on('show.bs.modal', function (event) {
    const trigger = $(event.relatedTarget);
    let type = trigger.data('type');
    let imageSource = trigger.find('img').attr('src');
    let title = trigger.find('.card-title').text();
    const modal = $(this);
    modal.find('#modalImage').html(`<img src="${imageSource}" class="shop-img img-fluid"></img`);
    modal.find('.modal-title').text(title);
    if (type !== 'shirt') {
      modal.find('.shirt-sizes').addClass('hidden');
      $('#shopQuantity').on('click', function() {
        let quantity = $('#shopQuantity').val();
        $('.total-cost').html(`$${((quantity * 18.00) * 1.07).toFixed(2)}`);
      })
    } else {
      modal.find('.shirt-sizes').removeClass('hidden');
      $('#shopQuantity').on('click', function() {
        let quantity = $('#shopQuantity').val();
        $('.total-cost').html(`$${((quantity * 16.00) * 1.07).toFixed(2)}`);
      })
    }
  });

  $('.modal').on('hide.bs.modal', function () {
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);
    $('.total-cost').html('');
    $('#shopSize').val($('#shopSize option:first').val());
    $('#resPartySize').val($('#resPartySize option:first').val());
    $('#resStartTime').val($('#resStartTime option:first').val());
    $('#cateredStartTime').val($('#cateredStartTime option:first').val());
    $('#hostedType').val($('#hostedType option:first').val());
    $('#hostedStartTime').val($('#hostedStartTime option:first').val());
    $('#hostedEndTime').val($('#hostedEndTime option:first').val());
    $('#careersPosition').val($('#careersPosition option:first').val());
    if ($("#eventsButtons").hasClass("hidden")) { $("#eventsButtons").removeClass("hidden"); }
    if ($("#typeOfEvent").hasClass("hidden")) { $("#typeOfEvent").removeClass("hidden"); }
    if (!$(".catered-event").hasClass("hidden")) { $(".catered-event").addClass("hidden"); }
    if (!$(".hosted-event").hasClass("hidden")) { $(".hosted-event").addClass("hidden"); }
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

function clearForms() {
  $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
  $(':checkbox, :radio').prop('checked', false);
  $('select').val($('select option:first').val());
  $('.total-cost').html('');
}

