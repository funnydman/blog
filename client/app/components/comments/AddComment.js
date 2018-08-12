import React, {Fragment} from "react";

export default class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
        this.post = this.props.post;
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const comment = {
            // Todo: send real author name
            author: 3,
            content: this.state.content,
            post: this.post
        };
        fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify(comment),
            // Only temp solution!
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Token " + window.sessionStorage.getItem('token')
            }
        }).then(function (response) {
            console.log(response.status);
        });

    }

    handleInput(event) {
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <form className="add-comment" onSubmit={this.onSubmit} method="POST">
                    <p><textarea name="content" onChange={this.handleInput}/></p>
                    <p><input className="btn btn-primary" type="submit" value="Add"/></p>
                </form>
            </Fragment>

        );
    }
}