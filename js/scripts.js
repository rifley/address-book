
// back end business logic
//front end of calculator app

$(document).ready(function() {
	$("form#friends").submit(function (event){
		event.preventDefault();
		var nameInput = $("#name").val();
		var secretNameInput = $("#secretName").val();
		$("#friendList").append('<p class="clickable">'+nameInput+"</p>");

		$("#friendList").append("<li id="+nameInput+">"+secretNameInput+"</li>");
		// $("li").addClass ("showHide");

	});

	$(".clickable").click(function() {

    var targetFriend = "#" + $(this).text();
		console.log(targetFriend);

		$(targetFriend).toggle();

		});

	});
