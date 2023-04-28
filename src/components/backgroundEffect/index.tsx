import React from 'react';
import {BackgroundEffectEnum} from "../../interfaces/data";



interface BackgroundEffectProps {
    backgroundEffect: BackgroundEffectEnum,
    children: any


}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({children}) => {

    return <div >
        {children}
    </div>

};

export default BackgroundEffect;