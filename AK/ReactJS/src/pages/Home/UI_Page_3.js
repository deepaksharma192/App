import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
const useStyles = theme => ({

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
        background:'#264d73',
        width:'100%',
        height:'auto',
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

      colorr:{
          color:'#fff'
      },
      colorr_set:{
        color:'#fff',
        fontSize:'10px',
    },
      backk:{
          background:'#fff',
          borderRadius:'5px',
          
      },
      movv:{
          marginTop:'5px',
      },
      movv_1:{
        marginTop:'58px',
    },
    movv_2:{
        marginTop:'28px',
    },
    movv_3:{
        marginTop:'30px',
    },
    shiftt:{
        margin:'20px auto',
    }
  });

  
class UIPage3 extends Component {
    render() {
        const { classes } = this.props;
      return (
          <div className={classes.root}>
              <Container maxWidth="xl" className={classes.container}>
                    <Grid container className={classes.backgroundd}>

                        <Grid item xs={12} md={12}>
                            <Typography className={classes.colorr} variant="h5" align="center">
                                Book your free demo now!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                        <Grid container>
                            <Grid item xs={12} md={3}>
                            </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container>
                                        <Grid item xs={12} md={8}>
                                      
                                        <TextField
                                            className={classes.backk}
                                            id="outlined-full-width"
                                            label=""
                                            style={{ margin: 8 }}
                                            placeholder="Enter your mobile number"
                                            helperText=""
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            
                                            />
                                          
                                        </Grid>
                                        
                                        <Grid item xs={12} md={4} className={classes.movv}>
                                        <Button className={classes.sizee} variant="contained" color="primary">
                                            Book Your Demo
                                          </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            <Grid item xs={12} md={3}>
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} className={classes.shiftt}>
                            <Grid container spacing={1}>
                                
                                <Grid item xs={12} md={9} >
                                    <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                                    <Grid container>
                                        <Grid item xs={12} md={3}>
                                        
                                            <Button display={{ xs: 'none' }} className={classes.colorr_set} href="#text-buttons" color="primary">
                                                KoolGuru
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Home
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Aboutus
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Features
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Testimonials
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Careers
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Contact Us
                                            </Button>
                                          
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Terms and Policies
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Privacy Policy
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Terms of Services
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Payments and Refunds
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Sitemap
                                            </Button><br/>

                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Quick Links
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Login
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Book A Demo
                                            </Button><br/>
                                            <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                Test My System
                                            </Button><br/>
      
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Grid container>
                                                <Grid item xs={12} md={6}>
                                                <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Syllabus
                                                        </Button><br/>
                                                    
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Maths
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                        Class IV
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class VI
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            English
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class IV
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class VI
                                                        </Button>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Science
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class IV
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class VI
                                                        </Button>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                        <Box className={classes.movv_1}>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class IV
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class VI
                                                        </Button>
                                                        </Box>
                                                        <Box className={classes.movv_2}>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class IV
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class VI
                                                        </Button>
                                                        </Box>
                                                        <Box className={classes.movv_3}>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class IV
                                                        </Button><br/>
                                                        <Button className={classes.colorr_set} href="#text-buttons" color="primary">
                                                            Class VI
                                                        </Button>
                                                        </Box>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                     </Box>           
                                </Grid>

                                <Grid item xs={12} md={2}>

                                <img  alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/applogo/KG_btm_1.png'} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
          </div>
      );
    }
  }

  UIPage3.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };


export default withWidth()(withStyles(useStyles)(UIPage3))