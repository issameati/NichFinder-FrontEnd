import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
export default function Toolbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-nav-color">
            <div className="container-fluid" style={{height: '40px'}}>
            <a className="navbar-brand" href="#home" style={{color:'#0f2346',fontSize:'40px',fontWeight:'bold'}}><span style={{color:'orange',textShadow:'2px 2px 4px #0f2346'}}>SPY </span>TOOL</a>

                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/saved">Saved apps</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/me">PROFILE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/logout'><i className="fa fa-user" aria-hidden="true"></i> LOGOUT</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

