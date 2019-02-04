import React from 'react';

const VideoItem = ({video,onSelectVideo}) => {
    return(
        <li onClick={() => onSelectVideo(video)} className="list-group-item d-flex justify-content-between align-items-center">
            <img className="youtuve-thumnile" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <span>{video.snippet.title}</span>
        </li>
    ) 
}
export default VideoItem