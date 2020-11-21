import logo from './logo.svg';
import './App.css';
import React, {Suspense} from 'react';
import {
    Route,
    HashRouter,
    Link,
    Switch
} from 'react-router-dom';
import {LoginForm} from "./LoginForm";

function App() {
    return (
        <Suspense fallback="loading">
            <HashRouter>
                <div className='row'>
                    <div className="Menu-list">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='column'>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/login">
                                <LoginForm/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        </Suspense>
    );
}

function Home() {
    return (
        <div className="App">
            <header className="App-page App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
