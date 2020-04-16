import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Headers from '../../../src/HOC/Headers';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mar:{
        margin:'15px auto'
    },
    topp: {
        margin: '25px'
    },
    input: {
        display: 'none',
    },
    iconleft: {
        textAlign: 'left'
    }
});
class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={grade: "",number:'', firstName: " ", email: " ", zip: " ", country: " ", lastName: " ", state: " ", city: "",value:null}
        this.handleChange  = this.handleChange.bind(this)
    }

    async  componentDidMount() {
        console.log(await this.props.getUserDetail());
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
                lastName: this.props.user.lastName,
                city:this.props.user.city,
                state:this.props.user.state,
                number:this.props.user.number,
                zip:this.props.user.zip
            })
        }
    }

    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        const { classes } = this.props;
    return (
        <div>
            <Grid container>
                <Grid item xs={12} className={classes.topp}>


                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/" >

                            <Chip
                                avatar={<HomeSharpIcon />}
                                label="KoolGuru"
                            />
                        </Link>
                        <Chip label="Dashboard" disabled />
                    </Breadcrumbs>

                </Grid>
                <Grid container>
                    <Grid item xs={12} md={2}>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Grid container>
                            <Grid item xs={12} className={classes.iconleft}>

                                <IconButton>
                                    <Avatar
                                        src={process.env.PUBLIC_URL + 'assets/images/applogo/logo.png'}
                                        style={{
                                            margin: "10px",
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: '50%',

                                        }}
                                    />
                                </IconButton>



                            </Grid>
                            <Grid item xs={12} className={classes.adjust}>
                                <Grid container>
                                    <Grid item xs={12} md={12}>
                                    <form>
                                        <Grid container>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="firstName"
                                                    defaultValue="First Name"
                                                    value={this.state.firstName}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="lastName"
                                                    defaultValue="Last Name"
                                                    value={this.state.lastName}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="number"
                                                    defaultValue="Mobile Number"
                                                    value={this.state.number}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="email"
                                                    defaultValue="Email Address"
                                                    value={this.state.email}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="SchoolName"
                                                    defaultValue="School Name"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="Schooladdress"
                                                    defaultValue="School Address"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="Address"
                                                    defaultValue="Address line 1"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5}  className={classes.mar}>
                                                <TextField
                                                    id="Address"
                                                    defaultValue="Address line 2"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5}  className={classes.mar}>
                                                <TextField
                                                    id="City"
                                                    defaultValue="City"
                                                    value={this.state.city}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="State"
                                                    defaultValue="State"
                                                    value={this.state.state}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="Hobbies"
                                                    defaultValue="Hobbies"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="zip"
                                                    defaultValue="Pin Code"
                                                    value={this.state.zip}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                                <TextField
                                                    id="Aspiration"
                                                    defaultValue="What you like to become"
                                                    multiline
                                                    rows={4}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />


                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar} style={{textAlign:'left'}}>

                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Gender</FormLabel>
                                                    <RadioGroup style={{display:'inline-block'}} aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleChange}>
                                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                    </RadioGroup>
                                                </FormControl>

                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} className={classes.mar}>
                                            <Button type="submit" variant="contained" color="primary">
                                                Save & Proceed
                                            </Button>
                                        </Grid>
                                        </form>
                                    </Grid>
                                    

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2}>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
    }
}

export default Headers(withStyles(useStyles)(UserProfile))