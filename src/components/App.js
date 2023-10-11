import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'

function App() {
  const [html, setHtml] = useLocalStorage('html', '')  //The useLocalStorage hook is likely a custom hook that allows us to store 
  const [css, setCss] = useLocalStorage('css', '')     //and retrieve values from the browser's local storage.
  const [js, setJs] = useLocalStorage('js', '')        // This allows us to persist the values of html, css, and js 
  const [srcDoc, setSrcDoc] = useState('') //useState Hook allows us to track state in a function component
                                           
  useEffect(() => { //useEffect allows us to perform side effects in components

//useState accepts an initial state and returns two valuese
//The current state
//A function that updates the state.
    const timeout = setTimeout(() => {//setTimeout() method calls a function after a number of milliseconds
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)//only after 250 miliseconds the code in the code editors will execute

    return () => clearTimeout(timeout)//cancel the old timeout and create new one 
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"   //these values are recieved by Editor function component as props
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}//srcDoc is here used to generate a combined iframe source that renders
                           //output based on the code stored in the html, css, js
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;