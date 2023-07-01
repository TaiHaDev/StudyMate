import React, { useRef } from 'react'
import './loginPage.css'
import backgroundImage from '../../asset/image/background.jpg'
import facebookImage from '../../asset/image/facebook.png'
import githubImage from '../../asset/image/github.png'
import googleImage from '../../asset/image/google.png'
import instagramImage from '../../asset/image/instagram.png'

const LoginPage = () => {
    const wrapperRef = useRef();
    const loginLinkRef = useRef();
    const registerLinkRef = useRef();
    const btnPopupRef = useRef();
    const iconCloseRef = useRef();

    const handleLoginClick = () => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.add("active-popup");
      }
    };

    const handleIconCloseClick = () => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.remove("active-popup");
      }
    };

    const handleRegisterLinkClick = () => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.add("active");
      }
    };

    const handleLoginLinkClick = () => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.remove("active");
      }
    };

  return (
    <div className='body-login' style={{ backgroundImage:`url(${backgroundImage})` }}>
    <header className='header-login'>
        <h2 className="logo">StudyMate</h2>
        <nav className="navigation">
            <a href="#">Home</a>
            <a href="#">Community</a>
            <a href="#">Study Space</a>
            <a href="#">About</a>
            <button className="btnLogin-popup" ref={btnPopupRef} onClick={handleLoginClick} >Login</button>
        </nav>
    </header>

    <div className="wrapper" ref={wrapperRef}>
        <span className="icon-close" ref={iconCloseRef}  onClick={handleIconCloseClick} > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</span>
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required />
                    <label >Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required/>
                    <label >Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit" className="btn">Login</button>

                
                <div className="line"></div>

                <div className="social_login">
                     <div className="social-icons">
                        <div className="icon-facebook"><img src={facebookImage} alt="" width="40" height="40"/></div>
                        <div className="icon-google"><img src={googleImage} alt="" width="40" height="40"/></div>
                        <div className="icon-instagram"><img src={instagramImage} alt="" width="40" height="40"/></div>
                    </div>
                </div>

                <div className="login-register">
                    <p>Don't have an account ? <p  ref={registerLinkRef} className="register-link" onClick={handleRegisterLinkClick}>Register</p></p>
                </div>

            </form>
        </div>

        <div className="form-box register">
            <h2>Registration</h2>
            <form action="#">
            <div className="input-box">
                    <span className="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="text" required/>
                    <label >Username</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required/>
                    <label >Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required/>
                    <label >Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>I agree to the terms & conditions</label>
                </div>
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p>Already have an account? <p className="login-link" ref={loginLinkRef} onClick={handleLoginLinkClick} >Login</p></p>
                </div>
            </form>
        </div>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default LoginPage