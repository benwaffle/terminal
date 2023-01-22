import { KeyboardEvent, useState } from 'react'

export default function Input(): JSX.Element {
  const [api] = useState(window.api)
  const [text, setText] = useState('')

  async function keyDown(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key == 'Enter') {
      await api.execCommand(text)
      setText('')
    } else if (['Meta', 'Alt', 'Control', 'Shift'].includes(event.key)) {
      // pass
    } else {
      setText((t) => t + event.key)
    }
  }

  return <input className="the-input" onKeyDown={keyDown} value={text} defaultValue={''} />
}
