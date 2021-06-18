import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

import EmpTable from './EmpTable';

function ManHome(props) {

    const [reqs, setReqs] = useState([]);
    const [emps, setEmps] = useState([]);

    const getEmps = async () => {
        const data = await fetch('https://ersnode.herokuapp.com/manager/employees');
        const emps = await data.json();
        setEmps(emps);
    }

    const empHandler = (e) => {
        props.setEmp(e.target.value);
        console.log(props.emp); 
    }

    useEffect(() => {
        viewPending();
        getEmps();
    }, [])

    const viewPending = async () => {
        const data = await axios.get("https://ersnode.herokuapp.com/pending");
        setReqs(data.data);
    }

    const viewResolved = async () => {
        const data = await axios.get("https://ersnode.herokuapp.com/resolved")
        setReqs(data.data);
    }

    return (

        <div>
            <Router>
                <div>
                    <Route path="/EmpTable" render={() => <EmpTable emp={props.emp} />} />
                </div>
            </Router>
            <h1>Welome, {props.user}</h1>
            <br></br>
            <select className="login" onChange={empHandler}>
                <option disabled selected>Employees</option>
                {emps.map(emp => (
                    <option key={emp._id} value={emp.name}>{emp.name}</option>
                ))}
            </select>
            <Link to="/EmpTable">
                <button>View History</button>
            </Link>
            <br />
            <Link to="/ManTable">
                <button onClick={viewPending}>View Pending Requests</button>
            </Link>
            <br />
            <Link to="/ResolvedTable">
                <button onClick={viewResolved}>View Resolved Requests</button>
            </Link>
            <br />
            
            <br />
        </div>
    );
}

export default ManHome;