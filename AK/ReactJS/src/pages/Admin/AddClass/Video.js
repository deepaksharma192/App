import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
const useStyles = theme => ({

    siz: {
        width: '50%'
    }, formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
});
class Class_ extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classes: [], subject: [], chapter: [], topic: [],video:[], isOpen: false, selectClassId: '', selectSubjectId: '', cType: '', selectChapterId: '', selectTopicId: '' }
        this.listVideo = this.listVideo.bind(this);
        this.ItemClass = this.ItemClass.bind(this);
        this.handleClose = this.handleClose.bind(this)
        this.selectSubject = this.selectSubject.bind(this)
        this.AddPopup = this.AddPopup.bind(this);
        this.saveClass = this.saveClass.bind(this);
        this.selectClass = this.selectClass.bind(this);
        this.chapterNameRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.srcRef = React.createRef();
        this.statusRef = React.createRef();
        this.durationRef = React.createRef(); 
        this.imgRef = React.createRef();
        this.selectChapter = this.selectChapter.bind(this);
        this.selectTopic = this.selectTopic.bind(this)
    }
    componentDidMount() {
        if (this.props.get_All_class) {
            this.setState({
                classes: this.props.get_All_class,
            })
            console.log(this.props.get_All_class)
        }
    }

    selectClass(v) {
        this.setState({
            selectClassId: v.target.value,
        }, () => {
            let q = { class_id: this.state.selectClassId };
            this.props.getAllSubject_for_admin(q).then(res => {
                this.setState({
                    subject: res
                })
                console.log(res)
            })
        })
    }
    selectSubject(v) {
        console.log(v.target)
        this.setState({
            selectSubjectId: v.target.value,
            cType: v.target.name
        }, () => {
            let q = { subject_id: this.state.selectSubjectId };
            this.props.getAllChapter_for_admin(q).then(res => {
                this.setState({
                    chapter: res
                })
            })
        })
    }
    selectChapter(v) {
        this.setState({
            selectChapterId: v.target.value
        }, () => {
            let q = { course_id: this.state.selectChapterId };
            this.props.getAllTopic_for_admin(q).then(res => {
                this.setState({
                    topic: res
                })
            })
        })
    }
    selectTopic(v) {
        this.setState({
            selectTopicId: v.target.value
        }, () => {
            let q = { topic_id: this.state.selectTopicId};
            this.props.getAllVideo_for_admin(q).then(res => {
                this.setState({
                    video: res
                })
            })
        })
    }
    ItemClass() {
        return (
            this.state.classes.map((item) => (
                <MenuItem value={item._id}>{`${item.className}`}</MenuItem>
            ))
        )
    }
    ItemSubject() {
        return (
            this.state.subject.map((item) => (
                <MenuItem value={item._id} >{`${item.subject_name}`}</MenuItem>
            ))
        )
    }

    ItemChapter() {
        return (
            this.state.chapter.map((item) => (
                <MenuItem value={item._id} >{`${item.title}`}</MenuItem>
            ))
        )
    }
    ItemTopic() {
        return (
            this.state.topic.map((item) => (
                <MenuItem value={item._id} >{`${item.title}`}</MenuItem>
            ))
        )
    }
    listVideo() {
        return (
            <List subheader={<li />}>
                {
                    this.state.video.map((item) => (
                        <ListItem key={`item-${item._id}`}>
                            <ListItemText primary={`${item.title}`} />
                        </ListItem>
                    ))
                }
            </List>
        )
    }

    AddPopup() {
        this.setState({
            isOpen: true
        })
    }
    handleClose() {
        this.setState({
            isOpen: false
        })
    }
    saveClass(e) {
        e.preventDefault();
        let data = {
            title: this.chapterNameRef.current.value,
            description: this.descriptionRef.current.value,
            topic_id: this.state.selectTopicId,
            duration: this.durationRef.current.value,
            src:this.srcRef.current.value,
            img:this.imgRef.current.value,
            status: this.statusRef.current.value
        }
        this.props.saveVideo_for_admin(data).then(res => {
            this.setState({
                video: res,
                isOpen: false
            })
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.selectClassId}
                                onChange={this.selectClass}
                            >
                                <MenuItem value=''>select</MenuItem>
                                {this.state.classes.length && this.ItemClass()}
                            </Select>
                        </FormControl>
                        {(this.state.selectClassId && this.state.subject.length) && <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.selectSubjectId}
                                onChange={this.selectSubject}
                            >
                                <MenuItem value=''>select</MenuItem>
                                {this.state.subject.length && this.ItemSubject()}
                            </Select>
                        </FormControl>}
                        {(this.state.selectSubjectId && this.state.chapter.length) && <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select Chapter</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.selectChapterId}
                                onChange={this.selectChapter}
                            >
                                <MenuItem value=''>select</MenuItem>
                                {this.state.chapter.length && this.ItemChapter()}
                            </Select>
                        </FormControl>}
                        {(this.state.selectChapterId && this.state.topic.length) && <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select Topic</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.selectTopicId}
                                onChange={this.selectTopic}
                            >
                                <MenuItem value=''>select</MenuItem>
                                {this.state.topic.length && this.ItemTopic()}
                            </Select>
                        </FormControl>}
                        {this.state.selectTopicId && <Button variant="contained" color="secondary" onClick={this.AddPopup}>
                            Add new Video
                </Button>}
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.topic.length && this.listVideo()}
                        {!this.state.topic.length && <CircularProgress size={24} />}
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.isOpen}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <form noValidate autoComplete="off">
                        <DialogTitle id="alert-dialog-slide-title">Topic Form</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">

                                <TextField
                                    inputRef={this.chapterNameRef}
                                    id="outlined-secondary"
                                    label="Video title"
                                    variant="outlined"
                                    color="secondary"
                                />
                                <br></br><br></br>
                                <TextField
                                    inputRef={this.descriptionRef}
                                    id="outlined-secondary"
                                    label="Descriptione"
                                    variant="outlined"
                                    color="secondary"
                                />
<br></br><br></br>
                                <TextField
                                    inputRef={this.durationRef}
                                    id="outlined-secondary"
                                    label="Duration of Video"
                                    variant="outlined"
                                    color="secondary"
                                />
                                <br></br><br></br>
                                <TextField
                                    inputRef={this.srcRef}
                                    id="outlined-secondary"
                                    label="URL of Video"
                                    variant="outlined"
                                    color="secondary"
                                />

                                <br></br><br></br>
                                <TextField
                                    inputRef={this.imgRef}
                                    id="outlined-secondary"
                                    label="URL OF video thum"
                                    variant="outlined"
                                    color="secondary"
                                />
                                <br></br><br></br>
                               
                                <FormControl className={classes.formControl} >
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        inputRef={this.statusRef}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                    >
                                        <MenuItem value={`active`}>active</MenuItem>
                                        <MenuItem value={`deactive`}>deactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                         </Button>
                            <Button type="submit" onClick={this.saveClass} color="primary">
                                Save
                        </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        );
    }
}
export default withStyles(useStyles)(Class_);

