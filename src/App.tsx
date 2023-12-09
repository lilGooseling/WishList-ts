import React, {useEffect, useState} from 'react';
import {globalData} from './data';
import styles from './app.module.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Page from "./components/page";
import {TypeOfFontsEnum} from "./interfaces/data";
import WebFont from 'webfontloader';
import {fontFamilies} from "./components/fontName/fontFamilies";
import classNames from "classnames";


function App() {
    const fontsInUse: TypeOfFontsEnum[] = [];
    const [fontsAnalyzed, setFontsAnalyzed] = useState(false);

    globalData.pages.forEach(page => {
        page.sections.forEach(section => {
            if (section.font && !fontsInUse.includes(section.font)) {
                fontsInUse.push(section.font);
            }
            section.cards.forEach(card => {
                if (card.font && !fontsInUse.includes(card.font)) {
                    fontsInUse.push(card.font);
                }
            });
        });
        if (!fontsAnalyzed) {
            setFontsAnalyzed(true);
        }
    });

    useEffect(() => {
        if (fontsAnalyzed) {
            const fontFamiliesArr: string[] = [];
            fontsInUse.forEach(font => {
                fontFamiliesArr.push(fontFamilies(font));
            })

            WebFont.load({
                google: {
                    families: fontFamiliesArr
                }
            });
        }

    }, [fontsAnalyzed]);

    const router = createBrowserRouter([...globalData.pages.map(page => ({
        path: `/${page.url}`,
        element: <Page page={page}/>
    })), {
        path: "/",
        element: globalData.pages.length ? <Page page={globalData.pages[0]}/> : <div/>
    }]);

    return (
        <div className={classNames(styles.app, 'font-loader')}>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
