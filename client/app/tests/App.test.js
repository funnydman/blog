import React from 'react';
import ReactDOM from 'react-dom';
import TestSome from "../tests/TestComponent";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestSome/>, div);
    ReactDOM.unmountComponentAtNode(div);
});