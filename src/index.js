import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers'

export const reduxStore = createStore(reducer)
// const store = createStore() // if no export

//App is imported above

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App/></Provider>, rootElement);
