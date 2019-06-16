import * as React from "react";
import BasePage from './BasePage';
import PostList from "../components/posts/PostList";

class HomePage extends React.Component {
    render() {
        return (
            <BasePage>
                <PostList/>
            </BasePage>
        );
    }
}

export default HomePage;