const UserType = ({ prevStep, handleSubmit }) => {
  return (
    <div className='nk-main'>
      <div className='nk-wrap nk-wrap-nosidebar'>
        <div className='nk-content'>
          {/* Auth Body */}
          <div className='nk-block nk-block-middle'>
            <div className='nk-auth-body' style={{ borderRadius: '10px' }}>
              <h2>How would you like to sign up?</h2>
              <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '1rem' }}>
                  <h3>Publisher</h3>
                  <button onClick={(e) => handleSubmit(e, 'publisher')}>
                    Ads Publisher
                  </button>
                </div>
                <div>
                  <h3>Provider</h3>
                  <div style={{ display: 'flex' }}>
                    <button onClick={(e) => handleSubmit(e, 'provider')}>
                      Media Platform
                    </button>
                    <button onClick={(e) => handleSubmit(e, 'provider')}>
                      Game Platform
                    </button>
                  </div>
                </div>
              </div>
              <div>{/* <button onClick={prevStep}>Back</button> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserType
