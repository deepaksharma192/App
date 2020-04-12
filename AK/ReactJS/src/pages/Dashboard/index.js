import React from "react";
import EnrolledCourse from "./EnrolledCourse";
import Headers from '../../HOC/Headers';
import Profile from '../Profile/';
import SweetAlert from 'sweetalert2-react';
import jumpTo from '../../modules/Navigation';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: null,
            status: null,
            show:false
        }
        this.FormSubmit = this.FormSubmit.bind(this);
        this.updateProfile   = this.updateProfile.bind(this)

    }
    async componentDidMount() {
        await this.props.getUserDetail().then(res => {
            console.log(res)
           if(res.status !== "pending"){
            this.setState({
                ...this.state,
                status: res.status,
                show:true
            })
           }
            this.setState({
                status: this.props.user.status
            })
        });

    }

    FormSubmit(res) {
        this.setState({
            status: res.status
        })
    }
    updateProfile(res){
        this.setState({
            ...this.state,
            status: res.data.status,
            show:true
        })
        console.log(res)
    }
    render() {
        return (
            <div>
                 {/* <SweetAlert
                    show={this.state.show}
                    title="Alert"
                    text="Successfully updated your profile."
                    onConfirm={() => { this.setState({ show: false }); jumpTo('/dashboard') }}
                /> */}
                {this.state.show && <EnrolledCourse />}
                {!this.state.show && <Profile updateProfile={this.updateProfile} {...this.props}/>}
            </div>
        )
    }
}

const header = Headers(Dashboard);
export default header;