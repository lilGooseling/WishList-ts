import React from 'react';
import {ISection, SectionTemplateEnum} from "../../interfaces/data";
import SliderSection from "./slider";



interface SectionProps {
    section: ISection
}

const Section: React.FC<SectionProps> = ({section}) => {
    switch (section.template) {
        case SectionTemplateEnum.SLIDER:
            return <SliderSection section={section}/>
        default:
            return <div/>
    }
};

export default Section;
