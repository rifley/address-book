
// back end business logic
//front end of calculator app

$(document).ready(function() {
	$("form#appointment").submit(function (event){
		event.preventDefault();
		var firstNameInput = $("#firstName").val();
		var lastNameInput = $("#lastName").val();
		var whyHereInput = $("#whyHere").val();
		var appointmentDateInput = $("#appointmentDate").val();
		var startTimeInput = $("#startTime").val();
		var endTimeInput = $("#endTime").val();
		$(".output").show();
		$("#outputText").text(firstNameInput+" "+lastNameInput+", "+"your appointment on "+appointmentDateInput+" starting at "+startTimeInput+" and ending at "+endTimeInput+" is confirmed. Thank you!");

	});

});
