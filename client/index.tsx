import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

class App extends React.PureComponent {
    render() {
        return <BrowserRouter>koa client</BrowserRouter>
    }
}


ReactDOM.hydrate(<App />, document.getElementById('root'));