import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from './redux/reducers.js';

import { Buttons } from './components/Buttons.js';
import { ShowInfo } from './components/ShowInfo.js';
import { ProfileChange } from './components/ProfileChange.js';

const store=createStore(combinedReducer);

export const App = () => (
    <Provider store={store}>
        <div>
            <h1>Redux example #2</h1>
            <Buttons />
            <br/><hr/><br/>
            <ProfileChange/>
            <br/><br/><hr/><br/>
            <ShowInfo/>
            <br/><br/>
        </div>
    </Provider>
);
