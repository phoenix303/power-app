$(document).ready(function() {
  $.ajax({
      url: 'http://localhost:5000/event',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(data) {
        alert(JSON.stringify(data));

        var table = "";

        table += "<thead><tr><th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start date</th><th>Salary</th></tr></thead>";
        for(var i in data) {
          console.log(JSON.stringify(data[i]));
          table += "<tr><td>"+ data[i].name+"</td><td>"+ data[i].description +"</td><td>"+ data[i].dateTime +"</td><td>"+data[i].location+"</td><td>"+ data[i].website+"</td></tr>"
        }
        $('#example').append(table);
         $('#example').DataTable();

      },
      error: function() { alert('Failed!'); },
  });


} );
