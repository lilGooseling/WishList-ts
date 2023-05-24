import React from 'react';
import styles from './index.module.scss';
import {ISection, SectionTemplateEnum} from "../../../interfaces/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderConfig from "./sliderConfig";
import classNames from "classnames";


interface SliderSectionProps {
    section: ISection
}


const SliderSection: React.FC<SliderSectionProps> = ({section}) => {
    let settings = sliderConfig(section.template);

    return <>
        <div className={styles.title}>{section.title}</div>
        <div className={styles.description}>{section.description}</div>
        <div className={classNames(styles.slider, {
            [styles.solo]: section.template === SectionTemplateEnum.SOLOSLIDER,
            [styles.duo]: section.template === SectionTemplateEnum.DUOSLIDER,
            [styles.multi]: section.template === SectionTemplateEnum.MULTISLIDER,
        })}>
            <Slider {...settings}>
                {section.cards.map(card => <div key={card.title} className={styles.cardWrapper}>
                    <div className={styles.cardHolder}>
                        <div className={styles.left}>
                            <div className={styles.cardTitle}>{card.title}</div>
                            <div className={styles.cardDesc}>{card.description}</div>
                            <a className={styles.button} href={card.url} target={'_blank'} rel={'nofollow'}>
                                Перейти
                            </a>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.img} style={({backgroundImage: `url("${card.img}")`})}/>
                        </div>

                    </div>

                </div>)}
            </Slider>
        </div>
    </>


}

export default SliderSection;
