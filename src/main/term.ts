import { spawn } from 'child_process'
import { IpcMainEvent } from 'electron'

export function execCommand(event: IpcMainEvent, cmd: string): void {
  const res = spawn(cmd)
  res.stdout.on('data', (data) => event.sender.send('stdout', data))
  res.stderr.on('data', (data) => event.sender.send('stderr', data))
}
