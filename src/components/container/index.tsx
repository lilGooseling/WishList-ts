import React from 'react';
import styles from './index.module.scss';
import classNames from "classnames";


interface ContainerProps {
    fullScreen?: boolean
    children: any
}

const Container: React.FC<ContainerProps> = ({children, fullScreen = false}) => {

    return <div className={classNames(styles.container, {[styles.fullScreen]: fullScreen})}>
        {children}
    </div>

}

export default Container;
