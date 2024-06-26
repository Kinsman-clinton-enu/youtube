/* eslint-disable react/prop-types */

const VideoDetail = ({ video }) => {
  if (!video) {
    return <>loading..</>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc }></iframe>
        </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
