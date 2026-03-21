export default function Login()
{
    const doLogin = (e:any) => {
        e.preventDefault();
        alert('doIt()');
    }
    return (
        <div id="loginDiv">
            <span id="inner-title">PlEASE LOG IN</span><br />
            <input type="text" id="loginName" placeholder="Username" /><br />
            <input type="password" id="loginPassword" placeholder="Password"/><br />
            <input type="submit" id="loginButton" className="buttons" value="Do it" onClick={doLogin}/>
            <span id="loginResult"></span>
        </div>
    );
}