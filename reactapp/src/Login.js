import React, { useState } from 'react'
import './App.css';
import FirstPage from './WorkFlowFirstPage'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Login = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setCheck] = useState(false);
    const [login, setLogin] = useState(false);

    console.log("%c Username :", 'background: yellow')

    const style = {
        // background: "blue",
        marginTop: "10%",
        marginLeft: "45%"
    }
    const para = {
        marginLeft: "12%",
        color: "#0ca3d2"
    }

    var loginSubmit = loginSubmit = () => {
        localStorage.username = username
        localStorage.password = password
        localStorage.isChecked = isChecked
        console.log('localStorage.username')        
        setLogin(true)
        props.history.push('/FirstPage')
    }
    return (
        <>
            {
                !login ? <div className='container'>
                    <p style={style}>Login</p>
                    <form>

                        {/* <label forhtml="username">Username</label> */}
                        <input name="username" placeholder="Username" value={username} onChange={({ target }) => setUsername(target.value)}></input>
                        <br></br>
                        {/* <label>Password </label> */}
                        <input type="password" placeholder="Password"></input>
                        <div className="item">
                            <input type='checkbox' onChange={({ target }) => setCheck(target.value)}></input>
                            <label>Remember me</label>
                        </div >
                        <br></br>
                        <input type='submit' value='LOGIN' onClick={loginSubmit}></input>

                        <a href="" style={para}>Dont have an account? Sign up here</a>
                        {/* <button style={style}>Login</button> */}
                    </form>
                </div>
                    : <Route path="/FirstPage" component={FirstPage} />}
        </>
    )
}

export default () => (
    <div>
        <Router>
            <Route component={Login} />
        </Router>
    </div>
);
