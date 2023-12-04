import React from 'react';
import styles from './index.module.scss';
import classNames from "classnames";


interface ContainerProps {
    fullScreen?: boolean
    children: any,
    textColor?: string
}

const Container: React.FC<ContainerProps> = ({children, fullScreen = false, textColor}) => {

    return <div className={classNames(styles.container, {[styles.fullScreen]: fullScreen})} style={ !!textColor ? {"color":`${textColor}`} : {}}>
        {children}
    </div>

}

export default Container;
