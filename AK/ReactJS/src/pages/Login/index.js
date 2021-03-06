import React, { Component } from 'react'
import UI from './UI'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { number: null, otp: null, isOtp: false, err: false };
        this.sendOtp = this.sendOtp.bind(this);
        this.checkk = this.checkk.bind(this);
        this.otpChange = this.otpChange.bind(this);
        this.verifyOtp = this.verifyOtp.bind(this)
        this.numRef = React.createRef(null);
        this.otpRef = React.createRef(null);
        this.vall = React.createRef(null);
        this.reSendOtp = this.reSendOtp.bind(this)
        console.log(this.props.checkk)
    }

    checkk(e) {


        let num = this.numRef.current;

        if (num.value.length === 0 || num.value.length === 10) {
            this.setState({
                ...this.state,
                err: false
            })
        }

    }

    otpChange(e) {
        let otp = this.otpRef.current;
        if (otp.value.length === 0 || otp.value.length === 4) {
            this.setState({
                ...this.state,
                err: false
            })
        }
    }
    sendOtp(e) {
        e.preventDefault();
        let num = this.numRef.current;

        if (num.value.length < 10 || !num.value) {
            this.setState({
                ...this.state,
                err: true
            })
            num.focus();
        }
        else {
            this.setState({
                ...this.state,
                isOtp: true,
                err: false,
                number: num.value
            }, () => {
                this.props.loginSubmit(this.state).then(res => {
                    console.log(res)
                })
            })
        }

    }
    reSendOtp() {
        this.props.loginSubmit(this.state).then(res => {
            console.log(res)
        })
    }
    verifyOtp(e) {
        e.preventDefault();
        let otp = this.otpRef.current;
        if ((otp.value.length !== 4)) {
            this.setState({
                ...this.state,
                err: true
            })
        }
        else {
            this.setState({
                ...this.state,
                otp: otp.value

            }, () => {
                this.props.veryfyOtp(this.state).then((res) => {
                    if (res.data !== null) {
                        this.setState({
                            ...this.state,
                            err: true
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            })
        }

        // }


    }
    render() {

        return (
            <div>
                <Dialog open={true} aria-labelledby="form-dialog-title">

                    <Grid container>
                        <Grid item md={11}>
                            <UI  {...this.props} sendOtp={this.sendOtp} otpChange={this.otpChange} checkk={this.checkk} verifyOtp={this.verifyOtp} numRef={this.numRef} otpRef={this.otpRef} isOtp={this.state.isOtp} err={this.state.err} reSendOtp={this.reSendOtp} />
                        </Grid>
                        <Grid item md={1}>
                            <DialogActions>
                                <Button onClick={this.props.handleClose} color="primary">
                                    X
                                </Button>

                            </DialogActions>
                        </Grid>
                    </Grid>

                </Dialog>

            </div>
        )
    }
}

export default Login;