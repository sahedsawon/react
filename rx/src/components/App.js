import React from 'react';

import Increment from './Increment';
import Decrement from './Decrement';
import Store from './Store';

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <Increment /> 
                    <Store />
                    <Decrement /> 
                </div>
            </div>
        )
    }
}