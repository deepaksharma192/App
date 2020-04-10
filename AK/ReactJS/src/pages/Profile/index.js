import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { updateUserDetail } from '../../redux/action/userDetailsAction';
import SweetAlert from 'sweetalert2-react';
import jumpTo from '../../modules/Navigation'
import Headers from '../../HOC/Headers'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    root: {
      display: 'flex',
      width: '100%',
     
      
    },
    upp:{
      margin: '88px auto',
    },
    leftt:{
      padding: '10px 11px',
    },
    leftt_1:{
      padding:'0px 11px',
    },
    mar:{
      margin:'10px auto',
    },
    backcolor:{
        backgroundColor:'#F0ECEA'
    }

});
export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, firstName: " ", email: " ", zip: " ", country: " ", lastName: " ", state: " ", city: " " }
        this.FormSubmit = this.FormSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.onChanges = this.onChanges.bind(this)
        this.FormRef = React.createRef();
        this.emailRef = React.createRef();
        // this.cityRef = React.createRef();
        this.zipRef = React.createRef();
        // this.countryRef = React.createRef();
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        // this.stateRef = React.createRef();
    }
    async  componentDidMount() {
        await this.props.getUserDetail();
        this.updateAllfField();
    }
    async  componentDidUpdate() {

    }
    updateAllfField() {
        if (this.props.user.status !== "pending") {
            this.setState({
                email: this.props.user.email,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                zip: this.props.user.zip,
                // city: this.props.user.city,
                // country: this.props.user.country,
                // state: this.props.user.state
            })
        }
    }
    onChanges(e) {
        this.setState({
            email: this.emailRef.current.value,
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            zip: this.zipRef.current.value,
            // city: this.cityRef.current.value,
            // country: this.countryRef.current.value,
            // state: this.stateRef.current.value
        })
    }
     validate(name, email, password) {
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];
      
        if (name.length === 0) {
          errors.push("Name can't be empty");
        }
      
        if (email.length < 5) {
          errors.push("Email should be at least 5 charcters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
          errors.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1) {
          errors.push("Email should contain at least one dot");
        }
      
        if (password.length < 6) {
          errors.push("Password should be at least 6 characters long");
        }
      
        return errors;
      }
    FormSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const form = {
            email: this.emailRef.current.value,
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            zip: this.zipRef.current.value,
            // city: this.cityRef.current.value,
            // country: this.countryRef.current.value,
            // state: this.stateRef.current.value
        };
        updateUserDetail(form).then((res) => {
            this.setState({
                show: true
            })
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <SweetAlert
                    show={this.state.show}
                    title="Alert"
                    text="Successfully updated your profile."
                    onConfirm={() => { this.setState({ show: false }); jumpTo('/dashboard') }}
                />
                <Container maxWidth="md" >
                <Grid container className={classes.upp}>
                        <Grid item xs={2} md={2}></Grid>
                        <Grid item xs={8} md={8}>
                            <Paper className={classes.backcolor}>
                                <Typography align="left" className={classes.leftt} variant="h5" gutterBottom>
                                   Let's Start Now!
                                   <Typography variant="h5" align="left">
                                   Start your class today
                                   </Typography>
                                </Typography>

                               
                                <Grid container justify="center">
                                    <Grid item xs={10}>
                                    <form onSubmit={this.FormSubmit} ref={this.FormRef}>
                                        <Grid container>
                                            <Grid item xs={12} className={classes.mar}>
                                                <TextField
                                                        required
                                                        inputRef={this.firstNameRef}
                                                        id="firstName"
                                                        value={this.state.firstName}
                                                        name="firstName"
                                                        label="First name"
                                                        fullWidth
                                                        autoComplete="fname"
                                                        onChange={this.onChanges}
                                                        type="text"
                                                        inputProps={{
                                                            minLength:5,
                                                            maxLength: 12,
                                                          }}
                                                        onInput={(e) => { e.target.value = e.target.value.replace(/[^a-z]/g, '') }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} className={classes.mar}>
                                                <TextField
                                                    required
                                                    value={this.state.lastName || ""}
                                                    inputRef={this.lastNameRef}
                                                    id="lastName"
                                                    name="lastName"
                                                    label="Last name"
                                                    fullWidth
                                                    autoComplete="lname"
                                                    onChange={this.onChanges}
                                                    inputProps={{
                                                        minLength:5,
                                                        maxLength: 12,
                                                      }}
                                                    onInput={(e) => { e.target.value = e.target.value.replace(/[^a-z]/g, '') }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} className={classes.mar}>
                                                <TextField
                                                    required
                                                    value={this.state.email || ""}
                                                    inputRef={this.emailRef}
                                                    id="email"
                                                    name="email"
                                                    label="E-mail Address"
                                                    fullWidth
                                                    autoComplete="E-mail"
                                                    onChange={this.onChanges}
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={12} className={classes.mar}>
                                                <TextField
                                                    required
                                                    value={this.state.zip || ""}
                                                    inputRef={this.zipRef}
                                                    id="zip"
                                                    name="Grade"
                                                    label="Grade"
                                                    fullWidth
                                                    // autoComplete="billing postal-code"
                                                    onChange={this.onChanges}
                                                    inputProps={{
                                                        minLength:5,
                                                        maxLength: 12,
                                                      }}
                                                    onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} className={classes.mar}>
                                                <Button type="submit" variant="contained" color="primary">
                                                    Save & Proceed
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                    </Grid>
                                </Grid>
                            </Paper>
                        
                        </Grid>
                        <Grid item xs={2} md={2}></Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Headers(withStyles(useStyles)(Profile));