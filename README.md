# terminal

* https://lobste.rs/s/eq2dyf/day_new_command_line_interface_shell
* https://arcan-fe.com/2022/10/15/whipping-up-a-new-shell-lashcat9/
* https://matklad.github.io/2019/11/16/a-better-shell.html
* https://www.destroyallsoftware.com/talks/a-whole-new-world
* https://invisible-island.net/vttest/
* https://github.com/oilshell/oil/wiki/Interactive-Shell
* https://project-mage.org/the-power-of-structure#orgecfa2cc
* https://taylor.town/smel-000
* https://github.com/ferdinandyb/dotfiles/blob/5800e68b0c44d6d0573c41a6a344b50720ccb2e0/.config/contour/retirethemiddleman.md
* https://phaazon.net/blog/development-environments
* https://www.reddit.com/r/programming/comments/vlp76z/development_environments_discussion_about/
* https://terminal.click/posts/2025/04/the-wizard-and-his-shell/

## Prior art
* https://github.com/unconed/TermKit
* https://terminal.click/
* https://github.com/breuleux/terminus
* https://domterm.org/Features.html
* https://github.com/hoeck/schirm
* https://warp.dev
* https://github.com/railsware/upterm
* templeOS
* https://github.com/ngs-lang/ngs/wiki/UI-Design
* https://news.ycombinator.com/item?id=26530527
* https://www.youtube.com/watch?v=dP1xVpMPn8M
* https://www.youtube.com/watch?v=sqHY3YDGj80
* https://extraterm.org/guide.html#the-show-command

## features
* excel-like dependency graph through pipes
* more structured outputs (like nushell & powershell)
* no blocking by default (all jobs run with &)
* collapsible outputs / folding
* `cat image.jpg`, videos, etc...
* real-time visual piping e.g. through imagemagick
* more interactive stuff? html?
* [autocompletion](https://fig.io/) & discoverability
* no pty
* backwards compatible with common shell syntax features
* hyperlinks
* combine man/info pages/tldr/bro
* network inspector showing all HTTP calls made, like browser dev tools
* notes, like jupyter
* pagers and multiplexers shouldn't need to exist
* https://news.ycombinator.com/item?id=39504072

## implementation options
* xtermjs
    * [image rendering](https://github.com/jerch/xterm-addon-image/blob/c3f41e7cc8d86d73d070003b82c049fabe43cdaf/src/ImageRenderer.ts)

## pictures
![image](https://github.com/benwaffle/terminal/assets/1713819/9796cd61-8e2c-45e7-b4ae-c24ef8a10533)
