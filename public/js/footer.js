
$(document).ready(function() {

    $("#newsletter-button").click(function() {

        var email = $("#newsletter-input").val();

        $.ajax({

            url: "/newsletter",
            dataType: "json",
            data: {email: email},
            type: "POST",

        })

    })

})