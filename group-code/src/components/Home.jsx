import React from 'react'
import Logo from '../assets/GroupCode_Logo.png'

const Home = () => {
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img src={Logo} alt='Group Code Logo'/>
        <h4 className='mainLabel'>Paste Invitation ROOM Id</h4>
        <div className="inputGroup">
          <input type="text" className='inputBox' placeholder='ROOM Id'/>
          <input type="text" className='inputBox' placeholder='Username'/>
          <button className="btn joinBtn">Join</button>
          <span className="craeteInfo">Dont have Invite Code? Create &nbsp; <a href="" className='createNewBtn'>New Room</a></span>
        </div>
        
      </div>
    </div>
  )
}

export default Home