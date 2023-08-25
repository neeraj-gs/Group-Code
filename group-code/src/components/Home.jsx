import React, { useState } from 'react'
import Logo from '../assets/Logo_Small.png'
import '../styles/Home.css'
import {v4 as uuidV4} from 'uuid'

const Home = () => {

  const [roomId,setRoomId] = useState(''); //when we click on new room the random id has to be stored in room id inout place
  //similarly we need to do it for username input as well
  const [username,setUsername] =useState('');

  const createNewRoom = (e) =>{
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
  }

  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='logo'  src={Logo} alt='Group Code Logo'/>
        <h4 className='mainLabel'>Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className='inputBox' placeholder='ROOM ID' value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
          <input type="text" className='inputBox' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">Dont have Invite Code? Create &nbsp; <a onClick={createNewRoom} href="" className='createNewBtn'>New Room</a></span>
        </div>
        
      </div>
    </div>
  )
}

export default Home