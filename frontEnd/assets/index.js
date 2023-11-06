$(document).ready(function(){
	// Activate tooltip
	// $('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});


    // on submit add data
    $("#submitEmployeeData").submit(function (e) {
       
        e.preventDefault(); // Prevent the default form submission

        // Serialize the form data
        // var oEmployeeFormData = $(this).serialize();

        var oEmployeeFormData = new FormData();

        var sEmployeeName = $('#addEmploreeNameID').val();
        var sEmployeeEmail = $('#addEmploreeEmailID').val();
        var sEmployeeAddress = $('#addEmployeeAddressID').val();
        var sEmployeePhone = $('#addEmployeePhoneID').val();

        oEmployeeFormData.append("sEmployeeName", sEmployeeName);
        oEmployeeFormData.append("sEmployeeEmail", sEmployeeEmail);
        oEmployeeFormData.append("sEmployeeAddress", sEmployeeAddress);
        oEmployeeFormData.append("sEmployeePhone", sEmployeePhone);

        // Send the data to the server using AJAX
        $.ajax({
            type: "POST",
            url: "http://localhost/A_PRACTICE/API_project/API_CHATGPT/backEnd/products", // Replace with your API endpoint
            // data: JSON.stringify(oEmployeeFormData),
            data: oEmployeeFormData,
            // contentType: "application/json",
            contentType: false,
            processData: false,
            // asyn: true,
            success: function(response) {
                return false
                $("#message").html("Product created successfully.");
            },
            error: function(xhr, status, error) {
                $("#message").html("Error: " + error);
            }
        });



        // $.ajax({
        //     url: 'apiv2/patient/update-some-fields/',
        //     type: 'POST',
        //     contentType: false,
        //     cache: false,
        //     processData: false,
        //     data: patientData,
        //     async: false,
        //     headers: getAjaxAuthHeaders(),
        //     success: function() {
        //         generate("success", "Patient Details Updated");
        //     },
        //     error: function(jqXHR, textStatus, errorThrown) {
        //         console.log(errorThrown);
        //     }
        // })


    });


});