import React from 'react'

const SignUp = () => {
    return (
        <section class="sign-up__wrapper">
            <div class="sign-up">
                <div class="login-title">Sign up</div>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="login" />
                <input type="text" placeholder="password" />
                <button class="sign-up__btn">Sign up</button>
                <span class="register-span">You have account? <a href="/index.html">Log in</a></span>
            </div>
        </section>
    );
}

export default SignUp;