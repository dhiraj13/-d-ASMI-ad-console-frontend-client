import { Link } from "react-router-dom";
import React from "react";
import EmailConfirmationImage from '../../../assets/images/email-confirm.svg'

const EmailConfirmation = ({ email }) => {
    return (
        <div className="nk-main">
            <div className="nk-wrap nk-wrap-nosidebar">
                <div className="nk-content">
                    {/* Auth Body */}
                    <div className="nk-block nk-block-middle">
                        <div className="nk-auth-body text-center bg-white px-5" style={{ borderRadius: '10px' }}>
                            <div className="my-4">
                                <img src={EmailConfirmationImage} alt="Email Confirmation" height="200" width="230" />
                            </div>

                            <div className="my-4">
                                <h4>Email Confirmation</h4>
                                <p>We have sent email to {email} to confirm the validity of your email address. After receiving the email follow the link provided to complete your registration</p>
                            </div>
                            <hr />
                            <div>
                                <p>If you have not received any mail, <Link to="/">Resend Confirmation Email</Link></p>
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

export default EmailConfirmation;