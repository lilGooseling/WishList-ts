import React from 'react';
import {BackgroundEffectEnum} from "../../interfaces/data";



interface BackgroundEffectProps {
    backgroundEffect: BackgroundEffectEnum,
    children: any


}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({children, backgroundEffect}) => {

    return <div>
        {children}
    </div>

};

export default BackgroundEffect;