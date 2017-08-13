$(document).ready(function() {
  $.ajax({
      url: 'http://localhost:5000/event',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(data) {
      //  alert(JSON.stringify(data));

        var table = "";
        table += "<thead><tr><th>Event name</th><th>Description</th><th>Date and Time</th><th>Location</th><th>website</th></thead>";
        for(var i in data) {
          console.log(JSON.stringify(data[i]));
          table += "<tr><td>"+ data[i].name+"</td><td>"+ data[i].description +"</td><td>"+ data[i].dateTime +"</td><td>"+data[i].location+"</td><td>"+ data[i].website+"</td></tr>"
        }
        $('#example').append(table);
         $('#example').DataTable();

      },
      error: function() { alert('Failed!'); },
  });

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
