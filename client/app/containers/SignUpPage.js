import * as React from "react";
import SignUpForm from "../components/auth/SignUpForm";
import BasePage from "./BasePage";

export default class SignUpPage extends React.Component {
    render() {
        return (
            <BasePage>
                <SignUpForm/>
            </BasePage>
        );

    }
}