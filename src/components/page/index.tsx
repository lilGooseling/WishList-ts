import React, {useState} from 'react';
import {IPage, PageTypeEnum} from "../../interfaces/data";
import Menu from "../menu";
import styles from './index.module.scss'
import classNames from "classnames";
import Section from "../section";
import Container from "../container";
import Color from "../backgroundColor";
import BackgroundImage from "../backgroundImage";
import BackgroundEffect from "../backgroundEffect";
import {globalData} from "../../data";


interface PageProps {
    page: IPage
}

const Page: React.FC<PageProps> = ({page}) => {
    const pageType = page.type || PageTypeEnum.LEFT;

    return  <Color backgroundColor={page.backgroundColor}>
            <BackgroundEffect backgroundEffect={page.backgroundEffect} >
                <BackgroundImage backgroundImage={page.backgroundImage} imageTemplate={page.imageTemplate}>
                    <Container fullScreen={page.fullScreen}>
                        <div className={styles.site_title}>
                            {globalData.title}
                        </div>
                        <div className={styles.site_description}>
                            {globalData.description}
                        </div>
                        <Menu/>
                        <div className={classNames(styles.title, {
                            [styles.left]: pageType === PageTypeEnum.LEFT,
                            [styles.right]: pageType === PageTypeEnum.RIGHT,
                            [styles.center]: pageType === PageTypeEnum.CENTER,
                        })}>
                            {page.title}
                        </div>
                    </Container>
                    {page.sections.map(section => <Section section={section} key={section.title}/>)}
                </BackgroundImage>
            </BackgroundEffect>
        </Color>

};

export default Page;
