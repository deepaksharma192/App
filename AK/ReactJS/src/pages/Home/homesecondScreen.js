import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
        paddingTop: theme.spacing(0),
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

  
class Secondscreen extends Component {
    render() {
        const { classes } = this.props;
      return (
          <div className={classes.root}>
              <Container maxWidth="xl" className={classes.container}>

                    <Grid container className={classes.marg_1}>
                        <Grid item xs={12}>
                            <Typography align="left" variant="h6" className={classes.fontt_1}>
                                Sample Video
                            </Typography>
                        </Grid>
                        <Grid container className={classes.marg_1}>
                            
                                <Carousel />
                            
                        </Grid>
                    </Grid>
                </Container>
          </div>
      );
    }
  }


export default withStyles(useStyles)(Secondscreen)