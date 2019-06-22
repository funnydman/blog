import * as React from 'react';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {

    }

    render() {
        const categories = this.state.categories;
        return (
            <div>
                <ul className="list-unstyled mb-0">

                    categories
                </ul>
            </div>
        );
    }
}
