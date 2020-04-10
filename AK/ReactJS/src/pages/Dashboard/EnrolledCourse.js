import React from 'react';
import { connect } from "react-redux";
import {getAllCourses} from './../../redux/action/courseAction'
import jumpTo,{go} from "../../modules/Navigation"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dashchart from './dashboart_chart';
import Subjectfirst from './Dashboard_cources_data/subject_1';
import Subjectsecond from './Dashboard_cources_data/subject_2';


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
      marg:{
        margin:'50px auto'
      },
      topp:{
        margin:'20px auto'
      },
      marginn:{
        margin:'35px'
      },


    paper: {
        marginTop:'5ch',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });




const cardData = {
  
    data:[
  {
      id:1,
    img: '/images/download.jpg',
    title: 'Our Students',
    numbers: '205',
    author: 'Course 1',
  },
  {
      id:2,
    img: '/images/download.jpg',
    title: 'Learning Hours',
    numbers: '35',
    author: 'Course 2',
  },
  {
      id:3,
    img: '/images/download.jpg',
    title: 'Spent Time',
    numbers: '32',
    author: 'Course 3',
  },
  {
      id:4,
    img: '/images/download.jpg',
    title: 'App Download',
    numbers: '154K',
    author: 'Course 4',
  }

  ]
} 

const tileData = {
    heading:"Mathmatics",
    data:[
  {
      id:1,
    image: `${process.env.PUBLIC_URL + 'assets/images/download.jpg'}`,
    title: 'Biology',
    author: 'Course 1',
  },
  {
    id:2,
    image: `${process.env.PUBLIC_URL + 'assets/images/download.jpg'}`,
    title: 'Biology',
    author: 'Course 2',
  },
  {
    id:3,
    image: `${process.env.PUBLIC_URL + 'assets/images/download.jpg'}`,
    title: 'English',
    author: 'Course 3',
  },
  {
    id:4,
    image: `${process.env.PUBLIC_URL + 'assets/images/download.jpg'}`,
    title: 'Mathmatics',
    author: 'Course 4',
  },
  {
      id:5,
      image: `${process.env.PUBLIC_URL + 'assets/images/download.jpg'}`,
      title: 'Mathmatics',
      author: 'Course 5',
  },
  ]
} 


const tileData_1 = {
    heading:"Science",
    data:[
  {
      id:1,
    image: `${process.env.PUBLIC_URL + 'assets/images/science.jpg'}`,
    title: 'Biology',
    author: 'Course 1',
  },
  {
      id:2,
    image: `${process.env.PUBLIC_URL + 'assets/images/science.jpg'}`,
    title: 'Biology',
    author: 'Course 2',
  },
  {
      id:3,
      image: `${process.env.PUBLIC_URL + 'assets/images/science.jpg'}`,
    title: 'English',
    author: 'Course 3',
  },
  {
      id:4,
      image: `${process.env.PUBLIC_URL + 'assets/images/science.jpg'}`,
    title: 'Mathmatics',
    author: 'Course 4',
  },
  {
    id:5,
    image: `${process.env.PUBLIC_URL + 'assets/images/science.jpg'}`,
  title: 'Mathmatics',
  author: 'Course 5',
  },
  ]
} 

class EnrolledCourse extends React.Component{
    viewCourseById(id){
        jumpTo('/player/'+id)
        go('/player/'+id)

    }
    constructor(props){
        super(props)
        console.log(this.props)
        this.state ={courseList:[]}
        this.viewCourseById = this.viewCourseById.bind(this)
    }
    async componentDidMount() {
        await this.props.getAllCourses();
    }

    render(){
        const { classes } = this.props;
        let courseList = []

    

        if (this.props.course) {
            courseList = <Subjectsecond tile={this.props.course} course={this.viewCourseById}/>
            // courseList = this.props.course.map((item, i) => {
            //     return <Box key={i} style={{width:'20%',float:'left',height:'100%'}}>
            //                 <Box>
            //                 <Button variant="contained" onClick={()=>{this.viewCourseById(item._id)}} color="primary">
            //                     View
            //                 </Button>
            //                 <Typography align="center">{item.title}</Typography>
            //                 </Box>
                              

            //     </Box>
            // })
        }
        return (
            <div>


                    <Grid container className={classes.marg}>
                        <Grid item xs={12} md={3}>
                            <Grid container>
                                <Grid item xs={2} sm={2} md={2}>
                                    <Icon>
                                        <HomeSharpIcon />
                                    </Icon>
                                </Grid>
                                <Grid item xs={10} sm={10} md={10}>
                                    <Typography variant="h5" align="left">
                                        KoolGuru/ Dashboard
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10} md={10} className={classes.topp}>
                            <Grid container spacing={2}>
                                {cardData.data.map(tile => (
                                <Grid key={tile.id} item xs={12} md={3}>
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
                        <Grid item xs={12} md={9}>
                        </Grid>
                        <Grid item xs={12}  md={12}>
                            <Grid container>
                                <Grid item xs={12} md={8} className={classes.marginn}>
                                
                                    <Dashchart />
                                  
                                </Grid>
                                <Grid item xs={12} md={4}></Grid>
                            </Grid>
    
                        </Grid>
                        <Grid item xs={12} className={classes.marg}>
                        <Grid container>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                        <Typography variant="h5" align="left">{tileData.heading}</Typography>
                            <Paper className={classes.paper} elevation={3}>
                                <Grid container>
                                
                                    <Grid item xs={12}>
                                        <Subjectfirst tile={tileData}/>
                                    </Grid>
                                </Grid>

                                
                            </Paper>
                            </Grid>
                            <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.marg}>
                        <Grid container>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                        <Typography variant="h5" align="left">{tileData_1.heading}</Typography>
                            <Paper className={classes.paper} elevation={3}>
                                <Grid container>
                                
                                    <Grid item xs={12}>
                                        <Subjectfirst tile={tileData_1}/>
                                    </Grid>
                                </Grid>

                                
                            </Paper>
                            </Grid>
                            <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} className={classes.marg}>
                            <Grid container>

                                <Grid item xs={1}></Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="h5" align="left">{tileData_1.heading}</Typography>
                                            <Paper className={classes.paper} elevation={3}>
                                                <Grid container>
                                            
                                                    <Grid item xs={12}>
                                                       {courseList}
                                                    </Grid>
                                                </Grid>

                                            </Paper>
                                    </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>



                            {/* <Grid item xs={10}  >
                                <Paper className={classes.paper} elevation={3} style={{height:'20ch'}}>

                                    <Box  style={{width:'100%'}}>
                                        <Typography variant="h5" align="left" style={{marginLeft:'2ch', marginBottom:'2ch', marginTop:'2ch'}}>Cartoons</Typography>
                                        {courseList}
                                    </Box>
                                
                                </Paper>
                            </Grid> */}
                    </Grid>
            </div>
        )
    }
}

const mapStoreToProps = state => ({
    course:state.course.course
})
const mapDispatchToProps = {
    getAllCourses
}

export default connect(mapStoreToProps, mapDispatchToProps)(withStyles(useStyles)(EnrolledCourse));
