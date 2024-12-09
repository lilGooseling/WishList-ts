import React from 'react';
import styles from './index.module.scss';
import {ISection, SectionTemplateEnum} from "../../../../interfaces/data";
import classNames from "classnames";


interface TitleProps {
    section: ISection
}

const Title: React.FC<TitleProps> = ({section}) => {

    return <div className={styles.wrapper}>
        <div className={classNames(styles.title, {
            [styles.material]: section.template === SectionTemplateEnum.GRID_MATERIAL,
            [styles.shadow]: section.template === SectionTemplateEnum.GRID_SHADOW,
            [styles.sticker]: section.template === SectionTemplateEnum.GRID_STICKER,
            [styles.gradient]: section.template === SectionTemplateEnum.GRID_GRADIENT
        })} style={({color: `${section.titleTextColor ? section.titleTextColor : '#000000'}`})}>{section.title}</div>
        <div className={classNames(styles.desc, {
            [styles.material]: section.template === SectionTemplateEnum.GRID_MATERIAL,
            [styles.shadow]: section.template === SectionTemplateEnum.GRID_SHADOW,
            [styles.sticker]: section.template === SectionTemplateEnum.GRID_STICKER,
            [styles.gradient]: section.template === SectionTemplateEnum.GRID_GRADIENT
        })} style={({color: `${section.descriptionTextColor ? section.descriptionTextColor : '#000000'}`})}>{section.description}</div>
        <div className={classNames(styles.divider)}></div>
        
    </div>

}

export default Title;
