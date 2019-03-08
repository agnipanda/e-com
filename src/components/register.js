import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            gender: '',
            date: null
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleRegister(e){
        e.preventDefault();
        this.setState({
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            cpassword: e.target[3].value,
            gender: e.target[4].value,
            date: e.target[5].value
        })
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('gender', this.state.gender);
        formData.append('date', this.state.date);
    }
    render() {
            return (
            <div className="ui container">
                <Header/>
                <div className="ui rail text container segment" style={{float:'right'}}>
                    <h1>Create an Account</h1>
                    <form id="loginform" className="ui form" onSubmit={this.handleRegister}>
                        <div className="field">
                            <label>Full Name</label><input name="name" placeholder="Full Name" required/></div>
                        <div className="field">
                            <label>Email</label><input type="email" placeholder="Email" required/></div>
                        <div className="field">
                            <label>Password</label><input name="password" type="password" placeholder="password" required/></div>
                                <div className="field">
                                    <label>Confirm Password</label><input name="cpassword" type="password" placeholder="confirm password" required/></div>
                        <div className="field">
                            <label>Gender</label>
                            <select name="gender" name="gender" className="ui dropdown">
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Date of Birth</label><input name="date" type="date" placeholder="DOB" required/></div>
                        <div className="field">
                            <div className=""><input type="checkbox" required/>
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button className="ui button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
