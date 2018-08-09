import * as React from "react";

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            location: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        const state = this.state;
        const newUser = {
            username: state.username,
            email: state.email,
            location: state.location,
            password: state.password
        };
        fetch('/api/users', {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }).then(function (response) {
            console.log('New user created', response.status);
        });
    }

    render() {
        return (
            <form method="POST" onSubmit={this.onSubmit}>
                <h3 className="form-signin-heading">Sign Up</h3>
                <label htmlFor="inputNameSignup"
                       className="sr-only">Username</label>
                <input type="text" id="inputNameSignup"
                       className="form-control"
                       placeholder="Username" required
                       autoFocus
                       onChange={e => this.setState(
                           {username: e.target.value}
                       )}/>

                <label htmlFor="inputEmail"
                       className="sr-only">Email</label>
                <input type="email" id="inputEmail"
                       className="form-control"
                       placeholder="Email" required
                       autoFocus onChange={e => this.setState(
                    {email: e.target.value})}/>

                <label htmlFor="inputLocation"
                       className="sr-only">Location</label>
                <input type="text" id="inputLocation"
                       className="form-control"
                       placeholder="Location" required
                       autoFocus onChange={e => this.setState(
                    {location: e.target.value})}/>

                <label htmlFor="inputPasswordSignUp"
                       className="sr-only">Password</label>
                <input onChange={e => this.setState(
                    {password: e.target.value})} type="password"
                       id="inputPasswordSignUp"
                       className="form-control"
                       placeholder="Password" required/>

                <input className="btn btn-lg btn-primary btn-block"
                       type="submit" value="Sign up "/>
            </form>
        );
    }
}