var routeUrl = "/leave-a-review";

var rating = 0;

function selectRating() {

    $("#rating-one").click(function() {

        $("#rating-one").css("color", "orange");
        $("#rating-two").css("color", "black");
        $("#rating-three").css("color", "black");
        $("#rating-four").css("color", "black");
        $("#rating-five").css("color", "black");

        rating = 1;

    })

    $("#rating-two").click(function() {

        $("#rating-one").css("color", "orange");
        $("#rating-two").css("color", "orange");
        $("#rating-three").css("color", "black");
        $("#rating-four").css("color", "black");
        $("#rating-five").css("color", "black");

        rating = 2;

        

    })

    $("#rating-three").click(function() {

        $("#rating-one").css("color", "orange");
        $("#rating-two").css("color", "orange");
        $("#rating-three").css("color", "orange");
        $("#rating-four").css("color", "black");
        $("#rating-five").css("color", "black");

        rating = 3;


    })

    $("#rating-four").click(function() {

        $("#rating-one").css("color", "orange");
        $("#rating-two").css("color", "orange");
        $("#rating-three").css("color", "orange");
        $("#rating-four").css("color", "orange");
        $("#rating-five").css("color", "black");

        rating = 4;


    })

    $("#rating-five").click(function() {

        $("#rating-one").css("color", "orange");
        $("#rating-two").css("color", "orange");
        $("#rating-three").css("color", "orange");
        $("#rating-four").css("color", "orange");
        $("#rating-five").css("color", "orange");

        rating = 5;


    })
}

$(document).ready(function() {

    selectRating();

    $("#review-form").submit(function(e) {
        e.preventDefault();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var comment = $("#review-comment").val();
        var image = $("#image").val();

        var data = {
            fname: fname,
            lname: lname,
            email: email, 
            comment: comment,
            rating: rating,
        }
    
        $.ajax({
    
            url: routeUrl,
            type: "POST",
            dataType: "json",
            data: data,
            success: function(res) {
                
                window.location.replace("/review");
                console.log(res);

            }
        })

    })

    

})