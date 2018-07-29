import Header from '../components/Header';
import * as React from "react";
import PostLists from '../components/PostLists';
import Footer from "../components/Footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <PostLists/>
                <Footer/>
            </div>
        );
    }
}

export default Home;