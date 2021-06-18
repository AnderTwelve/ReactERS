import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ReqTable from './ReqTable';

function EmpHome(props) {

    const [amount, setAmount] = useState("");
    const [reason, setReason] = useState("");
    const [reqs, setReqs] = useState([]);

    useEffect(() => {
        fetchReqs();
    }, [])

    const fetchReqs = async () => {
        const data = await fetch(`https://ersnode.herokuapp.com/emprequests/${props.user}`);
        const reqs = await data.json();
        setReqs(reqs);
    }


    const amountHandler = (e) => {
        setAmount(e.target.value);
    }

    const reasonHandler = (e) => {
        setReason(e.target.value);
    }

    const submitrmb = (e) => {
        axios.post('https://ersnode.herokuapp.com/emphome/newrmb', {
            empname: props.user,
            amount: amount,
            reason: reason
        })

        setReqs([...reqs, {
            empname: props.user,
            amount: "$"+amount,
            status: "pending",
            reason: reason,
        }])
    }


    return (
        <div className="EmpHome">
            <h1>Welcome, {props.user}</h1>
            <br></br>
            <p>Submit a new Reimbursement</p>
            <form className="newReqForm">
                <div>
                    <label>Amount: </label>
                    <input className="formText" type="number" value={amount} name="amount" id="amount" onChange={amountHandler}></input>
                </div>
                <div>
                    <label>Reason: </label>
                    <input className="formText" type="text" value={reason} name="reason" id="reason" onChange={reasonHandler}></input>
                </div>
                
            </form>

            <br />
                <button className="newReqButton" onClick={submitrmb}>Submit</button>

            <br></br>
            <br></br>
            <ReqTable name={props.user} reqs={reqs} />
            <br />
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
}

export default EmpHome;