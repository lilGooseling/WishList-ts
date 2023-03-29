import React from 'react';
import {ISection} from "../../../interfaces/data";
import styles from './index.module.scss';
import Card from "./card";
import Title from "./title";

interface GridSectionProps {
    section: ISection
}

const GridSection: React.FC<GridSectionProps> = ({section}) => {
    return <>
        <Title section={section}/>
        <div className={styles.wrapper}>

            {section.cards.map(card => <div className={styles.cardHolder} key={card.title}>
                <Card card={card} sectionTemplate={section.template}/>
            </div>)}
        </div>
    </>
};


export default GridSection;