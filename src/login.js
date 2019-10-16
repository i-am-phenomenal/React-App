import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        userName: "",
        password: "",
        userObject: {username: "", password: "", emailId: "", phoneNumber: "" }
    }

    handleUsernameChange = event =>  {
      this.setState({username: event.target.value})
     }

   LoginForm() {
      return (
      <div>
      <br />
      Username:
      <input type="text" value= "dummy Value username" onChange = {this.handleUsernameChange} />
      // <input type='Submit' onClick = {this.handleSubmit} />
      </div>
    )
  }


    render() {
      return (
        <React.Fragment>
          <Route exact path="/login_page" component={LoginForm} />
        </React.Fragment>
      )
    }

    //  LoginRouter() {
    //    return (
    //      <Router>
    //        <div>
    //            <nav>
    //              <Link to="/login_page/"> </Link>
    //            </nav>
    //            <Route path="/login_page/" exact component={LoginForm} />
    //            // <Route path="/login_page/" exact render={() => <LoginForm/>} />
    //        </div>
    //        </Router>
    //     )
    //    }
    //
    //  LoginForm() {
    //  return (
    //        <div>
    //          Enter Username and Password to login
    //          <br />
    //          Username:
    //          {" "}
    //          <input type="text" value= {this.state.userName} onChange = {this.updateStateUsername} />
    //          <br />
    //          Password:
    //          {" "}
    //          <input type="text" value = {this.state.password} onChange = {this.updateStatePassword} />
    //          <br />
    //           {" "}
    //          <input type="button" value ="Login" onClick = {this.loginUser} />
    //          </div>
    //      )
    // }
    //
    //  loginUser = event => {
    //       let userName = this.state.userName
    //       let password = this.state.password
    //
    //
    //       let userLoginDetailsObject =
    //            JSON.stringify({
    //                username: userName,
    //                password: password
    //            })
    //
    //       try {
    //           fetch('http://127.0.0.1:8000/login_user/',{
    //               method: 'POST',
    //               headers: {
    //                   'Content-Type': 'application/json'
    //               },
    //               body: userLoginDetailsObject
    //           })
    //           .then(response => response.json())
    //           .then(resp => this.InitializeUserObject(resp) )
    //       }
    //       catch(err) {
    //           console.log(err, "Error")
    //       }
    //   }
    //
    //  InitializeUserObject(response) {
    //         let userObject = Object.assign({}, this.state.userObject)
    //         userObject.username = response.username
    //         userObject.password = response.password
    //         userObject.emailId = response.emailId
    //         userObject.phoneNumber = response.phoneNumber
    //         this.setState({userObject})
    //         this.setState({content: "Home-Page"})
    //       }

    // render() {
    //     return (
    //         <LoginRouter />
    //     )
    // }
  }
export default LoginComponent
