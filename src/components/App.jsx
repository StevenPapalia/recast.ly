import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  onTitleClick (index) {
    this.setState({
      video: exampleVideoData[index]
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.video}/>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} onTitleClick={this.onTitleClick.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
