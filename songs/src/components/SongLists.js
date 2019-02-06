import React from 'react';
import {connect} from 'react-redux';
import {onSelectSong} from '../actions'

class SongLists extends React.Component {

    renderSongList = (songs) => {
        return songs.map( song => {
            return (
                <li key={song.title} className="list-group-item d-flex justify-content-between align-items-center">
                    {song.title}
                    <span className="badge" onClick={() => {this.props.onSelectSong(song)}}>
                        <button className="btn btn-primary btn-small">Play</button>
                    </span>
                </li>
            )
        })
    }

    render() {
        return(
            <ul className="list-group">
               {this.renderSongList(this.props.songs)} 
            </ul>
        )
    }
}


const mapStateToProps = (state) => {
    return {songs :  state.songs};
}

export default connect(mapStateToProps,{onSelectSong})(SongLists);