import * as React from "react";

export default class SignInForm extends React.Component {
    render () {
        return (
            <form className="form-signin" method="POST">
                <h3 className="form-signin-heading">Please sign in</h3>
                <label htmlFor="inputName"
                       className="sr-only">Username</label>
                <input type="text" id="inputName"
                       className="form-control"
                       placeholder="Username" required
                       autoFocus/>
                <label htmlFor="inputPassword"
                       className="sr-only">Password</label>
                <input type="password" id="inputPassword"
                       className="form-control"
                       placeholder="Password" required/>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/>
                        Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block"
                        type="submit">Sign in
                </button>
            </form>
        );
    }
}