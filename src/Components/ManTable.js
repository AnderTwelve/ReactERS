import axios from 'axios';
import React, {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom'; 
import '../App.css';

function ManTable() {

    const [reqs, setReqs] = useState([]);

    useEffect(() => {
        viewPending();
    }, [])

    const viewPending = async () => {
        const data = await axios.get("https://ersnode.herokuapp.com/pending");
        setReqs(data.data);
    }

    const approve = async(id) => {  
        const updated = await axios.put(`https://ersnode.herokuapp.com/resolve/${id}/approved`) 
        viewPending(); 
    }

    const deny = async(id) => { 
        const updated = await axios.put(`https://ersnode.herokuapp.com/resolve/${id}/denied`)
        viewPending(); 
    }

    return (
        <div>
        <h1>All Pending Requests</h1>
        <br/>
        <table className="reqTable">
            <tr>
                {/* <th>Request ID</th> */}
                <th>Employee</th>
                <th>Reason</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {reqs.map(req => (
                <tr>
                    {/* <td>{req._id}</td> */}
                    <td>{req.empname}</td>
                    <td>{req.reason}</td>
                    <td>{req.amount}</td>
                    <td>{req.status}</td>
                    <td><button onClick={() => approve(req._id)} id="button" value = {req._id}>Approve</button>
                        <button onClick={() => deny(req._id)}>Deny</button></td>
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

export default ManTable; 