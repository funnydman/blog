import React, {Fragment} from "react";
import {postFetchData} from "../../utils/getFetchData";

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
            postFetchData('/api/comments/', comment)
                .then(function (response) {
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