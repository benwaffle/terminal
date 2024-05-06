import { useEffect, useState } from 'react'
import Input from './components/Input'

interface Block {
  id: number
  input: string
  output: string[]
}

const decoder = new TextDecoder()

function App(): JSX.Element {
  const [blocks, setBlocks] = useState<Block[]>([])

  function execCommand(input: string): void {
    if (input === 'clear') {
      setBlocks([])
      return
    }

    const id = Math.round(Math.random() * 1000000)
    setBlocks((blocks) => [{ id, input, output: [] }, ...blocks])
    window.api.execCommand(id, input)
  }

  function onNewText(ev, id: number, data: Uint8Array): void {
    setBlocks((blocks) => {
      const index = blocks.findIndex((b) => b.id === id)
      if (index === -1) {
        console.log('Could not find block with id', id)
        console.log(blocks)
        return blocks
      }
      const old = blocks
      const updated = [
        ...blocks.slice(0, index),
        {
          ...blocks[index],
          output: [...blocks[index].output, decoder.decode(data)]
        },
        ...blocks.slice(index + 1)
      ]
      return updated
    })
  }

  useEffect(() => {
    console.log('registering listeners')
    window.electron.ipcRenderer.on('stdout', onNewText)
    window.electron.ipcRenderer.on('stderr', onNewText)

    return () => {
      console.log('Removing listeners')
      window.electron.ipcRenderer.removeAllListeners('stdout')
      window.electron.ipcRenderer.removeAllListeners('stderr')
    }
  })

  return (
    <div className="container">
      <Input execCommand={execCommand} />
      {blocks.map((b) => (
        <div key={b.id}>
          <pre style={{ fontSize: '14px', wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            » {b.input}
            {'\n'}
            {b.output.join('')}
          </pre>
        </div>
      ))}
    </div>
  )
}

export default App
