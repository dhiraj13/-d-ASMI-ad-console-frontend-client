import { Link } from 'react-router-dom'
import { OutlinedInput, PasswordInput } from '../../../components/Form/Input'

const UserInfo = ({ validateForm, handleChange, user, errors }) => {
  return (
    <div className='nk-main'>
      <div className='nk-wrap nk-wrap-nosidebar'>
        <div className='nk-content'>
          {/* Auth Body */}
          <div className='nk-block nk-block-middle'>
            <div
              className='nk-auth-body text-center bg-white'
              style={{ borderRadius: '10px' }}
            >
              {/* Brand Logo */}
              <div className='brand-logo'>
                <Link to='/' className='logo-link'>
                  <img
                    src='/static/images/logo-nav.png'
                    width='88'
                    height='43'
                    alt='ASMI'
                  />
                </Link>
              </div>
              {/* Main Login Form Section - replace with form element later */}
              <div className='nk-block-head-content py-2'>
                <h5 className='nk-block-title'>Sign up</h5>
                <div className='nk-block-des'>
                  <p>Create your ASMI Account</p>
                </div>

                {/* Login Form */}
                {/* <form name='form' onSubmit={validateForm}> */}
                <div className='mt-4'>
                  <div className='form-row'>
                    <div className='col'>
                      <OutlinedInput
                        name='firstName'
                        label='First Name'
                        size='lg'
                        value={user.firstName}
                        onChange={handleChange}
                        error={errors}
                      />
                    </div>
                    <div className='col'>
                      <OutlinedInput
                        name='surName'
                        label='Last Name'
                        size='lg'
                        value={user.surName}
                        onChange={handleChange}
                        error={errors}
                      />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <OutlinedInput
                      name='email'
                      label='Email'
                      size='lg'
                      value={user.email}
                      onChange={handleChange}
                      error={errors}
                    />
                  </div>

                  <div className='form-row mt-4'>
                    <div className='col'>
                      <OutlinedInput
                        name='username'
                        type='text'
                        label='Username'
                        className='form-control form-control-outlined form-control-lg'
                        size='lg'
                        value={user.username}
                        onChange={handleChange}
                        error={errors}
                      />
                    </div>
                    <div className='col'>
                      <PasswordInput
                        type='password'
                        name='password'
                        label='Password'
                        size='lg'
                        value={user.password}
                        onChange={handleChange}
                        error={errors}
                      />
                    </div>
                  </div>
                  <div className='mt-4'>
                    {/* <RegularButton url='#' buttonClasses="btn btn-primary w-100"> <p className="w-100 text-center">Sign Up</p></RegularButton> */}
                    <div className='form-group'>
                      <button
                        className='btn btn-primary btn-block'
                        onClick={validateForm}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                {/* {message && (
                                            <div className="form-group">
                                                <div className="alert alert-success" role="alert">
                                                    {message}
                                                </div>
                                            </div>
                                        )} */}

                {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
                {/* </form> */}

                {/* OAuth Signin */}
                <div className='mb-1'>
                  <p className='mt-3'>or sign up with</p>
                  <Link to='/'>
                    <img
                      src={'/static/images/icon-google.svg'}
                      alt='Logo Nav'
                      height='42'
                      width='42'
                    />
                  </Link>
                  {/* <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        render={(renderProps) => (
                          <img
                            src={'/static/images/icon-google.svg'}
                            alt='Logo Nav'
                            height='42'
                            width='42'
                            onClick={renderProps.onClick}
                            style={{ cursor: 'pointer' }}
                          />
                        )}
                        icon={false}
                        onSuccess={connectGoogle}
                        onFailure={connectGoogleError}
                        cookiePolicy={'single_host_origin'}
                      /> */}
                </div>
                {/* Signup Footer Link */}
                <div>
                  <p>
                    Already have an account?{' '}
                    <Link to='/'>
                      <u>Signin</u>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* Footer Navigation */}
            <div className='nk-auth-body text-right py-1 pr-0'>
              <p>Nav Linkssss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
