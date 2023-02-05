import { spawn } from 'child_process'
import { IpcMainEvent } from 'electron'

export function execCommand(event: IpcMainEvent, id: number, cmd: string): void {
  console.log('execCommand', id, cmd)

  const parts = cmd.split(' ')
  const res = spawn(parts[0], parts.slice(1))
  res.stdout.on('data', (data) => event.sender.send('stdout', id, data))
  res.stderr.on('data', (data) => event.sender.send('stderr', id, data))
}
