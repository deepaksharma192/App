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
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

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
        maxWidth: 400,
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

  });


class UIPage1 extends Component {
    render() {
        const { classes } = this.props;
      return (
          <div className={classes.root}>
              <Container maxWidth="xl" className={classes.container}>
              <Grid container>
              
                <Box className={classes.pos}>
                    <Box>
                        <Typography variant="h5" color="inherit" align="left" className={classes.fontt_1}> 
                            What we teach
                        </Typography> 

                    </Box>
                    <Box>
                        <Typography variant="h6" color="textSecondary" align="left"> 
                            Currently Offering Classes 5 to 8, CBSE Board
                        </Typography> 
                    </Box>
                    </Box>
              
              </Grid>
              <Grid container justify = "center">
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={12} md={3}>
                            <Grid container>
                                <Grid  style={{textAlign:'right'}}>
                                <Icon>
                                    <GroupIcon />
                                </Icon>
                                </Grid>
                                <Grid item xs>
                                <Typography className={classes.fontt_2}>
                                    Interactive live classes
                                </Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                <Grid item xs={12} md={3}>
                <Grid container>
                    <Grid  style={{textAlign:'right'}}>
                    <Icon>
                        <GroupIcon />
                    </Icon>
                    </Grid>
                    <Grid item xs>
                    <Typography className={classes.fontt_2}>
                       Mapped to Syllabus
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                <Grid container>
                    <Grid  style={{textAlign:'right'}}>
                    <Icon>
                        <GroupIcon />
                    </Icon>
                    </Grid>
                    <Grid item xs>
                    <Typography className={classes.fontt_2}>
                        Interactive live classes
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                <Grid container>
                    <Grid  style={{textAlign:'right'}}>
                    <Icon>
                        <GroupIcon />
                    </Icon>
                    </Grid>
                    <Grid item xs>
                    <Typography className={classes.fontt_2}>
                        Mapped to Syllabus
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.marg}>
                <Grid item xs={12} sm={4}>
                <Flip left>
                <Card className={classes.root_card_cont}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'assets/images/mathematics.png'}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" align="left" className={classes.fontt_1}>
                            Mathematics
                        </Typography>
                        <Box style={{margin:'20px auto'}}>
                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                Batches start from June 15<br/>
                                Three times a week, 1hr session
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={classes.fontt_2}>
                            View Syllabus
                        </Button>

                    </CardActions>
                    <CardActions>

                        <Button variant="outlined" size="small" color="primary" className={classes.fontt_2}>
                            Book Your Demo
                        </Button>
                    </CardActions>
                    </Card>
                    </Flip>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Flip left>
                <Card className={classes.root_card_cont}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'assets/images/english.png'}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" align="left" className={classes.fontt_1}>
                            English
                        </Typography>
                        <Box style={{margin:'20px auto'}}>
                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                Batches start from June 15<br/>
                                Three times a week, 1hr session
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={classes.fontt_2}>
                            View Syllabus
                        </Button>

                    </CardActions>
                    <CardActions>

                        <Button variant="outlined" size="small" color="primary" className={classes.fontt_2}>
                            Book Your Demo
                        </Button>
                    </CardActions>
                    </Card>
                    </Flip>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Flip left>
                <Card className={classes.root_card_cont}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'assets/images/science.png'}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" align="left" className={classes.fontt_1}>
                            Science
                        </Typography>
                        <Box style={{margin:'20px auto'}}>
                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                Batches start from June 15<br/>
                                Three times a week, 1hr session
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </Box>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={classes.fontt_2}>
                            View Syllabus
                        </Button>

                    </CardActions>
                    <CardActions>

                        <Button variant="outlined" size="small" color="primary" className={classes.fontt_2}>
                            Book Your Demo
                        </Button>
                    </CardActions>
                    </Card>
                    </Flip>
                </Grid>
              </Grid>
              <Grid container className={classes.marg_1}>
                <Grid item xs>
                    <Typography variant="h6" color="inherit"  align="left" className={classes.fontt_1}>
                        Testimonials
                    </Typography>
                </Grid>
                <Grid container justify="center" className={classes.marg_1}>
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                            <Slide left>
                                <Card className={classes.root_card_cont_1}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media_1}
                                        image={process.env.PUBLIC_URL + 'assets/images/icons8-quote-left-40.png'}
                                    />
                                    <CardContent>
         
                                    <Box>
                                        <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Typography>
                                    </Box>

                                    </CardContent>
                                </CardActionArea>


                                </Card>
                                </Slide>
                                <Slide left>
                                <Card className={classes.root_card_cont_1}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media_1}
                                        image={process.env.PUBLIC_URL + 'assets/images/icons8-quote-left-40.png'}
                                    />
                                    <CardContent>
         
                                    <Box>
                                        <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Typography>
                                    </Box>

                                    </CardContent>
                                </CardActionArea>


                                </Card>
                                </Slide>
                                <Slide>
                                <Card className={classes.root_card_cont_1}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media_1}
                                        image={process.env.PUBLIC_URL + 'assets/images/icons8-quote-left-40.png'}
                                    />
                                    <CardContent>
         
                                    <Box>
                                        <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Typography>
                                    </Box>

                                    </CardContent>
                                </CardActionArea>


                                </Card>
                                </Slide>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <Slide right>
                                <Card className={classes.root_card_cont_2}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media_1}
                                        image={process.env.PUBLIC_URL + 'assets/images/icons8-quote-left-40.png'}
                                        
                                        />
                                        <CardContent>
            
                                        <Box>
                                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        </Box>

                                        </CardContent>
                                    </CardActionArea>


                                </Card>
                            </Slide>
                            <Slide right>
                                <Card className={classes.root_card_cont_2}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media_1}
                                        image={process.env.PUBLIC_URL + 'assets/images/icons8-quote-left-40.png'}
                                        
                                        />
                                        <CardContent>
            
                                        <Box>
                                            <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        </Box>

                                        </CardContent>
                                    </CardActionArea>


                                </Card>
                                </Slide>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
              </Grid>
              </Container>
          </div>
      );
    }
  }


export default withStyles(useStyles)(UIPage1)