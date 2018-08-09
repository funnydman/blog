import * as React from "react";

export default class SignUpForm extends React.Component {
    render() {
        return (
            <form>
                <h3 className="form-signin-heading">Sign Up</h3>
                <label htmlFor="inputNameSignup"
                       className="sr-only">Username</label>
                <input type="text" id="inputNameSignup"
                       className="form-control"
                       placeholder="Username" required
                       autoFocus/>

                <label htmlFor="inputEmail"
                       className="sr-only">Email</label>
                <input type="email" id="inputEmail"
                       className="form-control"
                       placeholder="Email" required
                       autoFocus/>

                <label htmlFor="inputLocation"
                       className="sr-only">Location</label>
                <input type="text" id="inputLocation"
                       className="form-control"
                       placeholder="Location" required
                       autoFocus/>

                <label htmlFor="inputPasswordSignUp"
                       className="sr-only">Password</label>
                <input onChange={e => this.setState({password: e.target.value})} type="password"
                       id="inputPasswordSignUp"
                       className="form-control"
                       placeholder="Password" required/>

                <input className="btn btn-lg btn-primary btn-block"
                       type="submit" value="Sign up "/>
            </form>
        );
    }
}