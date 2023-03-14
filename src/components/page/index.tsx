import React from 'react';
import {IPage} from "../../interfaces/data";
import Menu from "../menu";


interface PageProps {
    page: IPage
}

const Page: React.FC<PageProps> = ({page}) => {

    return <div>
        <Menu/>
        {page.title}
    </div>

};

export default Page;
