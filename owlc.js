$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 3,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})