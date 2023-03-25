import React, {ReactElement} from 'react';
import {ISection, SectionTemplateEnum} from "../../interfaces/data";
import SliderSection from "./slider";
import Container from "../container";
import GridSection from "./grid";



interface SectionProps {
    section: ISection
}

const sectionReducer = (section: ISection):ReactElement<any,any> => {
    switch (true) {
        case [SectionTemplateEnum.DUOSLIDER, SectionTemplateEnum.MULTISLIDER, SectionTemplateEnum.SOLOSLIDER].includes(section.template):
            return <SliderSection section={section}/>
        case [SectionTemplateEnum.GRID_MATERIAL, SectionTemplateEnum.GRID_SHADOW].includes(section.template):
            return <GridSection section={section}/>
        default:
            return <div/>
    }
}

const Section: React.FC<SectionProps> = ({section}) => {
   return <Container fullScreen={[SectionTemplateEnum.GRID_MATERIAL, SectionTemplateEnum.GRID_SHADOW].includes(section.template) ? false : section.fullScreen}>
       {sectionReducer(section)}
   </Container>
};

export default Section;
