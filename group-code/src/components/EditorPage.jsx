import React, { useState } from 'react'
import Logo from '../assets/Filled_Logo.png'
import Client from './Client';
import Editor from './Editor';
import '../styles/EditorPage.css'

const EditorPage = () => {
  const [clients,setClients] = useState([{
    socketId:1,
    username:'Neeraj'
  },{
    socketId:2,
    username:'Boss'
  }]);
  return (
    <div className='mainWrap'>
      <div className="aside">
        <div className='asideInner'>
          <div className="logo">
            <img src={Logo} alt="logo" className='logoImage' />
          </div>
          <h3>Coders Connected</h3>
          <div className="clientsList">
            {clients.map(c=><Client key={c.socketId} username={c.username}/>)}

          </div>
        </div>
        <button className='copyBtn'>Copy Room ID</button>
        <button className='leaveBtn'>Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage