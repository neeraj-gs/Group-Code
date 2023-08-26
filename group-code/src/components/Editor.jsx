import React, { useEffect ,useRef} from 'react'
import Codemirror from 'codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/dracula.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import '../styles/Editor.css'

const Editor = () => {
  const textareaRef = useRef(null);
  const codeMirrorInstanceRef = useRef(null);

    useEffect(()=>{ //so that it is rendered only once
      if(!codeMirrorInstanceRef.current){
        codeMirrorInstanceRef.current = Codemirror.fromTextArea(
        textareaRef.current,
        { //this creates a mirror ont the text area and adds its editor
          mode: {name:'javascript',json:true}, //optiosn to configure editor , to enable mode we need to import some jsvascript
          theme:'dracula', //to enale it we need to import CSS
          autoCloseTags:true,
          autoCloseBrackets:true,
          lineNumbers:true,
      }
     );
    }
    
  },[]);
        
    
  return (
    <textarea ref={textareaRef} id="realtimeEditor"></textarea>
  )
}

export default Editor