import React from 'react';

import SearchBar from './SearchBar'

export default class App extends React.Component {
    onsubmit(term) {
        console.log(term);
    }
   
    render() {
        return(
            <div className="container">
                    <SearchBar onSubmit={this.onsubmit}  />
            </div>
        )
    }
}