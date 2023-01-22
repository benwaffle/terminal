import { ipcRenderer } from 'electron'
import { useEffect, useState } from 'react'
import Input from './components/Input'
import Output from './components/Output'

function App(): JSX.Element {
  const [output, setOutput] = useState('')

  useEffect(() => {
    ipcRenderer.on('stdout', (event, data) => {
      setOutput(o => o + data)
    })

    ipcRenderer.on('stderr', (event, data) => {
      setOutput(o => o + data)
    })

    return () => {
      ipcRenderer.removeAllListeners('stdout')
      ipcRenderer.removeAllListeners('stderr')
    }
  })

  return (
    <div className="container">
      <Input />
      <Output />
      <div>{output}</div>
    </div>
  )
}

export default App
