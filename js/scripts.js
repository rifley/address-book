
// back end business logic
//front end of calculator app

$(document).ready(function() {
	$("form#friends").submit(function (event){
		event.preventDefault();
		var nameInput = $("#name").val();
		console.log(nameInput);
		var secretNameInput = $("#secretName").val();
		$("#friendList").append('<p class="clickable">'+nameInput+"</p>");

		$("#friendList").append("<li>"+secretNameInput+"</li>");
		$("li").addClass ("test");

	});

});
