import React, {ReactElement} from 'react';
import {ISection, SectionTemplateEnum} from "../../interfaces/data";
import SliderSection from "./slider";
import Container from "../container";
import GridSection from "./grid";
import Color from "../backgroundColor";
import BackgroundImage from "../backgroundImage";
import BackgroundEffect from "../backgroundEffect";


interface SectionProps {
    section: ISection
}

const sectionReducer = (section: ISection):ReactElement<any,any> => {
    switch (true) {
        case [SectionTemplateEnum.DUOSLIDER, SectionTemplateEnum.MULTISLIDER, SectionTemplateEnum.SOLOSLIDER].includes(section.template):
            return <SliderSection section={section}/>;
        case [SectionTemplateEnum.GRID_MATERIAL, SectionTemplateEnum.GRID_SHADOW, SectionTemplateEnum.GRID_STICKER, SectionTemplateEnum.GRID_GRADIENT].includes(section.template):
            return <GridSection section={section}/>;
        default:
            return <div/>
    }
};

const Section: React.FC<SectionProps> = ({section}) => {
   return <Color backgroundColor={section.backgroundColor}>
       <BackgroundEffect backgroundEffect={section.backgroundEffect} >
           <BackgroundImage backgroundImage={section.backgroundImage} imageTemplate={section.imageTemplate}>
               <Container fullScreen={[SectionTemplateEnum.GRID_MATERIAL, SectionTemplateEnum.GRID_SHADOW, SectionTemplateEnum.GRID_STICKER, SectionTemplateEnum.GRID_GRADIENT].includes(section.template) ? false : section.fullScreen} textColor={section.textColor}>
                   {sectionReducer(section)}
               </Container>
           </BackgroundImage>
       </BackgroundEffect>
       </Color>

};

export default Section;
