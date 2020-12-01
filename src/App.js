import React, { Component, Fragment } from "react";
import YoutubeHeader from "./Components/YoutubeHeader/Header";
import VideoDetails from "./Components/YoutubeVideos/VideoDetails";
import VideoLists from './Components/YoutubeVideos/VideoLists';
import api, { baseParams } from "./Services/Api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.onTermSubmit("javascript");
  }

  onTermSubmit = async (term) => {
    // console.log(term);
    let response = await api.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = async (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <Fragment>
        <header>
          <YoutubeHeader onTermSubmit={this.onTermSubmit} />
        </header>
        <main className="containerBlock my-3">
          <article className="row">
            <div className="videoPlayerBlock col-md-8">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="videoListBlock col-md-4">
              <VideoLists
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </article>
        </main>
      </Fragment>
    );
  }
}

export default App;
