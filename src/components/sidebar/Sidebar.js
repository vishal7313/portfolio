import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/vishal.jpg'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div style={{ color: 'black', fontWeight: 'bold', 'margin-top': '40px' }}> 
                    # have you tried turning it off and on again
                </div>
                <h3><u>Vishal Ranjan</u></h3>

                <img src={logo} /> <br />

                <p style={{ color: 'black', fontWeight: 'bold' }}>
                    <a href="mailto:vishalranjanrv@gmail.com" rel="opener noreferrer" target="_blank" className="fa fa-envelope">
                        vishalranjanrv@gmail.com
                    </a> 
                    <br />
                    701-730-8431
                </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#project" className="links">Projects</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#certificate" className="links">Certificates</Link></li>
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons">
                            <a href="https://github.com/vishal7313" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a>
                        </li>
                        <li className="sidebar-nav-icons">
                            <a href="https://www.linkedin.com/in/vishal-ranjan-5948aa152/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons">
                            <a href="mailto:vishalranjanrv@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar