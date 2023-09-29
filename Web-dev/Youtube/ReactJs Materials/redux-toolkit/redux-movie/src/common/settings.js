export const Settings = {
    // dots: true,
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,
                dots: false,

            }
        }, {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false,

            }
        },

        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

}