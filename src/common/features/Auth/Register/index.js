import React, { Component } from 'react'
import { connect } from 'react-redux'
// import GoogleLogin from 'react-google-login'
import { authActions } from '../../../../redux/actions/auth.actions'
import UserInfo from './userInfo'
import UserType from './userType'

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        surName: '',
        email: '',
        password: '',
        username: '',
      },
      submitted: false,
      errors: {},
      step: 1,
    }
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    // setUser((user) => ({ ...user, [name]: value.trim() }))
    this.setState((state) => ({
      user: {
        ...state.user,
        [name]: value.trim(),
      },
    }))
  }

  validate = () => {
    const { user } = this.state
    const errors = {}
    if (!user.firstName) errors.firstName = "Can't be blank"
    if (user.firstName && user.firstName.length > 26)
      errors.firstName = "Can't be more than 26 characters"
    if (user.firstName && !/^[A-Za-z]+$/.test(user.firstName))
      errors.firstName = 'Can only contain letters'
    if (!user.surName) errors.surName = "Can't be blank"
    if (user.surName && user.surName.length > 26)
      errors.surName = "Can't be more than 26 characters"
    if (user.surName && !/^[A-Za-z]+$/.test(user.surName))
      errors.surName = 'Can only contain letters'
    if (!user.username) errors.username = "Can't be blank"
    if (user.username && !/^[A-Za-z0-9_]+$/.test(user.username))
      errors.username = 'Can only be alpha numeric'
    if (!user.password) errors.password = "Can't be blank"
    if (
      user.password &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        user.password
      )
    )
      errors.password = 'Use Strong Password'
    if (!user.email) errors.email = "Can't be blank"
    if (
      user.email &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.email
      )
    )
      errors.email = 'Invalid Email'
    return errors
  }

  validateForm = () => {
    const errors = this.validate()
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      console.log('no errors')
      this.setState((state) => ({
        step: state.step + 1,
      }))
    }
  }

  handleSubmit = (e, type) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors })
    this.setState({ submitted: true })
    // setUser((user) => ({ ...user, middlename: type }))
    if (Object.keys(errors).length === 0) {
      console.log('no errors')
      this.setState(
        (state) => ({
          user: {
            ...state.user,
            middlename: type,
          },
        }),
        () => {
          console.log(this.state.user, 'user')
          this.props.register(this.state.user)
        }
      )
    }
  }

  // const connectGoogle = (response) => {
  //   dispatch(authActions.googleAuth(response.tokenObj.access_token))
  // }
  // const connectGoogleError = (response) => {}

  render() {
    const { errors, user, step } = this.state

    switch (step) {
      case 1:
        return (
          <UserInfo
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            user={user}
            errors={errors}
          />
        )
      case 2:
        return (
          <UserType prevStep={this.prevStep} handleSubmit={this.handleSubmit} />
        )
      default:
        console.log('This is a multi-step form built with React.')
    }
  }
}

const mapStateToProps = (state) => {
  return {
    registering: state.registration.registering,
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(authActions.register(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
