import * as React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Sidebar from "../components/sidebar/Sidebar";

function Content(props) {
    return (
        <div className="col-md-8">
            {props.children}
        </div>
    );
}

export default function BasePage(props) {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <Content>
                        {props.children}
                    </Content>
                    <Sidebar/>
                </div>
            </div>
            <Footer/>
        </div>);
}