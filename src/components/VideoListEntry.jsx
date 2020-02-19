// declare a new class component named "VideoListEntry" extending the React.Components methodds
// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   //{this.props.video.thumbnails.default.url}
//   render () {
//     return (
var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.video.title}</div>
      <div className="video-list-entry-detail">{props.video.description}</div>
    </div>
  </div>
);
// will return the markup below

// successfully access props


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
