import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {
  setinter = 0
  constructor(props) {
    super(props);
    this.state = { interval: true, startTime: 0 };
    this.endVideo = this.endVideo.bind(this)
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.jumpVideo = this.jumpVideo.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  async componentDidUpdate(prevProps, prevState) {

  }
  jumpVideo() {
    const { player } = this.player.getState();
    this.player.seek(this.props.currentVideo.startTime);
  }
  endVideo(e) {
    let keys = this.props.currentVideo._id + "__" + this.props.currentVideo.topic_id;
    this.props.updaateBookmark('VIDEO_COMPLETE', { complete: true, vid: keys }).then(res => {
      this.props.endVideoUpdate();
      this.props.endVideoUpdate();
      setTimeout(() => {
        this.props.endVideoUpdate();
      }, 1000);
    });

  }
  onTimeUpdate(e) {
    let keys = this.props.currentVideo._id + "__" + this.props.currentVideo.topic_id;
    const { player } = this.player.getState();
    if (!player.paused) {
      this.props.updaateBookmark('VIDEO_TIME', { ctime: player.currentTime, vid: keys }).then(res => {
        this.props.endVideoUpdate();
      });;
    }
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Player
            onEnded={this.endVideo}
            onTimeUpdate={this.onTimeUpdate}
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
