import React, {ReactElement} from 'react';
import {BackgroundEffectEnum} from "../../interfaces/data";
import {Parallax} from "react-parallax";


interface BackgroundEffectProps {
    backgroundEffect?: BackgroundEffectEnum,
    children: any

}

const image1 = 'https://wallpaperaccess.com/full/31189.jpg';



const BackgroundEffect: React.FC<BackgroundEffectProps> = ({children, backgroundEffect}) => {

    const effect = () => {
           switch (backgroundEffect) {
               case BackgroundEffectEnum.PARALLAX:
                   return <div>
                       <Parallax bgImage={image1} strength={500}>
                           <div style={{height: '100%'}}>
                               <div>
                                   {children}
                               </div>
                           </div>
                       </Parallax>
                   </div>;
               default:
                   return <div>
                       {children}
                   </div>
           }
    }

    return effect();

};

export default BackgroundEffect;