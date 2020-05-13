import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
const useStyles = theme => ({

    siz: {
        width: '50%'
    }, formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
});
class Class_ extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classes: [], isOpen: false }
        this.listClass = this.listClass.bind(this);
        this.handleClose = this.handleClose.bind(this)
        this.AddPopup = this.AddPopup.bind(this);
        this.saveClass = this.saveClass.bind(this);
        this.classNameRef = React.createRef();
        this.priceRef = React.createRef();
        this.currencyTypeRef = React.createRef();
        this.statusRef = React.createRef();
    }
    componentDidMount() {
        this.props.getAllClasses_for_admin().then(res => {
            this.setState({
                classes: res,
            })
        })
    }
    listClass() {
        return (
            <List subheader={<li />}>
                {
                    this.state.classes.map((item) => (
                        <ListItem key={`item-${item._id}`}>
                            <ListItemText primary={`${item.className}`} />
                        </ListItem>
                    ))
                }
            </List>
        )
    }
    AddPopup() {
        this.setState({
            isOpen: true
        })
    }
    handleClose() {
        this.setState({
            isOpen: false
        })
    }
    saveClass(e) {
        e.preventDefault();
        let data={
            className:this.classNameRef.current.value,
            price:this.priceRef.current.value,  
            currency:this.currencyTypeRef.current.value,
            status:this.statusRef.current.value
        }
        this.props.saveClass_for_admin(data).then(res=>{
            this.setState({
                classes: res,
                isOpen:false
            })
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" onClick={this.AddPopup}>
                            Add new Class
                </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {this.state.classes.length && this.listClass()}
                        {!this.state.classes.length && <CircularProgress size={24} />}
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.isOpen}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <form noValidate autoComplete="off">
                        <DialogTitle id="alert-dialog-slide-title">Class Form</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <TextField
                                    inputRef={this.classNameRef}
                                    id="outlined-secondary"
                                    label="Class Name"
                                    variant="outlined"
                                    color="secondary"
                                /><br></br>
    <br></br>
                                <TextField
                                    inputRef={this.priceRef}
                                    type="number"
                                    id="outlined-secondary"
                                    label="Price of class"
                                    variant="outlined"
                                    color="secondary"
                                />
<br></br><br></br>
                                <FormControl className={classes.formControl} >
                                    <InputLabel id="demo-simple-select-label">Currency Type</InputLabel>
                                    <Select
                                        inputRef={this.currencyTypeRef}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                    >
                                        <MenuItem value={`INR`}>INR</MenuItem>
                                    </Select>
                                </FormControl>
                                <br></br><br></br>
                                <FormControl className={classes.formControl} >
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        inputRef={this.statusRef}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                    >
                                        <MenuItem value={`active`}>active</MenuItem>
                                        <MenuItem value={`deactive`}>deactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                         </Button>
                            <Button type="submit" onClick={this.saveClass} color="primary">
                                Save
                        </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        );
    }
}
export default withStyles(useStyles)(Class_);

