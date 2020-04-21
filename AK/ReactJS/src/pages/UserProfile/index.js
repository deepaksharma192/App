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
import { updateUserDetailAll } from '../../redux/action/userDetailsAction';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';

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
    'Watching Cricket',
    'Movie',
    'Listening music',
    'Reading',
    'Watching Football',
    'Driving',
    'Dressing',
    'Travelling',
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
    },
    adjust: {
        marginTop: '40px'
    },
    // CircularProgress:{
    //     position: "relative",
    //     top: "10px"
    //   }
});
class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = { progrss:false,showw:false,setperson: [], personName: [], schoolname: "", schooladdress: "", AddressFirst: "", AddressSecond: "", Hobby: "", text: "", grade: "", gender: "", number: '', firstName: " ", email: " ", zip: " ", country: " ", lastName: " ", state: " ", city: "", vall: null, read: true,statement:"All fields updated" }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.FormSubmit = this.FormSubmit.bind(this);
        this.onChanges = this.onChanges.bind(this)
        this.FormRef = React.createRef();
        this.schoolnameRef = React.createRef();
        this.schooladdress = React.createRef();
        this.AddLinefirstRef = React.createRef();
        this.AddLinesecondRef = React.createRef();
        this.CityRef = React.createRef();
        this.stateRef = React.createRef();
        this.HobbiesRef = React.createRef();
        this.zipRef = React.createRef();
        this.textRef = React.createRef();

    }

    async  componentDidMount() {
        await this.props.getUserDetail().then(res => {
            console.log(res.class)
            // this.setState({
            //     ...this.state,
            //     grade:res.class
            // })
        });
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
                city: this.props.user.city,
                state: this.props.user.state,
                number: this.props.user.number,
                zip: this.props.user.zip
            })
        }
    }



    onChanges(e) {
        this.setState({
            schoolname: this.schoolnameRef.current.value,
            AddressFirst: this.AddLinefirstRef.current.value,
            AddressSecond: this.AddLinesecondRef.current.value,
            Hobby: this.HobbiesRef.current.value,
            city: this.CityRef.current.value,
            state: this.stateRef.current.value,
            zip: this.zipRef.current.value,
            text: this.textRef.current.value

        })

    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }


    FormSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const form = {
            schoolname: this.schoolnameRef.current.value,
            AddressFirst: this.AddLinefirstRef.current.value,
            AddressSecond: this.AddLinesecondRef.current.value,
            Hobby: this.HobbiesRef.current.value,
            city: this.CityRef.current.value,
            state: this.stateRef.current.value,
            zip: this.zipRef.current.value,
            text: this.textRef.current.value,
            class: this.state.grade,
            gender: this.state.gender
        };

        this.props.updateUserDetailAll(form).then((res) => {
            this.setState({
                progress:true
            })
            setTimeout(() => {
                this.setState({
                    progress:false,
                    showw:true
                })
              }, 3000);

        })
    }
    handleChange(e) {
        this.setState({
            ...this.state,
            grade: e.target.value
        })
    }
    handleChange1(e) {
        this.setState({
            ...this.state,
            gender: e.target.value
        })
    }
    handleChange2(e) {
        this.setState({
            ...this.state,
            personName: e.target.value
        })
    }
    render() {
        const { classes } = this.props;
        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' />;
        }
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
                                            <Avatar

                                                style={{
                                                    margin: "30px",
                                                    width: "100px",
                                                    height: "100px",
                                                    borderRadius: '50%',

                                                }}
                                            >
                                                {imgPreview}
                                            </Avatar>
                                            <input accept="image/*" className={classes.input} onChange={this.uploadSingleFile} id="contained-button-file" type="file" />
                                            <label htmlFor="contained-button-file">
                                                <Button variant="contained" color="primary" component="span" size="small">
                                                    Upload profile pic
                                                </Button>
                                            </label>
                                        </Grid>

                                    </Grid>


                                </Grid>
                                <Grid item xs={12} className={classes.adjust}>
                                    <Grid container>
                                        <Grid item xs={12} md={12}>

                                            {this.state.showw && <Typography variant="h5" align='left' color="primary">{this.state.statement}</Typography>}
                                            {this.state.progress && <CircularProgress className={classes.CircularProgress} size={40} />}
                                            <form onSubmit={this.FormSubmit} ref={this.FormRef}>
                                                <Grid container>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        <Typography align="left">First Name</Typography>
                                                        <TextField
                                                            id="firstName"

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
                                                            <RadioGroup style={{ display: 'inline-block' }} aria-label="gender" name="gender1" value={this.state.gender} onChange={this.handleChange1}>
                                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                            </RadioGroup>
                                                        </FormControl>

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                                                            <Typography align="left">Grade</Typography>
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
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} md={12} className={classes.divider}>
                                                        <Divider variant="fullWidth" />
                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>

                                                        <Typography align="left">Address Line 1</Typography>
                                                        <TextField
                                                            id="Address"

                                                            inputRef={this.AddLinefirstRef}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>

                                                        <Typography align="left">Address Line2</Typography>
                                                        <TextField
                                                            id="Address"

                                                            inputRef={this.AddLinesecondRef}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>

                                                        <Typography align="left">City</Typography>
                                                        <TextField
                                                            id="City"

                                                            inputRef={this.CityRef}
                                                            value={this.state.city}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>

                                                        <Typography align="left">State</Typography>
                                                        <TextField
                                                            id="State"

                                                            inputRef={this.stateRef}
                                                            value={this.state.state}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.mar}>

                                                        <Typography align="left">Pincode</Typography>
                                                        <TextField
                                                            id="zip"

                                                            value={this.state.zip}
                                                            inputRef={this.zipRef}

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

                                                        <Typography align="left">Hobbies</Typography>
                                                        {/* <TextField
                                                            id="Hobbies"


                                                            inputRef={this.HobbiesRef}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        /> */}
                                                        <FormControl className={classes.formControl}>
                                                            <InputLabel id="demo-mutiple-checkbox-label"></InputLabel>
                                                            <Select
                                                                labelId="demo-mutiple-checkbox-label"
                                                                id="demo-mutiple-checkbox"
                                                                multiple
                                                                value={this.state.personName}
                                                                onChange={this.handleChange2}
                                                                input={<Input />}
                                                                renderValue={(selected) => selected.join(', ')}
                                                                MenuProps={MenuProps}
                                                                variant="filled"
                                                            >
                                                                {names.map((name) => (
                                                                    <MenuItem key={name} value={name}>
                                                                        <Checkbox checked={this.state.personName.indexOf(name) > -1} />
                                                                        <ListItemText primary={name} />
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>


                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>

                                                    <Grid item xs={12} md={5} className={classes.mar}>

                                                        <Typography align="left">Aspiration</Typography>
                                                        <TextField
                                                            id="Aspiration"

                                                            multiline
                                                            rows={4}
                                                            inputRef={this.textRef}

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

                                                            inputRef={this.schoolnameRef}

                                                            fullWidth
                                                            variant="filled"
                                                            onChange={this.onChanges}
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12} md={2}></Grid>



                                                    <Grid item xs={12} md={5}></Grid>

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