import * as React from "react";
import AuthForm from './AuthForm';
import SearchWidget from './SearchWidget';
import CategoriesWidget from './CategoriesWidget';
import SideWidget from './SideWidget';

export default function Sidebar(props) {
    return (
        <div className="col-md-4" style={{marginTop: 85}}>
            <AuthForm/>
            <SearchWidget/>
            <CategoriesWidget/>
            <SideWidget/>
        </div>
    );
}
