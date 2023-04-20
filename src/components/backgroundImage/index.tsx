import React from 'react';
import {BackgroundImageEnum} from "../../interfaces/data";


interface BackgroundImageProps {
    backgroundImage: string | undefined
    imageTemplate: BackgroundImageEnum | undefined
    children: any


}

const BackgroundImage: React.FC<BackgroundImageProps> = ({children, backgroundImage}) => {

    return <div style={{backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'repeat'}}>
        {children}
    </div>

};

export default BackgroundImage;
