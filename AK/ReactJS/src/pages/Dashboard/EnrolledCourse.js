import React from 'react';
import { connect } from "react-redux";
import { getAllCourses } from './../../redux/action/courseAction'
import jumpTo, { go } from "../../modules/Navigation"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Barchart from './Barchart';
import Carausel from './Carousel';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
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
        margin: '10px auto'
    },
    topp: {
        margin: '20px auto'
    },
    marginn: {
        margin: '35px'
    },


    paper: {
        marginTop: '1ch',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
        jumpTo('/player/' + id)
        go('/player/' + id)

    }
    constructor(props) {
        super(props)

        this.state = { courseList: [] }
        this.viewCourseById = this.viewCourseById.bind(this)
    }
    async componentDidMount() {
        await this.props.getAllCourses();
        const { classes } = this.props;
        if (this.props.course) {
            let courseData = this.props.course.subjects.map((v, i) => {
                return (
                    <Grid item xs={12} key={i}>
                        <Typography variant="h5" align="left">{v.subject_name}</Typography>
                        <Paper className={classes.paper} elevation={1}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Carausel tile={v.courses} viewCourseById={this.viewCourseById} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })
            this.setState({
                courseList: courseData
            })
        }

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container className={classes.marg}>
                    <Grid item xs={10} md={10} className={classes.topp}>
                        <Grid container  >

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
                        <Grid container >
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
                                        <Barchart />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
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
