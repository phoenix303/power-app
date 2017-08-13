$(document).ready(function() {
  $.ajax({
      url: 'http://localhost:5000/event',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(data) {
      //  alert(JSON.stringify(data));

        var dataColumn ="";

        for(var i in data) {
          dataColumn += '<a href="#" class="list-group-item"><div class="media col-md-3"><figure class="pull-left"><img class="media-object img-rounded img-responsive" src="images/2.jpg"> </figure> </div><div class="col-md-6"><h4 class="list-group-item-heading">' + data[i].name + ' </h4><p class="list-group-item-text">'  + data[i].description + '</p></div><div class="col-md-3 text-center"><button type="button" id="enroll" class="btn btn-primary btn-lg btn-block">Enroll Now!</button></div></a>';

        }
        $('#eventList').append(dataColumn);

        $('#enroll').on('click', function() {
          //alert('enroll');
            location.href = "///home/divya/power-app/login.html#";
        });

      },
      error: function() { alert('Failed!'); },
  });



  $('#search-button').on('click', function() {
    var eventname = $('#search-input').val();

    // Serach by event name
    $.ajax({
        url: 'http://localhost:5000/event?name='+eventname,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
        //  alert(JSON.stringify(data));
          var dataColumn ="";

          for(var i in data) {
            dataColumn += '<a href="#" class="list-group-item"><div class="media col-md-3"><figure class="pull-left"><img class="media-object img-rounded img-responsive" src="images/2.jpg"> </figure> </div><div class="col-md-6"><h4 class="list-group-item-heading">' + data[i].name + ' </h4><p class="list-group-item-text">'  + data[i].description + '</p></div><div class="col-md-3 text-center"><a href="aboutUs.html"><button type="button" class="btn btn-primary btn-lg btn-block">Enroll Now!</button></a></div></a>';
          }
          $('#eventList').html(dataColumn);

        },
        error: function() { alert('Failed!'); },
    });

  })

  // table filter index.html
  $('.star').on('click', function () {
    $(this).toggleClass('star-checked');
  });

  $('.ckbox label').on('click', function () {
    $(this).parents('tr').toggleClass('selected');
  });

  $('.btn-filter').on('click', function () {
    var $target = $(this).data('target');
    if ($target != 'all') {
      $('.table tr').css('display', 'none');
      $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
    } else {
      $('.table tr').css('display', 'none').fadeIn('slow');
    }
  });

} );
