import React from 'react'
import Logo from '../assets/Logo_Small.png'
import '../styles/Home.css'
import {v4 as uuidV4} from 'uuid'

const Home = () => {

  const createNewRoom = (e) =>{
    e.preventDefault();
    const id = uuidV4();
    console.log(id);
  }

  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='logo'  src={Logo} alt='Group Code Logo'/>
        <h4 className='mainLabel'>Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className='inputBox' placeholder='ROOM ID'/>
          <input type="text" className='inputBox' placeholder='Username'/>
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">Dont have Invite Code? Create &nbsp; <a onClick={createNewRoom} href="" className='createNewBtn'>New Room</a></span>
        </div>
        
      </div>
    </div>
  )
}

export default Home