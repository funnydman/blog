import React from "react";

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
          author:3,
          content:this.state.content,
          post:this.post
        };
        fetch('/api/comments/', {
            method:'POST',
            body: JSON.stringify(comment),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }).then(response => (response.json())).then(data =>(
            console.log(data)
        ));
    }
    handleInput(event) {
        this.setState({
           content: event.target.value
        });
    }
    render () {
        return (
            <form onSubmit={this.onSubmit} method="POST">
                <p><textarea name="content" onChange={this.handleInput}/></p>
                <p><input type="submit" value="Add" /></p>
            </form>
        );
    }
}