import React from 'react';
import {ICard, SectionTemplateEnum} from "../../../../interfaces/data";
import styles from './index.module.scss';
import classNames from "classnames";
import {fontFamilies} from "../../../fontName/fontFamilies";

interface CardProps {
    card: ICard;
    sectionTemplate: SectionTemplateEnum,
    buttonColor?: string,
    buttonBackgroundColor?: string,
}

interface ICardStyle {
    [key: string]: string
}

const defaultButtonTextColor = '#ffffff'

const Card: React.FC<CardProps> = ({card, sectionTemplate, buttonColor, buttonBackgroundColor}) => {

    function randomRotate() {
        const deg = Math.random() * (5 - -5) + -5;
        return 'rotate(' + deg + 'deg)';
    }

    let dynamicStyles: ICardStyle = {};
    let dynamicButtonStyle: ICardStyle = {};
    if (sectionTemplate == SectionTemplateEnum.GRID_STICKER) {
        dynamicStyles['transform'] = randomRotate();
    }
    if (!!card.textColor) {
        dynamicStyles['color'] = card.textColor;
    }
    if (!!card.font) {
        dynamicStyles['fontFamily'] = fontFamilies(card.font);
    }
    if (buttonColor){
        dynamicButtonStyle['color'] = buttonColor;
    } else {
        dynamicButtonStyle['color'] = defaultButtonTextColor;
    }
    if (buttonBackgroundColor){
        dynamicButtonStyle['background'] = buttonBackgroundColor;
    }


    return <div className={classNames(styles.card, {
        [styles.material]: sectionTemplate === SectionTemplateEnum.GRID_MATERIAL,
        [styles.shadow]: sectionTemplate === SectionTemplateEnum.GRID_SHADOW,
        [styles.sticker]: sectionTemplate === SectionTemplateEnum.GRID_STICKER,
        [styles.gradient]: sectionTemplate === SectionTemplateEnum.GRID_GRADIENT
    })}
                style={dynamicStyles}

    >
        <div className={styles.imgWrap}>
            <div className={styles.img} style={({backgroundImage: `url("${card.img}")`})}/>
        </div>
        <div className={styles.text}>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.desc}>{card.description}</div>
            <div className={styles.buttonWrap} >
                <a className={styles.button} href={card.url} target={'_blank'} rel={'nofollow'} style={dynamicButtonStyle}>
                    Перейти
                </a>
                {sectionTemplate === SectionTemplateEnum.GRID_SHADOW && <div className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill={buttonColor || defaultButtonTextColor}>
                        <path fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>
                </div>}
                {sectionTemplate === SectionTemplateEnum.GRID_STICKER && <div className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill={buttonColor || defaultButtonTextColor}>
                        <path fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>
                </div>}
            </div>
        </div>
    </div>

}

export default Card;
