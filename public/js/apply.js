var myUrl = "/applicant";


$(document).ready(function() {

    $("#apply").submit(function(e) {

        var fname = $("#first-name").val();
        var lname = $("#last-name").val();
        var age = $("#age").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var cityStateZip = $("#city-state-zip").val();
        var position = $("#position").val();
        var where = $("#where").val();
        var why = $("#why").val();
        var whatStandout = $("#what-standout").val();
        var workTeammates = $("#work-teammates").val();
        var workCustomers = $("#work-customers").val();
        var workEnvironment = $("#work-environment").val();
        var availability = $("#availability").val();
        var desiredWage = $("#desired-wage").val();
        var whenStart = $("#when-start").val();
        
        var applicationData = {
            fname: fname, 
            lname: lname, 
            age: age,
            email: email,
            address: address,
            cityStateZip: cityStateZip,
            position: position,
            where: where,
            why: why,
            whatStandout: whatStandout,
            workTeammates: workTeammates,
            workCustomers: workCustomers,
            workEnvironment: workEnvironment,
            availability: availability,
            desiredWage: desiredWage,
            whenStart: whenStart
        }

        //e.preventDefault(e);

        $.ajax({

            // contentType: "application/json",
            type: "POST",
            url: myUrl,
            dataType: "json",
            data: applicationData,
            

        })

    })



})