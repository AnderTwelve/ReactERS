import React from 'react';
import '../App.css';


function ReqTable(props) {

    return (
        <div>
            <table className="reqTable">
                <tr>
                    {/* <th>Request ID</th> */}
                    <th>Reason</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                {props.reqs.map(req => (
                    <tr>
                        {/* <td>{req._id}</td> */}
                        <td>{req.reason}</td>
                        <td>{req.amount}</td>
                        <td>{req.status}</td>
                    </tr>
                ))}
            </table>
        </div>


    );
}

export default ReqTable;