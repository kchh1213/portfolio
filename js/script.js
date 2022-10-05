$(document).ready(function () {
    console.clear();

    $(window).scroll(function () {
        let scroll = $(this).scrollTop();

        if (scroll > 2000) {
            $(".skills").addClass("active");
        }
    });

    $(".arrow-box").click(function () {
        window.scrollTo({ left: 0, top:20000, behavior: "smooth" });
    })

    $(".home").click(function () {
        window.scrollTo({ left: 0, top:0, behavior: "smooth" });
    })

    $(".about").click(function () {
        window.scrollTo({ left: 0, top:1280, behavior: "smooth" });
    })

    $(".port").click(function () {
        window.scrollTo({ left: 0, top: 3250, behavior: "smooth" });
    })

    $(".other").click(function () {
        window.scrollTo({ left: 0, top:6600, behavior: "smooth" });
    })

    $(".contact").click(function () {
        window.scrollTo({ left: 0, top:20000, behavior: "smooth" });
    })


    AOS.init();


});