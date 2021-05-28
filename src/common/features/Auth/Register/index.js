import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import GoogleLogin from 'react-google-login'

// import { OutlinedInput, PasswordInput } from '../../../components/Form/Input'
import { authActions } from '../../../../redux/actions/auth.actions'
import UserInfo from './userInfo'
import UserType from './userType'

const RegisterPage = () => {
  const [user, setUser] = useState({
    firstName: '',
    surName: '',
    email: '',
    password: '',
    username: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(1)
  const registering = useSelector((state) => state.registration.registering)
  const dispatch = useDispatch()

  console.log(submitted, registering)

  // useEffect(() => {
  //     dispatch(authActions.logout())
  // })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((user) => ({ ...user, [name]: value.trim() }))
  }

  const validate = () => {
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

  const validateForm = () => {
    const errors = validate()
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      console.log('no errors')
      setStep(step + 1)
    }
  }

  const handleSubmit = async (e, type) => {
    e.preventDefault()
    await setUser((user) => ({ ...user, middlename: type }))
    const errors = validate()
    setErrors(errors)
    setSubmitted(true)
    // if (Object.keys(errors).length === 0) {
    //   console.log('no errors')
    //   dispatch(authActions.register(user))
    // }
  }

  // const connectGoogle = (response) => {
  //   dispatch(authActions.googleAuth(response.tokenObj.access_token))
  // }
  // const connectGoogleError = (response) => {}

  switch (step) {
    case 1:
      return (
        <UserInfo
          validateForm={validateForm}
          handleChange={handleChange}
          user={user}
          errors={errors}
        />
      )
    case 2:
      return (
        <UserType
          prevStep={() => setStep(step - 1)}
          handleSubmit={handleSubmit}
        />
      )
    default:
      console.log('This is a multi-step form built with React.')
  }
}

export default RegisterPage
