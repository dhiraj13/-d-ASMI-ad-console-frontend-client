import { getFromLocalStorage } from '../../../helpers/localstorage'

const Dashboard = () => {
  const userType = getFromLocalStorage('userType')
  const username = getFromLocalStorage('username')
  return (
    <div className='nk-main'>
      <div className='nk-wrap nk-wrap-nosidebar'>
        <div className='nk-content'>
          {/* Auth Body */}
          <div className='nk-block nk-block-middle'>
            <div className='nk-auth-body' style={{ borderRadius: '10px' }}>
              <h2>Welcome to the Dashboard, {username}</h2>
              <p>You are a {userType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
