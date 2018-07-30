import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

function Page(props) {
    return (
        <div className="col-md-8">
            {props.children}
        </div>
    );
}

export default function PageTemp(props) {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <Page>
                        {props.children}
                    </Page>
                    <Sidebar/>
                </div>
            </div>
            <Footer/>
        </div>);
}