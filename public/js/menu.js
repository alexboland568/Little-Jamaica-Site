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

        if (opacity > 0.5) {

            opacity -= 0.1;

        }

    }

    else {

        if (opacity < 1) {

            opacity += 0.1;

        }

    }

}, 1000 / 60)


$(".menu-img").hover(function() {

    hover = true
    

}, function() {

    hover = false;

    

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