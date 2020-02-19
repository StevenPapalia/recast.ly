import VideoListEntry from './VideoListEntry.js';
// import exampleVideoData from '../data/exampleVideoData.js';
// refactor 5 individual modules to map input data's single video obj into the VideoListEntry class component

var VideoList = (props) => (
  <div className="video-list">
    <div>
      {props.videos.map(video => <VideoListEntry video={video}/>)}
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
