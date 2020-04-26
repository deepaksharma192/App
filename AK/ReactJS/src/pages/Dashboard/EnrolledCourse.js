import React from 'react';
import { connect } from "react-redux";
import { getAllCourses } from './../../redux/action/courseAction'
import jumpTo from "../../modules/Navigation"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Carausel from './Carousel';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import PieChart from './PieChart';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 'auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    marg: {
        margin: '30px auto'
    },
    topp: {
        margin: '20px auto'
    },
    marginn: {
        margin: '35px'
    },


    paper: {
        marginTop: '1ch',
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
});

const cardData = {
    data: [
        {
            id: 1,
            img: '/images/download.jpg',
            title: 'Our Students',
            numbers: '205',
            author: 'Course 1',
        },
        {
            id: 2,
            img: '/images/download.jpg',
            title: 'Learning Hours',
            numbers: '35',
            author: 'Course 2',
        },
        {
            id: 3,
            img: '/images/download.jpg',
            title: 'Spent Time',
            numbers: '32',
            author: 'Course 3',
        },
        {
            id: 4,
            img: '/images/download.jpg',
            title: 'App Download',
            numbers: '154K',
            author: 'Course 4',
        }
    ]
}

class EnrolledCourse extends React.Component {
    viewCourseById(id) {
        jumpTo('/player/' + id);
    }
    constructor(props) {
        super(props);
        this.state = { courseList: [], pieOpen: false, pieSubject: "", pieData: [], selectPie:{}}
        this.viewCourseById = this.viewCourseById.bind(this)
        this.pieSetectClose = this.pieSetectClose.bind(this)
        this.pieSetectOpen = this.pieSetectOpen.bind(this)
        this.pieSetectChange = this.pieSetectChange.bind(this)
        this.getAllSubjectStatus = this.getAllSubjectStatus.bind(this);
        this.subjectHTML = this.subjectHTML.bind(this)
    }
    pieSetectClose() {
        this.setState({
            ...this.state,
            pieOpen: false
        })
    }
    pieSetectOpen() {
        this.setState({
            ...this.state,
            pieOpen: true
        })
    }

    pieSetectChange(e) {
        this.setState({
            ...this.state,
            selectPie:{},
        }, () => {
            let getSelect = this.state.pieData.filter(item=>{
                return e.target.value === item.subject;
            })
            this.setState({
                ...this.state,
                selectPie:getSelect[0],
                pieSubject:getSelect[0].subject,
                pieOpen: false
            })
        })
        
    }
    async getAllSubjectStatus() {
        const data = await this.props.AllBookmarkForUser();
        let statusData = this.props.course.subjects.map((sub) => {
            let coursePer = sub.courses.reduce((accumulator, course) => {
                let isStatus = data.find(function (element) {
                    return element.cid === course._id;
                });
                let completion = isStatus ? isStatus.completion : 0;
                return parseInt(accumulator) + parseInt(completion)
            }, 0)
            let p = ((coursePer) * 100 / (sub.courses.length * 100));
            return { subject: sub.subject_name, completion: p }
        })
        this.setState({
            ...this.state,
            pieData: statusData,
            selectPie:statusData[0],
            pieSubject:statusData[0].subject
        }, () => {
           
           // console.log(this.state.pieData)
        })
    }
    subjectHTML() {
        const { classes } = this.props;
        let courseData = this.props.course.subjects.map((v, i) => {
            return (
                <Grid item xs={12} key={i} className={classes.marg}>
                    <Typography variant="h5" align="left">{v.subject_name}</Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={1}>
                                <Grid container>
                                    <Grid xs={12}>
                                        <Carausel tile={v.courses} viewCourseById={this.viewCourseById} />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
        this.setState({
            courseList: courseData
        })
    }
    async componentDidMount() {
        await this.props.getAllCourses();

        if (this.props.course) {
            this.getAllSubjectStatus()
            this.subjectHTML()
        }

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.marg}>
                    <Grid item xs={10} md={10} className={classes.topp}>
                        <Grid container>

                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" href="/" >

                                    <Chip
                                        avatar={<HomeSharpIcon />}
                                        label="KoolGuru"
                                    />
                                </Link>
                                <Chip label="Dashboard" disabled />
                            </Breadcrumbs>
                        </Grid>
                        <Grid container className={classes.marg}>
                            <Grid item xs={12} md={6} >
                                <Grid container spacing={2}>
                                    {cardData.data.map(tile => (
                                        <Grid key={tile.id} item xs={12} md={6}>
                                            <Card >
                                                <CardContent>
                                                    <Typography align="left" variant="h6" color="textSecondary" gutterBottom>
                                                        {tile.title}
                                                    </Typography>
                                                    <Typography variant="h2" align="center" component="h2">
                                                        {tile.numbers}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Grid container>
                                    <Grid item xs={12} md={12} className={classes.marginn}>
                                        {Object.keys(this.state.selectPie).length && <> <FormControl className={classes.formControl}>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={this.state.pieOpen}
                                                onClose={this.pieSetectClose}
                                                onOpen={this.pieSetectOpen}
                                                value={this.state.pieSubject}
                                                onChange={this.pieSetectChange}
                                          >
                                              {this.state.pieData.map((item,ii)=>{
                                                  return <MenuItem key={ii} value={item.subject}>{item.subject}</MenuItem>
                                              })}
                                            </Select>
                                        </FormControl>
                                            <PieChart selectPie={this.state.selectPie}/>
                                        </>}
                                        {!Object.keys(this.state.selectPie).length && <CircularProgress size={36} />}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                            {this.state.courseList}
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    course: state.course.course
})
const mapDispatchToProps = {
    getAllCourses
}

export default connect(mapStoreToProps, mapDispatchToProps)(withStyles(useStyles)(EnrolledCourse));
