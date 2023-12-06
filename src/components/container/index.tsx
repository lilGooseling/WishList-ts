import React from 'react';
import styles from './index.module.scss';
import classNames from "classnames";
import {TypeOfFontsEnum} from "../../interfaces/data";
import {fontFamilies} from "../fontName/fontFamilies";


interface ContainerProps {
    fullScreen?: boolean
    children: any,
    textColor?: string,
    font?: TypeOfFontsEnum
}

interface containerStyle {
    [key:string]: string
}

const Container: React.FC<ContainerProps> = ({children, fullScreen = false, textColor, font}) => {
    const styleObj: containerStyle = {};
    if (textColor){
        styleObj['color'] = textColor;
    }
    if (font){
        styleObj['fontFamily'] = fontFamilies(font);
    }

    return <div className={classNames(styles.container, {[styles.fullScreen]: fullScreen})} style={styleObj}>
        {children}
    </div>

}

export default Container;
