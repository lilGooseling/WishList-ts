import React from 'react';
import styles from './index.module.scss';
import {globalData} from '../../data';
import {Link, NavLink} from "react-router-dom";


interface MenuProps {
    fontColor?: string
    menuActiveTextColor?: string
}

const Menu: React.FC<MenuProps> = ({fontColor, menuActiveTextColor}) => {
    return <div className={styles.menu}>
        {globalData.pages.map(page => <div className={styles.link} key={page.url}>
            <NavLink to={`/${page.url}`}
                     style = {({isActive, isPending}) => ({
                         color: isActive ?
                             menuActiveTextColor ? menuActiveTextColor : '#6d0003'
                                        : fontColor || '#000000'
                     })}
                     className={({isActive, isPending}) =>
                         isPending ? "pending"
                             : isActive ? styles.active
                                 : ""
                     }>
                {page.title}
            </NavLink>
        </div>)}
    </div>

}

export default Menu;
