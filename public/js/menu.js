$(".container").click(function(evt) {

    if (evt.target.id == "ackee-img")
        return;

    if ($("#menu-gallery").css("visibility") == "visible") {

        $("#menu-gallery").css("visibility", "hidden");
        $("body").css("overflow-y", "scroll");

    }


})

$("#ackee-img").click(function() {

    if ($("#menu-gallery").css("visibility") == "hidden") {

        $("#menu-gallery").load("shtml/ackee.shtml");

        $("#menu-gallery").css("visibility", "visible");

        $("body").css("overflow-y", "hidden");

    }


})

