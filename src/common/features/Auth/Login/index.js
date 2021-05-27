import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { OutlinedInput, PasswordInput } from "../../../components/Form/Input";
// import RegularButton from "../../../ui/Button";
import Logo from '../../../../assets/images/logo-nav.png';
import GoogleIcon from '../../../../assets/images/icon-google.svg';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../../../redux/actions/auth.actions'

const LoginPage = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;


    const loggingIn = useSelector(state => state.authentication.loggingIn)
    const dispatch = useDispatch()
    const location = useLocation()

    console.log(submitted, loggingIn)
    // reset login status
    // useEffect(()=> {
    //     dispatch(authActions.logout())
    // }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state and default to home page
            const { from } = location.state || { from: { pathname: "/" } }
            dispatch(authActions.login(username, password, from))
        }
    }

    return (
        <div className="nk-main">
            <div className="nk-wrap nk-wrap-nosidebar">
                <div className="nk-content">
                    {/* Auth Body */}
                    <div className="nk-block nk-block-middle">
                        <div className="nk-auth-body text-center bg-white" style={{ borderRadius: '10px' }}>
                            {/* Brand Logo */}
                            <div className="brand-logo">

                                <Link to="/" className="logo-link">
                                    <img src={Logo} width="88" height="43" alt="Logo" />
                                </Link>

                            </div>
                            {/* Main Login Form Section - replace with form element later */}
                            <div className="nk-block-head-content py-2">
                                <h5 className="nk-block-title">Sign in</h5>
                                <div className="nk-block-des"><p>Use your ASMI Account</p></div>

                                {/* Login Form */}
                                <form onSubmit={handleSubmit} >
                                    <div className="mt-4">
                                        <OutlinedInput
                                            name="username"
                                            label="Email"
                                            size="lg"
                                            value={username}
                                            onChange={handleChange}
                                        />
                                        <PasswordInput
                                            name="password"
                                            type="password"
                                            label="Password"
                                            size="lg"
                                            value={password}
                                            onChange={handleChange}
                                        />
                                        <div className="form-group mt-4">
                                            <button className="btn btn-primary w-100"><p className="w-100 text-center">Sign In</p></button>
                                        </div>
                                        {/* <RegularButton url='/login' buttonClasses="btn btn-primary w-100"> <p className="w-100 text-center">Sign In</p></RegularButton> */}
                                    </div>
                                </form>

                                {/* OAuth Signin */}
                                <div className="mb-1">
                                    <p className="mt-3">or sign in with</p>
                                    <Link to="/register">
                                        <img src={GoogleIcon} alt="Logo Nav" height="42" width="42" />
                                    </Link>
                                </div>
                                {/* Signup Footer Link */}
                                <div>
                                    <p>New in Ad Injection? <Link to="/register"><u>Create Account</u></Link></p>
                                </div>
                            </div>
                        </div>
                        {/* Footer Navigation */}
                        <div className="nk-auth-body text-right py-1 pr-0"><p>Nav Linkssss</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;