import Header from './Header';
import Footer from './Footer';
import Sidebar from './sidebar/Sidebar';
import * as React from 'react';

export class Content extends React.Component {
    render() {
        return <div className="col-md-8">{this.props.children}</div>;
    }
}

export default class Base extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <Content>{this.props.children}</Content>
                        <Sidebar />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
