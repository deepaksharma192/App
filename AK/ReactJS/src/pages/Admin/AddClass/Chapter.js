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
        this.state = { classes: [], subject: [], chapter: [], isOpen: false, selectClassId: '', selectSubjectId: '', cType: '' }
        this.listChapter = this.listChapter.bind(this);
        this.ItemClass = this.ItemClass.bind(this);
        this.handleClose = this.handleClose.bind(this)
        this.selectSubject = this.selectSubject.bind(this)
        this.AddPopup = this.AddPopup.bind(this);
        this.saveClass = this.saveClass.bind(this);
        this.selectClass = this.selectClass.bind(this);
        this.chapterNameRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.thumRef = React.createRef();
        this.statusRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.get_All_class) {
            this.setState({
                classes: this.props.get_All_class,
            })
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
    listChapter() {
        return (
            <List subheader={<li />}>
                {
                    this.state.chapter.map((item) => (
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
        let ctype = this.state.subject.find(res => {
            console.log(res, this.state.selectSubjectId)
            return res._id == this.state.selectSubjectId;
        })
        let data = {
            title: this.chapterNameRef.current.value,
            duration: "00:00:00",
            description: this.descriptionRef.current.value,
            subject_id: this.state.selectSubjectId,
            ctype: ctype.subject_name,
            thum: this.thumRef.current.value,
            status: this.statusRef.current.value
        }
        this.props.saveChapter_for_admin(data).then(res => {
            this.setState({
                chapter: res,
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
                        {this.state.selectClassId && <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.selectSubjectId}
                                onChange={this.selectSubject}
                            >
                                <MenuItem value=''>select</MenuItem>
                                {this.state.classes.length && this.ItemSubject()}
                            </Select>
                        </FormControl>}
                        {this.state.selectSubjectId && <Button variant="contained" color="secondary" onClick={this.AddPopup}>
                            Add new Chapter
                </Button>}
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.subject.length && this.listChapter()}
                        {!this.state.subject.length && <CircularProgress size={24} />}
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.isOpen}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <form noValidate autoComplete="off">
                        <DialogTitle id="alert-dialog-slide-title">Class Form</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                {/*  this.chapterNameRef = React.createRef();
        this.durationRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.ctypeRef = React.createRef();
        this.thumRef = React.createRef();
        this.statusRef = React.createRef(); */}
                                <TextField
                                    inputRef={this.chapterNameRef}
                                    id="outlined-secondary"
                                    label="Chapter Name"
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
                                    inputRef={this.thumRef}
                                    id="outlined-secondary"
                                    label="Thum URL"
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

