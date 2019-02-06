import React from 'react';
import {connect} from 'react-redux';

class SongDetails extends React.Component {
    render() {
        if(!this.props.song){
            return <div>Song Details </div>
        }
        return  <div>
                <h3>Title : {this.props.song.title}</h3>
                <p>Duration : {this.props.song.duration}</p>
            </div>
    }
}

const mapStateToProps = (state) => {
    return {song : state.selectedSong};
}


export default connect(mapStateToProps)(SongDetails);