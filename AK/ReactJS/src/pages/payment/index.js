import React, {Component} from 'react';
import Headers from '../../HOC/Headers';

class Payment extends Component{

    render(){

        return(
            <div>
                Payment method
            </div>
        )
    }
}

export default Headers(Payment)