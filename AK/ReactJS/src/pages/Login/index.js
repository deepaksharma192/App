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
        this.verifyOtp = this.verifyOtp.bind(this)
        this.numRef = React.createRef(null);
        this.otpRef = React.createRef(null);
        this.vall = React.createRef(null);
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

                this.props.loginSubmit(this.state)
            })
        }

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
                    setTimeout(() => {
                        if (res === undefined) {
                            this.setState({
                                ...this.state,
                                err: true
                            })
                        }
                    }, 100)
                }).catch(err => {
                    console.log(err)
                })
            })
        }


    }
    render() {

        return (
            <div>
                <Dialog open={true} aria-labelledby="form-dialog-title">

                    <Grid container>
                        <Grid item md={11}>
                            <UI  {...this.props} sendOtp={this.sendOtp} verifyOtp={this.verifyOtp} numRef={this.numRef} otpRef={this.otpRef} isOtp={this.state.isOtp} err={this.state.err} />
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