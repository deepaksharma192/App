import React from "react";
import UI from './UI'
import Headers from '../../HOC/Headers'
import { testimonialsdata } from "../../redux/action/tokenAction";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
 
        }
        
    }
    componentDidMount() {
        testimonialsdata().then((res)=>{
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