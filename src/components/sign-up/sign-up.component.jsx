import React, { Component } from 'react';
import './sign-up.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

// need class to store what user type into ur Form
class SignUp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    // it's an asyn func that get the event 
    handleSubmit = async event => {
        // prevent the default submitting
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            // create new user with a specific email/pass
            // once this done, the user get assigned to ur app from the auth
            // then it give u back the userAuth object, u destructor it to get that obj
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // if this success, want to reset ur state
            // => await for this to finish
            await createUserProfileDocument(user, {displayName});

            // when it finish, set the state to be empty
            // > this will clear ur form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };
 
    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className = 'sign-up'>
                <h2 className = 'title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className = 'sig-up-form' onSubmit = {this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display Name'
                        required
                    />

                    <FormInput
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required
                    />

                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    />

                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required
                    />

                    <CustomButton type = 'submit'> SIGN UP </CustomButton>

                </form>
            </div>
        )
    };
};

export default SignUp;