import React from "react";
import UI from "./UI";
import Headers from "../../HOC/Headers";
import io from 'socket.io-client';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {socket:null, uiShow: false, width: 0, height: 0 };
        this.updaateBookmark = this.updaateBookmark.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }
    componentDidMount() {
        let socket = io('http://localhost:3002/chat')
        this.setState({
            socket:socket
        })
       
        socket.on('hi', function (data) {
        });
    }
    componentDidUpdate(){
         if(this.state.uiShow && this.props.bookmark){
          this.state.socket.emit("data", this.props.bookmark);  
        }
        
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    async componentWillMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        await this.props.getCourseByIds(id).then(async (res) => {
            await this.props.getBookmarkByIds(id).then(res1 => {
                if (res1.data.length !== 0) {
                    this.setState({
                        ...this.state,
                        uiShow: true
                    })
                } else {
                    let bookmark = {
                        uid: res1.uid,
                        cid: res._id,
                        currentTopic: res.topics[0]._id,
                        currentVideo: res.topics[0].sub_topics[0]._id,
                        videoTime: {},
                        currentTab: "0"
                    }
                    bookmark.videoTime[res.topics[0].sub_topics[0]._id+"__"+res.topics[0]._id]="0";
                    this.updaateBookmark("NEW_BOOKMARK", bookmark);
                    this.setState({
                        ...this.state,
                        uiShow: true
                    })
                }
            })
        }) 

        this.props.getVideoNoteByids(id).then(res=>{
                console.log(res)
        }) 
        this.props.getAnnouncementByids(this.props.courseById.ctype).then(res=>{
            console.log(res)
         }) 
    }

    updaateBookmark(key, form) {
        this.props.updaateBookmarksToStore(key, form).then((res) => {
        })
    }


    render() {
        return (
            <div>
                {this.state.uiShow && <UI {...this.props} state={this.state} updaateBookmark={this.updaateBookmark} />}
            </div>
        )
    }
}

export default Headers(Player);
