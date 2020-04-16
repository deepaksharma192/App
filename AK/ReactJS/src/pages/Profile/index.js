import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { updateUserDetail } from '../../redux/action/userDetailsAction';
import Headers from '../../HOC/Headers'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    upp: {
        margin: '88px auto',
    },
    leftt: {
        padding: '10px 11px',
    },
    leftt_1: {
        padding: '0px 11px',
    },
    mar: {
        margin: '10px auto',
    },
    backcolor: {
        backgroundColor: '#F0ECEA'
    }

});
export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grade: "", firstName: " ", email: " ", zip: " ", country: " ", lastName: " ", state: " ", city: " ",errors: [],err:true }
        this.FormSubmit = this.FormSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.onChanges = this.onChanges.bind(this)
        this.FormRef = React.createRef();
        this.emailRef = React.createRef();
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }
    async  componentDidMount() {
        await this.props.getUserDetail();
        await this.props.getAllClasses().then(res => {
        });
        this.updateAllfField();

    }
    async  componentDidUpdate() {

    }
    updateAllfField() {
        if (this.props.user.status !== "pending") {
            this.setState({
                email: this.props.user.email,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName
            })
        }
    }
    onChanges(e) {
        this.setState({
            email: this.emailRef.current.value,
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value
        })
    }
    validate(firstName, lastName, email, clas) {
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (firstName.length === 1) {
          errors.push("Please enter the firstname");
        }
        if (lastName.length === 1) {
            errors.push("Please enter the lastname");
        }

        if (!clas) {
          errors.push("Please select the grade");
        }
        if (!re.test(email) ) {
            // this is a valid email address
            // call setState({email: email}) to update the email
            // or update the data in redux store.
            errors.push("Enter a valid email address");
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
            class: this.state.grade,
        };

        const errors = this.validate(form.firstName, form.lastName, form.email, form.class);
        
        if(errors.length === 0){
            this.setState({
                err:false
            })
        }
        if (errors.length > 0) {
          this.setState({ errors });
          return;
        }
        else
        {
            updateUserDetail(form).then((res) => {
                this.props.updateProfile(res)
            })
        }

    }
    handleChange = event => {
        this.setState({
            grade: event.target.value
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>

                <Container maxWidth="md" >
                    <Grid container className={classes.upp}>
                        <Grid item xs={2} md={2}></Grid>
                        <Grid item xs={8} md={8}>
                            <Paper className={classes.backcolor}>
                                <Typography align="left" className={classes.leftt} variant="h5" gutterBottom>
                                    Let's Start Now!
                                   <Typography align="left">
                                        Start your class today
                                   </Typography>
                                </Typography>


                                <Grid container justify="center">
                                    <Grid item xs={10}>
                                    {this.state.err && this.state.errors.map(error => (
                                    <Typography  align="center" color="error" key={error}>{error}</Typography>
                                    ))}
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
                                                            minLength: 5,
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
                                                            minLength: 5,
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
                                                    <InputLabel id="demo-controlled-open-select-label">Grade*</InputLabel>
                                                    <Select
                                                        labelId="demo-controlled-open-select-label"
                                                        id="demo-controlled-open-select"
                                                        value={this.state.grade}
                                                        onChange={this.handleChange}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        {this.props.grade && this.props.grade.map((v) => {
                                                            return (
                                                                <MenuItem disabled={v.status === 'deactive'} key={v._id} value={v._id}>{v.className}</MenuItem>
                                                            )
                                                        })}
                                                    </Select>

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