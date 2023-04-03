import {SectionTemplateEnum} from "../../../interfaces/data";

const sliderConfig = (template: SectionTemplateEnum): any =>{
    switch (template) {
        case  SectionTemplateEnum.SOLOSLIDER:
            return {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear'
            };
        case SectionTemplateEnum.DUOSLIDER:
            return {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear'
            };
        case SectionTemplateEnum.MULTISLIDER:
            return {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
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
