import * as React from 'react';
import Categories from './Categories';

export default function CategoriesWidget(props) {
    return (
        <div className="card my-4">
            <h5 className="card-header">Categories</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-12">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
}
