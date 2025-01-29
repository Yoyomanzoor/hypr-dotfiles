# Hyperland dotfiles

These are my dotfiles, made on top of [prasanthrangan/hyprdots](https://github.com/prasanthrangan/hyprdots). 

- EndeavourOS running Hyprland
- Terminal: kitty
- Shell: fish
- Editor: neovim
- File manager: ranger
- Browser: vieb

## Installation

First, install [Hyde](https://github.com/prasanthrangan/hyprdots). Can also install and use Hyde-install to install more themes with `Hyde theme import`. Then clone and replace with this repo.

## Keybindings

Overtime, I realized I was developing a 'keybinding philosophy'. Naturally, everything follows the same general VIM keybindings, but at some point it became clear that I compartmentalize which keys go to which program. I formalize it below:

| mod key | program | tool |
| ------- | ------- | ---- |
| `Ctrl` | nvim, tmux | for select shared actions |
| `Space` | nvim | editor |
| `Ctrl+Space` | tmux | multiplexor |
| `Ctrl+Shift` | kitty | terminal |
| `Ctrl+Alt` | fish | shell |
| `Gui` | Hypr | window manager |

If I use a different tool for any of these, they should follow the same mod key.

For each of these, there are subgroupings. For example, for neovim, `Space+b` would be buffer actions, `Space+w` for web actions, and so on. For window manager movement keys in particular, I have this consistent action scheme:

| mod combination | action target |
| --------------- | ------------- |
| `Gui` | move to window |
| `Gui+Shift` | move and carry window |
| `Gui+Ctrl` | move to workspace |
| `Gui+Ctrl+Shift` | move and carry window to workspace |

There are also shared principles for multiple tools, such as `Alt` for resizing (which works well, since a tool where you probably don't need to resize in is the shell, so `Alt` as a default modulator is suitable). For example, `Alt+Shift` will resize for tmux, and `Gui+Alt` will resize for WM.

Of course, there are plenty of exceptions to all of this, that's why it's سماعي and not اصولي!
