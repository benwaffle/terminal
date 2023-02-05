import { KeyboardEvent, useState } from 'react'

export default function Input({
  execCommand
}: {
  execCommand: (input: string) => void
}): JSX.Element {
  const [text, setText] = useState('')

  function keyUp(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key == 'Enter') {
      execCommand(text)
      setText('')
    }
  }

  function change(event): void {
    setText(event.target.value)
  }

  return <input className="the-input" onKeyUp={keyUp} value={text} onChange={change} />
}
