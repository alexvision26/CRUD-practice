import React from "react";

export default function Login(props) {
    // How can we log in? What do we need to do?

    return (
        <div>
            <h1>Welcome to the Safari App!</h1>
            <h2>I can't show you more until you log in. Please build out a login.</h2>

            <form>
                <label>Username: <input type='text' name='username'/></label><br/>
                <label>Password: <input type='password' name='password'/></label><br/>
            </form>
        </div>
    )
}