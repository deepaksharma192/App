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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsdata } from "../../redux/action/tokenAction";

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


class Testimonials extends Component {
    constructor(props){
        super(props)
    }
  state = {
    display: true,
    width: 530,
    margin:'0 auto',
    data:[]
  };

  componentDidMount() {
    testimonialsdata().then((res)=>{
        console.log(res)
        this.setState({
            ...this.state,
            data:res.testimonials
        })
        
    })
}
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,

          };
        const { classes } = this.props;
      return (
          <div className={classes.root}>
            <Grid item xs={12}>
                <Grid item xs>
                    <Typography variant="h6" color="inherit"  align="left" className={classes.fontt_1}>
                        Testimonials
                    </Typography>
                </Grid>
                <Grid container className={classes.marg_1}>
                    <Grid item xs={12} md={3}>

                    </Grid>
                    <Grid item xs={12} md={5}>
                    <div
                        style={{
                            width: this.state.width + "px",
                            display: this.state.display ? "block" : "none",
                            margin: this.state.margin 
                        }}
                        >
                        <Slider {...settings}>
                            {this.state.data.map((item)=>{
                            return  <Card key={item._id} className={classes.root_card_cont_1}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media_1}
                                image={process.env.PUBLIC_URL + 'assets/images/icons8-quote-left-40.png'}
                            />
                            <CardContent>
 
                            <Box>
                                <Typography variant="body2" color="textSecondary" component="p" align="left" className={classes.fontt_2}>
                                {item.content}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="primary" component="p" align="left" className={classes.fontt_2}>
                                {item.name}
                                </Typography>
                            </Box>
                            </CardContent>
                        </CardActionArea>


                        </Card>
                            })}

                        </Slider>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>

                    </Grid>
                </Grid>
            </Grid>
          </div>
      );
    }
  }


export default withStyles(useStyles)(Testimonials)