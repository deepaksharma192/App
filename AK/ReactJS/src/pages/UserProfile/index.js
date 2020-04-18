import React, { Component } from 'react';
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
import { updateUserDetail } from '../../redux/action/userDetailsAction';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const grade = [
    'Class1',
    'Class2',
    'Class3',
    'Class4',
    'Class5',
    'Class6',
    'Class7',
    'Class8'

];
const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mar: {
        margin: '15px auto'
    },
    topp: {
        margin: '25px'
    },
    divider: {
        margin: '40px auto'
    },
    input: {
        display: 'none',
    },
    iconleft: {
        textAlign: 'left'
    },
    edit: {
        marginTop: '43px'
    },
    formControl: {
        width: '100%'
    }
});
class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = { setperson: [], personName: null, schoolname: "", schooladdress: "", AddressFirst: "", AddressSecond: "", Hobby: "", text: "", grade: "", number: '', firstName: " ", email: " ", zip: " ", country: " ", lastName: " ", state: " ", city: "", vall: null, read: true, }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeMultiple = this.handleChangeMultiple.bind(this)

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
console.log(this.props.grade)
    }
    async  componentDidUpdate() {

    }
    updateAllfField() {
        if (this.props.user.status !== "pending") {
            this.setState({
                email: this.props.user.email,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                city: this.props.user.city,
                state: this.props.user.state,
                number: this.props.user.number,
                zip: this.props.user.zip
            })
        }
    }

    handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.setState({
            ...this.state,
            personName:value
        })
      };

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
        console.log(this.props)
        // const form = {
        //     schoolname: this.schoolname.current.value,
        //     schooladdress: this.schooladdress.current.value,
        //     AddressFirst: this.AddLinefirst.current.value,
        //     AddressSecond: this.AddLinesecond.current.value,
        //     Hobby: this.Hobbies.current.value,
        //     city: this.City.current.value,
        //     state: this.state.current.value,
        //     zip: this.zip.current.value,
        //     text: this.text.current.value,
        //     class: this.state.grade
        // };
        // debugger
        // this.props.updateUserDetailAll(form).then((res) => {
        //     this.props.updateProfile(res)
        // })
    }
    handleChange(e) {
        this.setState({
            ...this.state,
            vall: e.target.value,
            grade: e.target.value
        })
    }
    render() {
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

                                    </Grid>


                                </Grid>
                                <Grid item xs={12} className={classes.adjust}>
                                    <Grid container>
                                        <Grid item xs={12} md={12}>
                                            {!this.state.showw ? <Typography align='left' color="primary">{this.state.statement}</Typography> : ''}
                                            <form onSubmit={this.FormSubmit} ref={this.FormRef}>
                                                <Grid container>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        <Typography align="left">First Name</Typography>
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
                                                        <Typography align="left">Last Name</Typography>
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
                                                        <Typography align="left">Mobile Number</Typography>
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
                                                        <Typography align="left">Email Address</Typography>
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
                                                    <Grid item xs={12} md={5} className={classes.mar} style={{ textAlign: 'left' }}>

                                                        <FormControl component="fieldset">
                                                            <FormLabel component="legend">Gender</FormLabel>
                                                            <RadioGroup style={{ display: 'inline-block' }} aria-label="gender" name="gender1" value={this.state.vall} onChange={this.handleChange}>
                                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                            </RadioGroup>
                                                        </FormControl>

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5}></Grid>
                                                    <Grid item xs={12} md={12} className={classes.divider}>
                                                        <Divider variant="fullWidth" />
                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                        <Typography align="left">Address Line 1</Typography>
                                                        <TextField
                                                            id="Address"
                                                            defaultValue="Address line 1"
                                                            inputRef={this.AddLinefirst}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                        <Typography align="left">Address Line2</Typography>
                                                        <TextField
                                                            id="Address"
                                                            defaultValue="Address line 2"
                                                            inputRef={this.AddLinesecond}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                        <Typography align="left">City</Typography>
                                                        <TextField
                                                            id="City"

                                                            inputRef={this.City}
                                                            value={this.state.city}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                        <Typography align="left">State</Typography>
                                                        <TextField
                                                            id="State"
                                                            defaultValue="State"
                                                            inputRef={this.state}
                                                            value={this.state.state}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                        <Typography align="left">Pincode</Typography>
                                                        <TextField
                                                            id="zip"
                                                            defaultValue="Pin Code"
                                                            value={this.state.zip}
                                                            inputRef={this.zip}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5}></Grid>
                                                    <Grid item xs={12} md={12} className={classes.divider}>
                                                        <Divider variant="fullWidth" />
                                                    </Grid>

                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                        <Typography align="left">Hobbies</Typography>
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="demo-mutiple-checkbox-label"></InputLabel>
                                                            <Select
                                                                labelId="demo-mutiple-checkbox-label"
                                                                id="demo-mutiple-checkbox"
                                                                // multiline
                                                                value={this.state.personName}
                                                                onChange={this.handleChangeMultiple}
                                                                input={<Input />}
                                                                renderValue={(selected) => selected.join(', ')}
                                                                MenuProps={MenuProps}

                                                            >
                                                                {names.map((name) => (
                                                                    <MenuItem key={name} value={name}>
                                                                        {/* <Checkbox checked={this.state.personName.indexOf(name) > -1} /> */}
                                                                        <ListItemText primary={name} />
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>


                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>

                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        {!this.state.showw ? null : <Typography align='left' color="primary">{this.state.statement}</Typography>}
                                                        <Typography align="left">Aspiration</Typography>
                                                        <TextField
                                                            id="Aspiration"
                                                            defaultValue="What you like to become"
                                                            multiline
                                                            rows={4}
                                                            inputRef={this.text}

                                                            fullWidth
                                                            variant="filled"
                                                        />


                                                    </Grid>
                                                    <Grid item xs={12} md={12} className={classes.divider}>
                                                        <Divider variant="fullWidth" />
                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        <Typography align="left">School Name</Typography>
                                                        <TextField
                                                            id="SchoolName"
                                                            defaultValue="School Name"
                                                            inputRef={this.schoolname}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                                                            <Typography align="left">Grade</Typography>
                                                            {/* <Select
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
                                                        </Select> */}
                                                        </FormControl>
                                                    </Grid>


                                                    <Grid item xs={12} md={2}></Grid>

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