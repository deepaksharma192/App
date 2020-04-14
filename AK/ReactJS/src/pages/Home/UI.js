import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FirstScreen from './homefirstScreen';
import Secondscreen from './homesecondScreen';
import Thirdscreen from './homethirdScreen';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const drawerWidth = 240;



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  root_card: {
    maxWidth: 400,
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },

  content: {
    flexGrow: 1,
   
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  helpContainer:{
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/home_bg.jpg'})`,
    backgroundSize: 'cover'
  },
  img_1:{
    width:'80%',
  },
  img_1_1:{
  
  },
  img_2:{
    width:'100%',
  },

}));

export default function UI(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className={classes.container}>
            <Grid container spacing={3} className={classes.helpContainer}>

                <Grid item xs={12} md={4}>
                    <Grid container>
                      
                        <Grid item xs={12} md={12}>
                        <Slide left>
                          <img  alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/muse/4.png'} />
                          </Slide>
                        </Grid>
                     
                      <Grid item xs={12} md={3} style={{textAlign:'center',width:'30%'}}>
                       
                      </Grid>
                      <Grid item xs={12} md={3} style={{textAlign:'center',width:'30%'}}>
                      <Slide top>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                        <img  alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/google.png'} />
                        </Box>
                        </Slide>
                      </Grid>
                      <Grid item xs={12} md={3} style={{textAlign:'center'}}>
                      <Slide top>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                          <img  alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/appstore.png'} />
                        </Box>
                        </Slide>
                      </Grid>
                      <Grid item xs={12} md={3} style={{textAlign:'center',width:'30%'}}>
                        
                      </Grid>

                      <Grid  item xs={12} md={3} style={{textAlign:'center'}}>
                        
                      </Grid>
                      <Grid  item xs={12} md={2} style={{textAlign:'center'}}>
                      <Slide top>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                        <img   alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/social_1.png'} />
                        </Box>
                        </Slide>
                      </Grid>
                      <Grid item xs={12} md={2} style={{textAlign:'center'}}>
                      <Slide top>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                          <img  alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/social_2.png'} />
                        </Box>
                        </Slide>
                      </Grid>
                      <Grid item xs={12} md={2} >
                      <Slide>
                        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                          <img  alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/social_3.png'} />
                          </Box>
                          </Slide>
                      </Grid>
                      <Grid  item xs={12} md={3} style={{textAlign:'center'}}>
                        
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Zoom bottom>
                      <Box style={{marginTop:'145px'}}>
                      <img className={classes.img_2} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/roket_image.png'} />
                      </Box>
                    </Zoom>
                  </Grid>
                  <Grid item xs={12} md={4}>
                  <Box style={{marginTop:'180px'}}>
                  <Slide right>
                    <Typography variant="h3" color="inherit" align="left" className={classes.fontt}>
                      What is Lorem Ipsum
                    </Typography>
                    <Typography variant="h6" color="inherit" align="left" className={classes.fontt_1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    </Slide>
                    </Box>
                  </Grid>

              
           
          </Grid>
          <Grid container spacing={3}>

            <FirstScreen />
          </Grid>
          <Grid container spacing={3}>
            <Secondscreen />
          </Grid>

          <Grid container spacing={3}>
            <Thirdscreen />
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}