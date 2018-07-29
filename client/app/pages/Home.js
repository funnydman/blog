import Header from '../components/Header';
import * as React from "react";
import Posts from '../components/Posts';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Posts/>
            </div>
        );
    }
}

export default Home;