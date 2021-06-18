import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 


function ResolvedTable() {

    const [reqs, setReqs] = useState([]);

    useEffect(() => {
        viewResolved();
    }, [])

    const viewResolved = async () => {
        const data = await axios.get("https://ersnode.herokuapp.com/resolved");
        setReqs(data.data);
    }

    return (
        <div>
            <h1>All Resolved Requests</h1>
            <br/>
            <table className="reqTable">
                <tr>
                    {/* <th>Request ID</th> */}
                    <th>Employee</th>
                    <th>Reason</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                {reqs.map(req => (
                    <tr>
                        {/* <td>{req._id}</td> */}
                        <td>{req.empname}</td>
                        <td>{req.reason}</td>
                        <td>{req.amount}</td>
                        <td>{req.status}</td>
                    </tr>
                ))}
            </table>
            <br />
            <Link to="/ManHome">
                <button>Go Back</button>
            </Link>
        </div>
    );
}

export default ResolvedTable;