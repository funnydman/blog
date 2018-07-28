import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">BLOG FUNNYDMAN</a>
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link" activeClassName="active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link" activeClassName="active">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/services' className="nav-link">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;