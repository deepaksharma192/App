import React from "react";
import EnrolledCourse from "./EnrolledCourse";
import Headers from '../../HOC/Headers';
import Profile from '../Profile/';
import UserProfile from '../UserProfile';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: null,
            status: null,
            show: null
        }
        this.FormSubmit = this.FormSubmit.bind(this);
        this.updateProfile = this.updateProfile.bind(this)

    }
    async componentDidMount() {
        await this.props.getUserDetail().then(res => {
            if (res.status !== "pending") {
                this.setState({
                    ...this.state,
                    status: res.status,
                    show: true
                })
            } else {
                this.setState({
                    ...this.state,
                    status: this.props.user.status,
                    show: false
                })
            }

        });

    }

    FormSubmit(res) {
        this.setState({
            status: res.status
        })
    }
    updateProfile(res) {
        this.setState({
            ...this.state,
            status: res.data.status,
            show: true
        })

    }
    render() {
        return (
            <div>
                {(this.state.show === true) && <EnrolledCourse />}
                {(this.state.show === false) && <Profile updateProfile={this.updateProfile} {...this.props} />}
            </div>
        )
    }
}

const header = Headers(Dashboard);
export default header;