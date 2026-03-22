import {useState} from 'react'

const [message, setMessage] = useState('')
const [loginName, setLoginName] = useState('');
const [loginPassword, setPassword] = useState('');
export default function Login()
{
    const doLogin = (e:any) => {
        e.preventDefault();
        alert('doIt()' + loginName + loginPassword);
    }

    const handleSetUsername = (e:any) => {
        setLoginName(e.target.value);
    }

    const handleSetPassword = (e:any) => {
        setPassword(e.target.value);
    }
    return (
        <div id="loginDiv">
            <span id="inner-title">PlEASE LOG IN</span><br />
            <input type="text" id="loginName" placeholder="Username" onChange={handleSetUsername}/><br />
            <input type="password" id="loginPassword" placeholder="Password" onChange={handleSetPassword}/><br />
            <input type="submit" id="loginButton" className="buttons" value="Do it" onClick={doLogin}/>
            <span id="loginResult">{message}</span>
        </div>
    );
}