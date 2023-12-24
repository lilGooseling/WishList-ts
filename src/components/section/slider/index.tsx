import React from 'react';
import styles from './index.module.scss';
import {ISection, SectionTemplateEnum} from "../../../interfaces/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderConfig from "./sliderConfig";
import classNames from "classnames";
import {fontFamilies} from "../../fontName/fontFamilies";


interface SliderSectionProps {
    section: ISection
}

interface IStyle {
    [key: string]: string
}

const SliderSection: React.FC<SliderSectionProps> = ({section}) => {
    let settings = sliderConfig(section.template);
    let dynamicStyles: IStyle = {};
    if (!!section.textColor) {
        dynamicStyles['color'] = section.textColor;
    }
    if (!!section.font){
        dynamicStyles['fontFamily'] = fontFamilies(section.font);
    }

    return <div className={styles.wrap} style={dynamicStyles}>
        <div className={styles.title}>{section.title}</div>
        <div className={styles.description}>{section.description}</div>
        <div className={classNames(styles.slider, {
            [styles.solo]: section.template === SectionTemplateEnum.SOLOSLIDER,
            [styles.duo]: section.template === SectionTemplateEnum.DUOSLIDER,
            [styles.multi]: section.template === SectionTemplateEnum.MULTISLIDER,
        })}>
            <Slider {...settings}>
                {section.cards.map(card => {
                    let dynamicStyles: IStyle = {};
                    let dynamicButtonStyle: IStyle = {};
                    if (!!card.textColor) {
                        dynamicStyles['color'] = card.textColor;
                    }
                    if (!!card.font){
                        dynamicStyles['fontFamily'] = fontFamilies(card.font);
                    }
                    if (section.buttonColor){
                        dynamicButtonStyle['color'] = section.buttonColor
                    }
                    if (section.buttonBackgroundColor){
                        dynamicButtonStyle['background'] = section.buttonBackgroundColor
                    }
                    return <div key={card.title} className={styles.cardWrapper}>
                        <div className={styles.cardHolder} style={dynamicStyles}>
                            <div className={styles.left}>
                                <div className={styles.cardTitle}>{card.title}</div>
                                <div className={styles.cardDesc}>{card.description}</div>
                                <a className={styles.button} href={card.url} target={'_blank'} rel={'nofollow'} style={dynamicButtonStyle}>
                                    Перейти
                                </a>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.img} style={({backgroundImage: `url("${card.img}")`})}/>
                            </div>

                        </div>
                    </div>
                })}
            </Slider>
        </div>
    </div>


}

export default SliderSection;
