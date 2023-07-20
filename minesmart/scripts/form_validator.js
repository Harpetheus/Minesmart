/* Form validation attempt */


$(document).ready(function(  ){
	
	
	$("#submit").click(function(event){
	
		var username = $("#username").val();
		var password = $("#password").val();
		
		
		
		var errorsDetected = false; 
		var messages= "<fieldset><legend>Errors:</legend>";
		
		
		if(username.trim().length == 0){
			messages += "<p>The username field cannot be left empty</p>";
			$("#username").attr("class", "error_input");
			errorsDetected = true;
		}else{
			$("#username").attr("class", "");
		}


		if(password.trim().length == 0){
			messages += "<p>The password field cannot be left empty</p>";
			$("#password").attr("class", "error_input");
			errorsDetected = true;
		}else{
			$("#password").attr("class", "");
		}	
		
		
		
			var usernameRegularExpression = /^[Aa]0[0-9]{7}$/;
			
			if(usernameRegularExpression.test(username)){
				
				$("#username").attr("class", "");
			}else{
				
				messages += "Required username number format: A0nnnnnn";
				$("#username").attr("class", "error_input");
				errorsDetected = true;
			}			
			
		
	

		
		
		if( errorsDetected == true ){
			messages += "<p>Please try again...</p>";
			messages += "</fieldset>";
			
			$("#message").html(messages);

			event.preventDefault();	
		}else{
			
		}
		
		
		
	});
	
});