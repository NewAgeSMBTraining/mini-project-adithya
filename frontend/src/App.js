import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login/Login'
import Registration from './components/registration/Registration';
import Leaves from './components/leaves/Leaves';
import Table from './components/table/Table';
import Update from './components/update/Update';
import Userleaves from './components/userleaves/Userleaves';
import User from './components/users/User';
import Userleavestatus from './components/userleavestatus/Userleavestatus';
import Authenticate from './components/authenticate/Authenticate';
import Forgotpass from './components/forgotpassword/Forgotpass';
import Userprofupdt from './components/userprofileupdate/Userprofupdt';

function App() {


  


  return (
    <div className="App">
      <Router>
      

      <Switch>
        <Route exact path="/" component={Login} />

        <Authenticate path='/admin'><Table /></Authenticate>
        <Authenticate path='/register'><Registration/></Authenticate>
        <Authenticate path="/leaves"><Leaves/></Authenticate>
        <Authenticate path="/update"><Update/></Authenticate>
        <Authenticate path="/userleaves"><Userleaves/></Authenticate>
        <Authenticate path="/user"><User/></Authenticate>
        <Authenticate path="/userleavestatus"><Userleavestatus/></Authenticate>
        <Authenticate path="/updateuser"><Userprofupdt/></Authenticate>
        <Route exact path="/forgotpass" component={Forgotpass}/>
        
      </Switch>

      </Router>

    </div>
  );
}

export default App;
