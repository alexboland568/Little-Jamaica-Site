ackee_imgs = ["img/menu/ackee.jpg", "img/menu/ackee2.png"];

var index = 0;

var hover = 100;

$(".container").click(function(evt) {

    if (evt.target.id == "ackee-img")
        return;

    if ($("#menu-gallery").css("visibility") == "visible") {

        $("#menu-gallery").css("visibility", "hidden");
        $("body").css("overflow-y", "scroll");

    }


})

$(".menu-img").hover(function() {

    $(this).attr("opacity", "0.5")

})

// $("#ackee-img").click(function() {

//     if ($("#menu-gallery").css("visibility") == "hidden") {

//         $("#menu-gallery").load("shtml/ackee.shtml");

//         $("#menu-gallery").css("visibility", "visible");

//         $("body").css("overflow-y", "hidden");

//     }


// })

function scrollGallery(item) {

    setInterval(function() {

        console.log(index);

        

        if (item == "ackee") {

            $("#menu-gallery-img").attr("src", ackee_imgs[index]);

        }

        if (index == ackee_imgs.length - 1)
        index = 0; 

        index += 1;

        
        


    }, 3000);
    

}