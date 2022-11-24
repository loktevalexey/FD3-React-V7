import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import fruitsReducer from './redux/fruitsReducer';
import { HungryGuy } from './components/HungryGuy';
import { Plate } from './components/Plate';

const store=createStore(fruitsReducer);

export const App = () => (
    <Provider store={store}>
        <div>
            <h1>Redux example #1</h1>
            <HungryGuy />
            <br/><br/><hr/><br/>
            <Plate/>
        </div>
    </Provider>
);
