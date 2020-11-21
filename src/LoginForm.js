import React from "react";
import './App.css';
import './LoginForm.css';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            selectedOption: "Custom"
        };
    }

    render() {
        const {login, password} = this.state;
        return (
            <div className="App">
                <form className="page App-header">
                    <label htmlFor="login">Login</label>
                    <input
                        name="login"
                        type="text"
                        placeholder="Enter your login"
                        value={login}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="login">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <div className="login-options">
                        <label>
                            <input type="radio" value="GitHub" checked={this.state.selectedOption === 'GitHub'}
                                   onChange={this.handleOptionChange}/>
                            GitHub
                        </label>
                        <label>
                            <input type="radio" value="Google" checked={this.state.selectedOption === 'Google'}
                                   onChange={this.handleOptionChange}/>
                            Google
                        </label>
                    </div>
                    <button type="button" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }


    handleSubmit = event => {
        console.log("Submitting");
        console.log(this.state);
    };
}