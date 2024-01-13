## TODO

- Replace the waifu thing with a prayer time widget
- Prayer times in top bar
- Remake the Quran thing from KDE setup to sidebar
- Update color changing script to include other tools, like `alacritty`, 

## Setup

[OG](https://github.com/end-4/dots-hyprland/tree/illogical-impulse)

- Arch running hypr
- Terminal: foot, alacritty, kitty
- Shell: fish + starship
- IDE: nvim, vscode, rstudio
- dmenu: ags, anyrun, ags

## Backing up dotfiles

From [this link](https://www.atlassian.com/git/tutorials/dotfiles).

```fish
git init --bare $HOME/.cfg
alias home '/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
home config --local status.showUntrackedFiles no
```

Add this to `fish.config`.

```fish
alias home '/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
```

Add stuff to config

```fish
home add $FILE
home commit -m "Add $FILE"
home push
```

Init with git

```fish
home remote add origin REMOTE-URL
home remote -v
home push origin main #or whatever branch
```


