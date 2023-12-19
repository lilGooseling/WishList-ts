import React from 'react';
import styles from './index.module.scss';
import {globalData} from '../../data';
import {Link, NavLink} from "react-router-dom";


interface MenuProps {
    fontColor?: string
}

const Menu: React.FC<MenuProps> = ({fontColor}) => {
    return <div className={styles.menu}>
        {globalData.pages.map(page => <div className={styles.link} key={page.url}>
            <NavLink to={`/${page.url}`}
                     style= {{color: fontColor || '#000000' }}
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
