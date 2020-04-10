import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Carousel from './Carausel';
const useStyles = theme => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    root: {
        display: 'flex',
        width: '100%',
      },
    pos:{
        margin:'40px',
        color:'#000',
    },
    marg:{
        margin:'15px auto',
    },
    marg_1:{
        margin:'35px auto',
    },
    container: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(4),
      },
    root_card_cont:{
        maxWidth: 500,
        marginRight:'20px',
      },
    root_card_cont_1:{
        maxWidth: 440,
        margin:'20px auto',
      },
    root_card_cont_2:{
        maxWidth: 540,
        margin: '25px auto',
      },
      media:{
        height: 140,
        
      },
      media_1:{
        height: 40,
        width:40,
        margin:'10px',
      },
      media_2:{
        height: 40,
        width:40,
        marginLeft:'400px',
      },
      img_1:{
        width:'85%',
      },
      img_2:{
        width:'35%',
        padding: '35px',
      },

  });

  
class UIPage2 extends Component {
    render() {
        const { classes } = this.props;
      return (
          <div className={classes.root}>
              <Container maxWidth="xl" className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center" className={classes.fontt_1}>
                                        KoolGuru in the news
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                <Box style={{margin:'10px auto'}}>
                                <Card className={classes.root_card_cont}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media_1}
                                        image={process.env.PUBLIC_URL + 'assets/images/icons8-quote-left-40.png'}
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>

                                        <Box>
                                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        </Box>
                                        </CardContent>
                                        <CardMedia
                                        className={classes.media_2}
                                        image={process.env.PUBLIC_URL + 'assets/images/icons8-get-quote-40.png'}
                                        title="Contemplative Reptile"
                                        align="right"
                                        />
                                    </CardActionArea>

                                    </Card>
                                </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.marg_1}>
                        <Grid item xs={12}>
                            <Typography align="left" variant="h6" className={classes.fontt_1}>
                                Sample Video
                            </Typography>
                        </Grid>
                        <Grid container className={classes.marg_1}>
                            
                                <Carousel />
                            
                            {/* <Grid item xs={12}>
                                <Grid container>
                                <Grid item xs>
                                    <Box>
                                    <img className={classes.img_2} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/left_arr.png'} />
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box>
                                    <img className={classes.img_1} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/course-1.png'} />
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box>
                                    <img className={classes.img_1} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/course-2.png'} />  
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box>
                                    <img className={classes.img_1} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/course-3.png'} /> 
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box>
                                    <img className={classes.img_1} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/course-4.png'} />
                                    </Box>
                                </Grid>
                                <Grid item xs>
                                    <Box>
                                    <img className={classes.img_2} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/right_arr.png'} />
                                    </Box>
                                </Grid>
                                </Grid>
                               
                            </Grid> */}
                        
                        </Grid>
                    </Grid>
                </Container>
          </div>
      );
    }
  }


export default withStyles(useStyles)(UIPage2)