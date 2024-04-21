/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import VideoItem from "./VideoItem"

const VideoList = ({videos}) =>{
     const renderList = videos.map(video => {
        return <VideoItem video={video} key={video.id.videoId}  />;
     }) 

    return(
        <div className="ui relaxed divided list">{renderList}</div>
    )
}

export default VideoList;