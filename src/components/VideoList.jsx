/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import VideoItem from "./VideoItem"

const VideoList = ({videos, onVideoSelect}) =>{
     const renderList = videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId}  />;
     }) 

    return(
        <div className="ui relaxed divided list">{renderList}</div>
    )
}

export default VideoList;