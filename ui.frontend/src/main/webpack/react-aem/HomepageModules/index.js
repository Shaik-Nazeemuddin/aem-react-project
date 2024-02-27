
import React from 'react';
import ReactDOM from 'react-dom/client';
import  MainWrapper  from './MainWrapper';
import './HomepageModules.scss';

export default class HomepageModules {
    constructor($ele) {
        const root = ReactDOM.createRoot($ele);     
        root.render(
            <React.StrictMode>
                <MainWrapper />
            </React.StrictMode>
        );
    }
}