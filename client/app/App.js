import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">BLOG FUNNYDMAN</a>
                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Services</a>
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


ReactDOM.render(
    <Header/>,
    document.getElementById('root'),
);