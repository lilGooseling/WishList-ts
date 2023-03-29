import React from 'react';
import {globalData} from './data';
import styles from './app.module.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Page from "./components/page";
import Menu from "./components/menu";


function App() {

    const router = createBrowserRouter([...globalData.pages.map(page=>({
        path: `/${page.url}`,
        element: <Page page={page}/>
    })), {
        path: "/",
        element: <div/>
    }]);

  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
