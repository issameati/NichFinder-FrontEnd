import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Sidedrawer extends Component {
    state={
        isOpen:false
    }

    handleSideDrawer = (e) =>{
        e.preventDefault();
        this.setState({isOpen:!this.state.isOpen})
        console.log(this.state.isOpen)
    }

    render(){
        return (
            <nav id="sidebar" className={this.state.isOpen ? "":"active"} >
                <h1>
                    {/* <a href="index.html" className="logo"> */}
                    <button className="logo" onClick={this.handleSideDrawer} type="button">
                    {this.state.isOpen ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars"></i> }
                    </button>
                    {/* </a> */}
                </h1>
                <ul className="list-unstyled components mb-5">
                <li className="active">
                    <Link to="/"><span className="fa fa-th"></span>Applications</Link>
                </li>
                <li>
                    <Link to="/"><span className="fa fa-star"></span>Top charts</Link>
                </li>
                <li>
                    <Link to="/"><span className="fa fa-cogs"></span> Services</Link>
                </li>
                <li>
                    <Link to="/"><span className="fa fa-question-circle"></span> How To Use</Link>
                </li>
                <li>
                    <Link href="/"><span className="fa fa-paper-plane"></span> Contacts</Link>
                </li>
                </ul>
    
                <div className="footer">
                    <p>Copyright {new Date().getFullYear()} All rights reserved | This powerd <i className="icon-heart" aria-hidden="true"></i> by <a href="https://Ati.com" > ATI </a></p>
                </div>
            </nav>
        )
    }
   
}
