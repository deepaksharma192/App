import React from "react";
import UI from './UI'
import Headers from '../../HOC/Headers'
import { homepagedata } from "../../redux/action/tokenAction";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
 
        }
        
    }
    componentDidMount() {
        homepagedata().then((res)=>{
            console.log(res)
        })
    }

    render() {

        return (
            <div>
                <UI />
            </div>
        )
    }
}


export default Headers(Home);