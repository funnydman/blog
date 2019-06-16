import * as React from "react";
import {Link} from "react-router-dom";
import {userActions} from "./login";

export default class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        userActions.login(user.username, user.password);

    }

    render() {
        return (
            <form method="POST" className="form-signin" onSubmit={this.onSubmit}>
                <h3 className="form-signin-heading">Please sign in</h3>
                <label htmlFor="inputName"
                       className="sr-only">Username</label>
                <input onChange={e => this.setState({username: e.target.value})} type="text" id="inputName"
                       className="form-control"
                       placeholder="Username" required
                       autoFocus/>
                <label htmlFor="inputPassword"
                       className="sr-only">Password</label>
                <input onChange={e => this.setState({password: e.target.value})} type="password" id="inputPassword"
                       className="form-control"
                       placeholder="Password" required/>
                <div className="options">

                    <label>
                        <input type="checkbox" value="remember-me"/>
                        Remember me
                    </label>
                    <Link to='/signup'>register</Link>
                </div>
                <input className="btn btn-lg btn-primary btn-block"
                       type="submit" value="Sign in"/>
            </form>
        );
    }
}