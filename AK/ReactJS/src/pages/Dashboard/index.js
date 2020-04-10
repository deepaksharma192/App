import React from "react";
import EnrolledCourse from "./EnrolledCourse";
import Headers from '../../HOC/Headers'
import jumpTo from '../../modules/Navigation/'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: null,
            status: null,
        }
        this.FormSubmit = this.FormSubmit.bind(this);

    }
    async componentDidMount() {
        await this.props.getUserDetail();
        if(this.props.user.status === 'pending'){
         jumpTo('/profile');
        }
        this.setState({
            status: this.props.user.status
        })
    }
    
    FormSubmit(res) {
        this.setState({
            status: res.status
        })
    }
    render() {
        return (
            <div>
                <EnrolledCourse  />
            </div>
        )
    }
}

const header = Headers(Dashboard);
export default header;