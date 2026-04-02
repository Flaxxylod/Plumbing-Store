import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carosuel = ({ items, children }) => {
    const carouselStyles = `
           
            .slick-slide {
                max-width: 264px;
                max-height: 354px;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center; 
        }

            @media (max-width: 499px) {
                .slick-slide {
                    max-width: 264px; /* Можно изменить на нужное вам значение */
                    max-height: 347px; /* Пропорционально уменьшаем высоту */
                }
    }

            .slick-track {
                display: flex;
                column-gap: 16px; /* отступы между flex-элементами */
        }

            .carousel-wrapper{
              
            }
    `;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }

        ],
        // Стили как часть объекта настроек
        carouselStyles: carouselStyles
    };

    const slides = items || children;

    if (!slides || !Array.isArray(slides)) {
        console.log("Carosuel: нет данных для отображения");
        return null;
    }

    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
                {slides.map((item, index) => (
                    <div key={index} className="carousel-slide">
                        {item}
                    </div>
                ))}
            </Slider>

            <style>
                {settings.carouselStyles}
            </style>
        </div>
    );
};

export default Carosuel;