import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store'

import { Buttons } from './components/Buttons.js';
import { ProfileChange } from './components/ProfileChange.js';
import { ShowFruits } from './components/ShowFruits';
import { ShowProfile } from './components/ShowProfile';

export const App = () => (
    <Provider store={store}>
        <div>
            <h1>Redux example #3</h1>
            <Buttons />
            <br/><hr/><br/>
            <ProfileChange/>
            <br/><br/><hr/><br/>
            <ShowFruits/>
            <br/><br/><hr/><br/>
            <ShowProfile/>
        </div>
    </Provider>
);
