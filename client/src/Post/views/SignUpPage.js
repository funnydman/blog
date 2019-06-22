import * as React from 'react';
import SignUpForm from '../../Auth/views/SignUpForm';
import Base from '../../Template/containers/Base';

export default class SignUpPage extends React.Component {
    render() {
        return (
            <Base>
                <SignUpForm />
            </Base>
        );
    }
}
