import React from 'react';
import {BackgroundImageEnum} from "../../interfaces/data";
import backgroundImageConfig from "./backgroundImageConfig";


interface BackgroundImageProps {
    backgroundImage: string | undefined
    imageTemplate: BackgroundImageEnum | undefined
    children: any


}

const BackgroundImage: React.FC<BackgroundImageProps> = ({children, backgroundImage}) => {

    return <div style={{backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed'}}>
        {children}
    </div>

};

export default BackgroundImage;
