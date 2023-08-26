import React, { useState } from 'react'
import Logo from '../assets/Filled_Logo.png'

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
            {clients.map(c=><Client key={client.socketId} username={clients.username}/>)}

          </div>
        </div>
      </div>
      <div className="editorWrap">Editor Goes Here</div>
    </div>
  )
}

export default EditorPage