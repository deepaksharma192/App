import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import LeaderBoard from './pages/LeaderBoard'
import './App.css';
import { registerNav } from './modules/Navigation'
import { insertToken } from './redux/action/tokenAction'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard";
import CON from './constantant';
import Profile from './pages/Profile';
import Player from './pages/Player';
import Customersupport from './pages/customerSupport';
import Practicequiz from './pages/practiceQuiz';
import Payment from './pages/payment';
import Parentpassword from './pages/parentPassword';
import UserProfile from './pages/UserProfile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openLogin: false,
      show: false,
      pathname: window.location.pathname
    }
  }
  pathRedarect() {
    let path = window.location.pathname;
    if (this.props.token) {
      let isPath = CON.restrictedUrl.indexOf(path);
      if (isPath !== -1) {
        this.setState({
          pathname: path
        })
      } else {
        this.setState({
          pathname: CON.restrictedUrl[0]
        })
      }

    } else {
      this.setState({
        pathname: '/home'
      })
    }
  }
 async componentDidMount() {
   await this.props.insertToken()
   this.pathRedarect()
  }
  
  componentDidUpdate(){
   // this.pathRedarect()
  }


  render() {
    return (
      <div className="App">
        <Router ref={registerNav}>
          <Switch>
            {this.props.token && [
              <Route key="dashboard" path="/dashboard" component={Dashboard} />,
              <Route key="Profile" exact path="/profile" component={Profile} />,
              <Route key="Player" exact path="/player/:id" component={Player} />,
              <Route key="LeaderBoard" exact path="/leaderboard" component={LeaderBoard} />,
              <Route key="UserProfile" exact path="/UserProfile" component={UserProfile} />,
              <Route key="Customersupport" exact path="/Customersupport" component={Customersupport} />,
              <Route key="Practicequiz" exact path="/Practicequiz" component={Practicequiz} />,
              <Route key="Payment" exact path="/Payment" component={Payment} />,
              <Route key="Parentpassword" exact path="/Parentpassword" component={Parentpassword} />,
            ]}
            {!this.props.token && [
              <Route key="exact" exact path="/" component={Home} />,
              <Route key="Home" path="/Home" component={Home} />,
            ]}
           <Redirect to={this.state.pathname}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStoreToProps = state => ({
  token: state.token.user_token,
  isloading: state.token.token_loading
})
const mapDispatchToProps = {
  insertToken
}
export default connect(mapStoreToProps, mapDispatchToProps)(App);

