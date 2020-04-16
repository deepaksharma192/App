import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Headers from '../../../src/HOC/Headers';
import Typography from '@material-ui/core/Typography';
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
import Icon from '@material-ui/core/Icon';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import EditIcon from '@material-ui/icons/Edit';
import { updateUserDetail } from '../../redux/action/userDetailsAction';

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
    },
    edit:{
        marginTop: '43px'
    }
});
class UserProfile extends Component {
    constructor(props){
        super(props)
        this.state={ showw:false, schoolname:"",schooladdress:"",AddressFirst:"",AddressSecond:"",Hobby:"",text:"",grade: "",number:'', firstName: " ", email: " ", zip: " ", country: " ", lastName: " ", state: " ", city: "",vall:null,read:true, statement:'You can edit this'}
        this.handleChange  = this.handleChange.bind(this)
        this.Edit  = this.Edit.bind(this)
        this.FormSubmit = this.FormSubmit.bind(this);
        this.onChanges = this.onChanges.bind(this)
        this.FormRef = React.createRef();
        this.schoolname = React.createRef();
        this.schooladdress = React.createRef();
        this.AddLinefirst = React.createRef();
        this.AddLinesecond = React.createRef();
        this.City = React.createRef();
        this.state = React.createRef();
        this.Hobbies = React.createRef();
        this.zip = React.createRef();
        this.text = React.createRef();
       
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
                lastName: this.props.user.lastName,
                city:this.props.user.city,
                state:this.props.user.state,
                number:this.props.user.number,
                zip:this.props.user.zip
            })
        }
    }

    onChanges(e) {
        this.setState({
            schoolname: this.schoolname.current.value,
            schooladdress: this.schooladdress.current.value,
            AddressFirst: this.AddLinefirst.current.value,
            AddressSecond: this.AddLinesecond.current.value,
            Hobby: this.Hobbies.current.value,
            city: this.City.current.value,
            state: this.state.current.value,
            zip: this.zip.current.value,
            text: this.text.current.value
            
        })
    }


    FormSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const form = {
            schoolname: this.schoolname.current.value,
            schooladdress: this.schooladdress.current.value,
            AddressFirst: this.AddLinefirst.current.value,
            AddressSecond: this.AddLinesecond.current.value,
            Hobby: this.Hobbies.current.value,
            city: this.City.current.value,
            state: this.state.current.value,
            zip: this.zip.current.value,
            text: this.text.current.value
        };

        updateUserDetail(form).then((res) => {
            this.props.updateProfile(res)
        })

    }

    async Edit(e){

        console.log(this.props.user.status)
        await this.setState({
            ...this.state,
            read:false,
            showw:true,
            city:'',
            state:'',
            zip:''
        })
        console.log(this.state.showw)

    }

    handleChange(e){
        this.setState({
            vall:e.target.value
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
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} md={10} className={classes.iconleft}>
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
                                    <Grid item xs={12} md={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.edit}
                                        startIcon={<EditIcon />}
                                        onClick={this.Edit}
                                    >
                                        Edit
                                    </Button>
                                    </Grid>
                                </Grid>     


                            </Grid>
                            <Grid item xs={12} className={classes.adjust}>
                                <Grid container>
                                    <Grid item xs={12} md={12}>
                                    {!this.state.showw ? <Typography align='left' color="primary">{this.state.statement}</Typography> : ''}
                                    <form onSubmit={this.FormSubmit} ref={this.FormRef}>
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
                                                    inputRef={this.schoolname} 
                                                    InputProps={{
                                                        readOnly:this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="Schooladdress"
                                                    defaultValue="School Address"
                                                    inputRef={this.schooladdress} 
                                                    InputProps={{
                                                        readOnly: this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="Address"
                                                    defaultValue="Address line 1"
                                                    inputRef={this.AddLinefirst} 
                                                    InputProps={{
                                                        readOnly:this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5}  className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="Address"
                                                    defaultValue="Address line 2"
                                                    inputRef={this.AddLinesecond} 
                                                    InputProps={{
                                                        readOnly: this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5}  className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="City"
                                                    
                                                    inputRef={this.City} 
                                                    value={this.state.city}
                                                    InputProps={{
                                                        readOnly: this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="State"
                                                    defaultValue="State"
                                                    inputRef={this.state} 
                                                    value={this.state.state}
                                                    InputProps={{
                                                        readOnly: this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="Hobbies"
                                                    defaultValue="Hobbies"
                                                    inputRef={this.Hobbies} 
                                                    InputProps={{
                                                        readOnly: this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="zip"
                                                    defaultValue="Pin Code"
                                                    value={this.state.zip}
                                                    inputRef={this.zip} 
                                                    InputProps={{
                                                        readOnly: this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                    onChange={this.onChanges}
                                                />

                                            </Grid>
                                            <Grid item xs={12} md={5} className={classes.mar}>
                                            {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                <TextField
                                                    id="Aspiration"
                                                    defaultValue="What you like to become"
                                                    multiline
                                                    rows={4}
                                                    inputRef={this.text}
                                                    InputProps={{
                                                        readOnly: this.state.read,
                                                    }}
                                                    fullWidth
                                                    variant="filled"
                                                />


                                            </Grid>
                                            <Grid item xs={12} md={2}></Grid>
                                            <Grid item xs={12} md={5} className={classes.mar} style={{textAlign:'left'}}>

                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Gender</FormLabel>
                                                    <RadioGroup style={{display:'inline-block'}} aria-label="gender" name="gender1" value={this.state.vall} onChange={this.handleChange}>
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