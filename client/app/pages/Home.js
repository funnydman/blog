import Header from '../components/Header';
import * as React from "react";
import PostLists from '../components/PostLists';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <PostLists/>
            </div>
        );
    }
}

export default Home;