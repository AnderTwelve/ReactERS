import React, {useState} from 'react'; 
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'; 

import EmpHome from './Components/EmpHome'; 
import ManHome from './Components/ManHome';
import Nav from './Components/Nav'; 
import Home from './Components/Home';
import ManTable from './Components/ManTable';
import ResolvedTable from './Components/ResolvedTable';
import EmpTable from './Components/EmpTable';

function App() {

  const [user, setUser] = useState("");
  const [emp, setEmp] = useState("");  

  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact render={() => <Home user={user} setUser={setUser}/>}/>
        <Route path = "/EmpHome" render={() => <EmpHome user={user} setUser={setUser}/>} />
        <Route path="/ManHome" render={()=> <ManHome user={user} emp={emp} setEmp={setEmp}/>}/>
        <Route path="/ManTable" component={ManTable}/>
        <Route path="/ResolvedTable" component = {ResolvedTable}/>
        <Route path="/EmpTable" render={() => <EmpTable emp={emp} setEmp={setEmp}/>}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
