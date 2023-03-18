import React from 'react';
import {IPage, PageTypeEnum} from "../../interfaces/data";
import Menu from "../menu";
import styles from './index.module.scss'
import classNames from "classnames";
import Section from "../section";
import Container from "../container";


interface PageProps {
    page: IPage
}

const Page: React.FC<PageProps> = ({page}) => {
    const pageType = page.type || PageTypeEnum.LEFT;

    return <div>
        <Container fullScreen={page.fullScreen}>
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
    </div>

};

export default Page;
