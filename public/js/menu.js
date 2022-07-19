ackee_imgs = ["img/menu/ackee.jpg", "img/menu/ackee2.png"];

var index = 0;

var hover = false;
var opacity = 1;

$(".container").click(function(evt) {

    if (evt.target.id == "ackee-img")
        return;

    if ($("#menu-gallery").css("visibility") == "visible") {

        $("#menu-gallery").css("visibility", "hidden");
        $("body").css("overflow-y", "scroll");

    }


})


setInterval(function() {

    if (hover) {

        if (opacity < 1) {

            opacity += 0.1;

        }

    }

    else {

        

        if (opacity > 0.5) {

            opacity -= 0.1;

        }

    }

}, 1000 / 60)


$(".menu-img").hover(function() {

    hover = true

    $(this).css("opacity", String(opacity));
    

}, function() {

    hover = false;

    $(this).css("opacity", String(opacity));

    

})
