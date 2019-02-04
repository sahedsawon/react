import React from 'react';
import YouTube from '../API/YouTube';
import SearchBar from './SeachBar';
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

export default class App extends React.Component {
    state = {videos : [],selectedVideo : null};

    componentDidMount() {
        this.onserchTerm(`building`);
    }

    onSelectVideo = (video) => {
        this.setState({selectedVideo : video});

    }

    onserchTerm = async (term) => {
        var response =await YouTube.get('/search',{
            params : {q : term}
        })
        this.setState({videos:response.data.items,selectedVideo : response.data.items[0]});
    }
    render() {
        return(
            <div className="container">
            <SearchBar onSubmit={this.onserchTerm} />
            <div className="row">
                <div className="col-md-7">
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="col-md-5">
                    <VideoList onSelectVideo={this.onSelectVideo}  videos={this.state.videos} />
                </div>
            </div>
            </div>
        )
    }
}