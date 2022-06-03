var url = "/contact-us";

$(document).ready(function() {

    $("#contact-form").submit(function() {

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var comment = $("#comment").val();

        var data = {
            fname: fname,
            lname: lname, 
            email: email,
            comment: comment
        };

        $.ajax({

            url: url,
            dataType: "json",
            data: data,
            type: "POST"

        });

    })

})