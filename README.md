# lush

* https://lobste.rs/s/eq2dyf/day_new_command_line_interface_shell
* https://matklad.github.io/2019/11/16/a-better-shell.html
* https://www.destroyallsoftware.com/talks/a-whole-new-world
* https://invisible-island.net/vttest/
* https://domterm.org/Features.html
* https://github.com/oilshell/oil/wiki/Interactive-Shell
* https://github.com/unconed/TermKit

## features
* excel-like dependency graph through pipes
  * hover over command to peek at intermediate output
* more structured outputs (like nushell & powershell)
* no blocking by default (all jobs run with &)
* collapsible outputs / folding
  * <details> elements
  * pretty json display 
* can we replace k9s?
* `cat image.jpg`, videos, etc...
* real-time visual piping e.g. through imagemagick
* more interactive stuff? html?
* [autocompletion](https://fig.io/) & discoverability
* no pty
* backwards compatible with common shell syntax features
* hyperlinks
* combine man/info pages/tldr/bro
* CPU & memory monitor
* network inspector showing all HTTP calls made, like browser dev tools
  * HTTP_PROXY might make this easy
* notes/sharing/saving, like jupyter
* ls
  * thumbnails & icons
  * preview
  * double click to open
  * hover effect

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
