import { KeyboardEvent, useEffect, useState } from 'react'

export default function Input(): JSX.Element {
  const [api] = useState(window.api)
  const [text, setText] = useState('')

  function keyUp(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key == 'Enter') {
      api.execCommand(text)
      setText('')
    }
  }

  function change(event): void {
    setText(event.target.value)
  }

  return <input className="the-input" onKeyUp={keyUp} value={text} onChange={change} />
}
