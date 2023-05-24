import {SectionTemplateEnum} from "../../../interfaces/data";

const sliderConfig = (template: SectionTemplateEnum): any => {
    switch (template) {
        case  SectionTemplateEnum.SOLOSLIDER:
            return {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear'
            };
        case SectionTemplateEnum.DUOSLIDER:
            return {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    }
                ]
            };
        case SectionTemplateEnum.MULTISLIDER:
            return {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                fade: true,
                cssEase: 'linear'
            }


    }
};

export default sliderConfig;

/*

settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
}*/
