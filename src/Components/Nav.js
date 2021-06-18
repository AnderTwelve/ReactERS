import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav >
            <h3>Reimbursement System</h3>
            <ul className="nav-links">
                <Link className="link" to = "/">
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
