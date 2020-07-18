import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
export class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>  
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Redirect to="/login"/>
          </Switch>
        </Router>
        {/* <Login /> */}
        <br/>
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <switch>
//       {/* <Route exact path = "/" component={Head}/> */}
//         {/* <Route exact path="/" component={()=><div><Link to="/login">login</Link><br /><Link to="/signup">signup</Link></div>}/> */}
//         <Route path = "/login" component={Login}/>
//         <Route path = "/signup" component ={Signup}/>
//         <Route path = "/home" component={Home}/>
//         <Redirect to="/signin"/>
//         </switch>
//       </Router>
//     </div>
//   );
// }

// export default App;



