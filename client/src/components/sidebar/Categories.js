import * as React from "react";
import getFetchData from "../../actions/getFetchData";

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    };

    componentDidMount() {
        getFetchData('/api/categories').then(data => {
            this.setState({
                categories: data
            })
        });
    }

    render() {
        const categories = this.state.categories;
        return (
            <div>
                <ul className="list-unstyled mb-0">
                    {categories.map(category => (
                        <li key={category.id}>
                            <a href="#">{category.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}