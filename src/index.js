import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Store , {persistor} from './persist'
import { render } from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Todo from './Todo'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
    render() {
      return (
        <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Todo />
        </PersistGate>
        </Provider>
        //document.getElementById('root')
      )
    }
  }
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
