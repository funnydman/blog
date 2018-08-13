import * as React from "react";
import BasePage from './BasePage';
import PostLists from "../components/posts/PostLists";

class HomePage extends React.Component {
    render() {
        return (
            <BasePage>
                <PostLists/>
            </BasePage>
        );
    }
}

export default HomePage;