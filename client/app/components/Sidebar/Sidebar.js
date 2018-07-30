import * as React from "react";
import LoginForm from './LoginForm';
import SearchWidget from './SearchWidget';
import CategoriesWidget from './CategoriesWidget';
import SideWidget from './SideWidget';

export default function Sidebar(props) {
    return (
        <div class="col-md-4">
            <LoginForm/>
            <SearchWidget/>
            <CategoriesWidget/>
            <SideWidget/>
        </div>
    );
}