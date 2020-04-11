import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {
  setinter = 0
  constructor(props) {
    super(props);
    this.state = { interval: true };
  }
  componentDidMount() {
    this.setinter = setInterval(() => {
      if (this.props.currentVideo) {
        let keys = this.props.currentVideo._id + "__" + this.props.currentVideo.topic_id;
        const { player } = this.player.getState();
        if (!player.paused) {
          //let spendTime = this.props.bookmark.videoTime[keys];
          this.props.updaateBookmark('VIDEO_TIME', { ctime: player.currentTime, vid: keys });
        }
      }
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.setinter)
  }
  componentDidUpdate(prevProps, prevState) {

  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Player
            seek={10}
            poster={this.props.currentVideo.img}
            startTime={parseInt(this.props.currentVideo.startTime)}
            ref={player => {
              this.player = player;
            }}
            src={this.props.currentVideo.src}
          >
            <BigPlayButton position="center" />
          </Player>

        </Container>
      </React.Fragment>
    )
  }
}
export default Video;
