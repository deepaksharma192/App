import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from "./Tabs"
import Right from './Right'
import Video from './Video'
import CommentIcon from '@material-ui/icons/Comment';
import Fab from '@material-ui/core/Fab';
import AddComment from './AddComment'

class UI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentVideo: {}, isAddcomment: false }
        this.selectVideo = this.selectVideo.bind(this);
        this.showComment = this.showComment.bind(this);
        this.hideComment = this.hideComment.bind(this);
        this.AddCommentFun = this.AddCommentFun.bind(this);
        this.JumbtoVideoFromNote = this.JumbtoVideoFromNote.bind(this)
        this.commentRef = React.createRef("")
    }
    componentDidMount() {
        let { currentTopic, currentVideo } = this.props.bookmark;
        if (currentTopic) {
            this.props.courseById.topics.forEach((v, i) => {
                if (currentTopic === v._id) {
                    v['sub_topics'].forEach((v1) => {
                        if (currentVideo === v1._id) {
                            let keys = v1._id + "__" + v1.topic_id;
                            v1["startTime"] = this.props.bookmark.videoTime[keys].time;
                            this.setState({
                                currentVideo: v1
                            })
                        }
                    })
                }
            })
        } else {
            let obj1 = this.props.courseById.topics[0]['sub_topics'][0];
            let keys = obj1._id + "__" + obj1.topic_id;
            obj1["startTime"] = this.props.bookmark.videoTime[keys].time;
            this.setState({
                currentVideo: obj1
            })
        }

    }
    selectVideo(v, c) {
        let keys = v._id + "__" + v.topic_id;
        if (this.props.bookmark.videoTime.hasOwnProperty(keys)) {
            v["startTime"] = this.props.bookmark.videoTime[keys].time;
        } else {
            v["startTime"] = 0;
        }
        this.setState({
            currentVideo: v
        }, () => {
            this.props.updaateBookmark('TOPIC_VIDEO', v).then(res => {
                
            });;
        })
    }
    showComment() {
        this.setState({
            ...this.state,
            isAddcomment: true
        })
    }
    JumbtoVideoFromNote(v) {
        /*
        _id: "5e89904e1c9d44000024f742"
topic_id: "5e8990391c9d440000d9a5fa"
title: "For Bigger Fun 4"
src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg"
description: "topic description 3"
duration: "60"
startTime: 34.903231 */
        let v_tid = v.v_tid.split('__');
        let vid = v_tid[0];
        let tid = v_tid[1];
        this.props.courseById.topics.forEach((topic,i)=>{
            if(topic._id === tid){
                 topic.sub_topics.forEach((sub_topic)=>{
                    if(sub_topic._id === vid){
                        let vTemp = Object.assign({}, sub_topic);
                        vTemp['startTime']=v.time;
                        this.selectVideo(vTemp,i);
                    }
                 })
            }  
        })
    }
    hideComment() {
        this.setState({
            ...this.state,
            isAddcomment: false
        })
    }
    AddCommentFun(v) {
        if (this.commentRef.current.value) {
            let currentVideo = this.state.currentVideo;
            let keys = currentVideo._id + "__" + currentVideo.topic_id;
            let data = {
                "cid": this.props.courseById._id,
                "note": this.commentRef.current.value,
                "time": this.props.bookmark.videoTime[keys].time,
                "v_tid": keys
            }
            this.props.createVideoNotes(data).then(res => {
                this.setState({
                    ...this.state,
                    isAddcomment: false
                })
            })
        } else {
            this.commentRef.current.focus()
        }

    }
    render() {
        return (
            <div style={{ background: 'rgb(226, 226, 226)' }} >
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={9} lg={9} style={{ paddingTop: 20, background: "#fff" }}>
                        <Video {...this.props} currentVideo={this.state.currentVideo} />

                        <Fab onClick={this.showComment} size="small" color="primary" aria-label="add" >
                            <CommentIcon />
                        </Fab>
                        {this.state.isAddcomment && <AddComment commentRef={this.commentRef} hideComment={this.hideComment} AddCommentFun={this.AddCommentFun} />}
                    </Grid>
                    {this.props.state.width > 959 &&
                        <Grid item xs={12} sm={12} md={3} lg={3} style={{ paddingTop: 20, background: "#fff" }}>
                            <Right {...this.props} selectVideo={this.selectVideo} />
                        </Grid>
                    }
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        {this.props.bookmark && <Tabs {...this.props} selectVideo={this.selectVideo} JumbtoVideoFromNote={this.JumbtoVideoFromNote} />}
                    </Grid>

                </Grid>
            </div>
        );
    }

}

export default UI