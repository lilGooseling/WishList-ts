import React, {ReactElement} from 'react';
import {BackgroundEffectEnum} from "../../interfaces/data";
import {Parallax} from "react-parallax";


interface BackgroundEffectProps {
    backgroundEffect?: BackgroundEffectEnum,
    children: any

}

const image1 = 'https://images.unsplash.com/photo-1525169087805-031a4da0623c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFjZSUyMGZhYnJpY3xlbnwwfHwwfHw%3D&w=1000&q=80';



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