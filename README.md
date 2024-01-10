## Backing up dotfiles

From [this link](https://www.atlassian.com/git/tutorials/dotfiles).

```bash
git init --bare $HOME/.cfg
alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
config config --local status.showUntrackedFiles no
```

Add this to `fish.config`.

```fish
alias config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
```

Add stuff to config

```bash
config add $FILE
config commit -m "Add $FILE"
config push
```

Init with git

```bash
config remote add origin REMOTE-URL
config remote -v
config push origin main #or whatever branch
```

