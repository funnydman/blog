import * as React from "react";
import SignUpForm from "../components/auth/SignUpForm";
import PageTemp from "./PageTemp";

export default class SignUpPage extends React.Component {
    render() {
        return (
            <PageTemp>
                <SignUpForm/>
            </PageTemp>
        );

    }
}