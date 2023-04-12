import React from 'react';
import {globalData} from './data';
import styles from './app.module.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Page from "./components/page";


function App(){

    const router = createBrowserRouter([...globalData.pages.map(page => ({
        path: `/${page.url}`,
        element: <Page page={page}/>
    })), {
        path: "/",
        element: globalData.pages.length ? <Page page={globalData.pages[0]}/> : <div/>
    }]);

    return (
        <div className={styles.app}>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
