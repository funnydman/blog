import React, {Fragment} from "react";

function getAuthUser() {
    return JSON.parse(window.localStorage.getItem('user'));
}


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
        const authOfComment = getAuthUser()['user_id'];
        const comment = {
            // Todo: send real author name
            author: authOfComment,
            content: this.state.content,
            post: this.post
        };
        fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify(comment),
            // Only temp solution!
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Token " + window.localStorage.getItem('token')
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