//
// import React from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import App from './App';
// function Index() {
//   return <h2> Home </h2>;
// }
//
// function AnotherDummyPageView() {
//
//   return (
//     <div>
//       <input type = "text" value = {this.state.userName} onChange = {this.handleUserNameChange} />
//     </div>
//   )
// }
//
// function AppRouter() {
//   return (
//     <Router>
//       <div>
//         <nav>
//          <ul>
//            <li>
//            <Link to="/dummyPage"> Dummy Page </Link>
//            </li>
//            <li>
//            <Link to ="/anotherDummyPage"> Another Dummy Page </Link>
//            </li>
//            </ul>
//            </nav>
//         <Route path="/dummyPage" exact component={Index} />
//         <Route path="/anotherDummyPage" exact component={AnotherDummyPageView} />
//       </div>
//     </Router>
//   );
// }
//
// export default AppRouter

// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
//
// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   state = {
//       userInformation: ""
// }
//
// componentDidMount() {
//   let userInformation = this.props.userInformation
//   console.log(userInformation, "++++++++++++++++++")
// }
//
//   render() {
//     return (
//       <HomePageRouter />
//     )
//   }
// }
//
// class LoginRouter extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
// state = {
//   userInf:  ""
// }
//
// componentDidMount() {
//   let userInf = this.state.userInf
//   console.log(userInf, "2222222222222222222")
// }
//
// render () {
//   return (
//       <HomePageRouter />
//   )
//     }
//   }
//
// function LoginPageView() {
//   return (
//     <div>
//       <p> This is a liogin pafve </p>
//     </div>
//   )
// }
//
// //
// // function LoginComponentRouter() {
// //   return (
// //     <Router>
// //       <div>
// //       <nav>
// //       <LoginButton />
// //       </nav>
// //       <Route path="/login_page" exact component={LoginPageView} />
// //        </div>
// //     </Router>
// //   );
// // }
//
//  const handleButtonClick = event => {
//   console.log(event.target.value, "XXXXXXXXXXXX")
// }
//
// const LoginButton = () => {
//   return (
//     <div>
//     <button value="Click Me to Login" onClick = <handleButtonClick /> >
//       <Link to="/login_page"> Login </Link>
//     </button>
//     </div>
//   )
// }
//
// function HomePageComponent() {
//   return (
//     <div>
//       <p>  This is a homepage component </p>
//     </div>
//   )
// }
//
//
// const WrappedLink = () => {
//   return (
//     <button>
//       <Link to="/home_page"> Button  </Link >
//      </button>
//   )
// }
//
//
// function HomePageRouter() {
//
//   return (
//     <Router>
//       <div>
//         <nav>
//          <WrappedLink />
//          </nav>
//          <nav>
//           <LoginButton />
//          </ nav>
//          <Route path="/home_page" exact component={HomePageComponent} />
//          <Route path="/login_page" exact component = {LoginPageView} />
//       </div>
//     </Router>
//   );
// }
// export default HomePage


import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        userName: ""
    }

    render() {
        return (
        <HomePageRouter/>
        )
    }

}
function HomePageRouter() {
    return (
        <Router>
        <div>
        <nav>
        <Link to="home_page"> Welcome ! </Link>
        </nav>
        </div>
        </Router>
    );
}


export default Homepage
