import React from "react";
import { Link } from 'react-router-dom'
import { OutlinedInput } from "../../../components/Form/Input";
import RegularButton from "../../../ui/Button";

const ForgetPassword = () => {
    return (
        <div className="nk-main">
            <div className="nk-wrap nk-wrap-nosidebar">
                <div className="nk-content">
                    {/* Auth Body */}
                    <div style={{ borderRadius: '10px' }} className="nk-block nk-block-middle nk-auth-body text-center bg-white">
                        <h3>Forget Password?</h3>
                        <p className="px-4">Enter your email address and we will send you a email for reset password.</p>
                        <div className="mt-4">
                            <OutlinedInput name="email" label="Email Address" size="lg" />
                            <RegularButton url='/' buttonClasses="btn btn-primary w-100"> <p className="w-100 text-center">Submit</p></RegularButton>
                        </div>
                        <div className="mt-4">
                            <p>Return to <Link to="#">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;