import React, { useState } from 'react'
import './index.css'
import 'codemirror/lib/codemirror.css'//CodeMirror is a code-editor component that can be embedded in Web pages.
import 'codemirror/theme/material.css' //Theme used for code editors
import 'codemirror/mode/xml/xml' //languages used for the code editor
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'//languages used fr the code editor
import { Controlled as ControlledEditor } from 'react-codemirror2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {//this editor function is exported to app.js
  const {                               //this is a function component
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true) //accepts initial state and returns two values

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}> 
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)} //for expanding and collapsing the editor
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,  //these options are from codemirror library 
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}