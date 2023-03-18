import React, {ReactElement} from 'react';
import {ISection, SectionTemplateEnum} from "../../interfaces/data";
import SliderSection from "./slider";
import Container from "../container";



interface SectionProps {
    section: ISection
}

const sectionReducer = (section: ISection):ReactElement<any,any> => {
    switch (true) {
        case [SectionTemplateEnum.DUOSLIDER, SectionTemplateEnum.MULTISLIDER, SectionTemplateEnum.SOLOSLIDER].includes(section.template):
            return <SliderSection section={section}/>
        default:
            return <div/>
    }
}

const Section: React.FC<SectionProps> = ({section}) => {
   return <Container fullScreen={section.fullScreen}>
       {sectionReducer(section)}
   </Container>
};

export default Section;
