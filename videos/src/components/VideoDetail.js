import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return ( 
        <div className="row">
            <div  className="col-md-12 ">
                <iframe src={videoUrl} title={video.snippet.title} style={ {width:'100%',height:'300px'}}/>
                <h5 className="mb-1">{video.snippet.title}</h5>
                <small>{video.snippet.description}</small>
            </div >
        </ div>

    )
}
export default VideoDetail;