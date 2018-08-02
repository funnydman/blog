import * as React from "react";
import PageTemp from './PageTemp';
import PostLists from "../components/posts/PostLists";

class Home extends React.Component {
    render() {
        return (
            <PageTemp>
                <PostLists/>
            </PageTemp>
        );
    }
}

export default Home;