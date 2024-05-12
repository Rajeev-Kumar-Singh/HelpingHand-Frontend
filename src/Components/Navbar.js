import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './Assests/logo/logo.png'
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Helping Hand" width="50" height="50" /> {/* Your logo image */}
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>Helping Hand</span> {/* Your NGO name */}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold' }} href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold' }} href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold' }} href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
