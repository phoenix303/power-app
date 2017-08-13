$(document).ready(function() {
    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});


  $( "#login-submit" ).click(function( event ) {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url: 'http://localhost:5000/login/'+username+'/'+password ,
        type: 'POST',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
         alert(JSON.stringify(data));

         
          $('#login-message').html('<span>Login successful!</span>');
        },
        error: function() { $('#login-message').html('<span>The username ans password do not match. Please try again.</span>') },
    });




    event.preventDefault();
  });


});
