import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({videos,onSelectVideo}) => {
    const videoItem = videos.map(video => {
        return <VideoItem onSelectVideo={onSelectVideo} key={video.etag} video={video} />;
    })
    return <ul className="list-group">{videoItem}</ul>
}
export default VideoList;