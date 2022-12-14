ackee_imgs = ["img/menu/ackee.jpg", "img/menu/ackee2.png"];

var index = 0;


$(".container").click(function(evt) {

    if (evt.target.id == "ackee-img")
        return;

    if ($("#menu-gallery").css("visibility") == "visible") {

        $("#menu-gallery").css("visibility", "hidden");
        $("body").css("overflow-y", "scroll");

    }


})


$(".menu-img").hover(function() {

    $(this).css("opacity", "0.5");
    

}, function() {

    $(this).css("opacity", "1");

    

})
