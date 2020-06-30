import * as React from 'react';
import AuthForm from './AuthForm';
import SearchWidget from './SearchWidget';
import CategoriesWidget from './CategoriesWidget';
import SideWidget from './SideWidget';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <AuthForm />
                <SearchWidget />
                <CategoriesWidget />
                <SideWidget />
            </div>
        );
    }
}

export default Sidebar;
