import React from 'react';
import SongLists from './SongLists'
import SongDetails from './SongDetails';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron" style={{marginTop:'10px'}}>
                    <div className="row">
                        <div className="col-md-7">
                            <SongLists /> 
                        </div>
                        <div className="col-md-5" style={{paddingTop:'15px'}}>
                            <SongDetails /> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}