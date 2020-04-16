import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  loginPopupContainer:{
    display: 'flex',
    height:'540px',
  },
  loginPopupFirstColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#F6F8FC',
    
  },
  firstColumnTitle:{
    position: 'relative',
    top: '15%',
    left: '11px',
    color: '#123965',
  },

  firstColumnImg: {
    position: 'relative',
    width: '230px',
    marginTop: '100%'
  },

  
  loginPopupSecondColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    
  },

  secondColumnImg: {
    position: 'relative',
    width: '200px',
    top: '10%'
  },
  secondColumnTitle: {
    position: 'relative',
    top: '10%',
    width: '80%',
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: '1.3',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 374,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    padding: '50% 10% 0 20%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function UI(props) {
  const classes = useStyles();
  const { isOtp,otp } = props;

  
  console.log(props)
  function LoginUI() {
    return (
      <div className={classes.loginPopupContainer}>
        <div className={classes.loginPopupFirstColumn}>
          <Typography component="h1" variant="h4" className={classes.firstColumnTitle} >
            Welcome to KoolGuru
          </Typography>

          <img className={classes.firstColumnImg} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/muse/muse_pose_7.png'} />
        </div>
        <div className={classes.loginPopupSecondColumn} >
          <img className={classes.secondColumnImg} alt="Kool Guru Logo" src={process.env.PUBLIC_URL + 'assets/images/applogo/KoolGuru_logo_2.png'} />
          <Typography component="h1" variant="h6" className={classes.secondColumnTitle}>
            Please enter your mobile number
          </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={props.err}
                    autoFocus
                    required
                    inputProps={{ minLength:10,maxLength: 10,min: 0, style: { textAlign: 'center' }}}
                    margin="dense"
                    id="number"
                    label="Enter Your Mobile Number"
                    type="text"
                    helperText="10 digit Mobile number required"
                    inputRef={props.numRef}
                    fullWidth
                    onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') }}
                    onChange={props.checkk}
                  />

                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={props.sendOtp}
              >
                Next
                </Button>

            </form>
          </div>
      </div>
    )
  }
  function OtpUI() {
    return (

      <div className={classes.loginPopupContainer}>
        <div className={classes.loginPopupFirstColumn}>
          <Typography component="h1" variant="h4" className={classes.firstColumnTitle} >
            Welcome to KoolGuru
          </Typography>

          <img className={classes.firstColumnImg} alt="Muse" src={process.env.PUBLIC_URL + 'assets/images/muse/muse_pose_7.png'} />
        </div>
        <div className={classes.loginPopupSecondColumn} >
          <img className={classes.secondColumnImg} alt="Kool Guru Logo" src={process.env.PUBLIC_URL + 'assets/images/applogo/KoolGuru_logo_2.png'} />
          <Typography component="h1" variant="h6" className={classes.secondColumnTitle}>
            Otp Verification {otp}
          </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                  error={props.err}
                  autoFocus
                  margin="dense"
                  id="otp"
                  label="Enter the Otp"
                  helperText="Please enter the correct otp password."
                  type="text"
                  inputRef={props.otpRef}
                  fullWidth
                 inputProps={{
                    maxLength: 4,
                  }}
                  onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') }}
                  onChange={props.otpChange}
                />

                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={props.verifyOtp}
                className={classes.submit}
              
              >
                Verify
              </Button>

            </form>
          </div>
      </div>

    )
  }
  return (
    <Container maxWidth="lg">
      {!isOtp && LoginUI()}
      {isOtp && OtpUI()}
    </Container>
  )
}
