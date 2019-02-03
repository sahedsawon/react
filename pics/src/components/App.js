import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends React.Component {

    state = {
        cars : []
    }

    onsubmit = async (term) => {
        const response = await unsplash.get(`/search/photos/`,{
            params : { query : term},
        });
        this.setState({ cars : response.data.results})
    }
   
    render() {
        return(
            <div className="container">
                <SearchBar onSubmit={this.onsubmit}  />
                <ImageList images={this.state.cars} />
            </div>
        )
    }
}