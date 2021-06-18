import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 


function EmpTable(props) {

    const [reqs, setReqs] = useState([]);

    useEffect(() => {
        empHistory();
    }, [])

    const empHistory = async () => {
        const data = await axios.get(`https://ersnode.herokuapp.com/emprequests/${props.emp}`);
        setReqs(data.data);
    }

    return (
        <div>
            <h1>{props.emp}'s Request History</h1>
            <table className="reqTable">
                <tr>
                    {/* <th>Request ID</th> */}
                    <th>Reason</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                {reqs.map(req => (
                    <tr>
                        {/* <td>{req._id}</td> */}
                        <td>{req.reason}</td>
                        <td>{req.amount}</td>
                        <td>{req.status}</td>
                    </tr>
                ))}
            </table>
        
        <br/>
        <Link to="/ManHome">
        <button>Go Back</button>
        </Link>
        </div>


    );
}

export default EmpTable;