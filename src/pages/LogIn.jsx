import React from 'react'

const LogIn = () => {
    return (
        <section class="sign-up__wrapper">
            <div class="sign-up">
                <div class="login-title">Log in</div>
                <input type="text" placeholder="login" />
                <input type="text" placeholder="password" />
                <button class="sign-up__btn">Sign in</button>
                <span class="register-span">You don't have account? <a href="/register.html">Register</a></span>
            </div>
        </section>
    );
}

export default LogIn;