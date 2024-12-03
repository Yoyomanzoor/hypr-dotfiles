set -gx EDITOR nvim
set -g fish_greeting

if status is-interactive
    starship init fish | source
end

# List Directory
alias ls 'eza -al --color=always --group-directories-first --icons=auto' # preferred listing
alias la 'eza -a --color=always --group-directories-first --icons=auto'  # all files and dirs
alias ll 'eza -lha --color=always --group-directories-first --icons=auto --sort=name'  # long format
alias lt 'eza --icons=auto --tree' # list folder as tree
alias ltt 'eza -aT --color=always --group-directories-first --icons=auto' # tree listing
alias l. 'eza -ald --color=always --group-directories-first --icons=auto .*' # show only dotfiles

# Handy change dir shortcuts
abbr .. 'cd ..'
abbr ... 'cd ../..'
abbr .3 'cd ../../..'
abbr .4 'cd ../../../..'
abbr .5 'cd ../../../../..'


# Always mkdir a path (this doesn't inhibit functionality to make a single dir)
abbr mkdir 'mkdir -p'

alias cat 'bat'
alias big 'expac -H M "%m\t%n" | sort -h | nl'     # Sort installed packages according to size in MB (expac must be installed)
alias dir 'dir --color=auto'
alias fixpacman 'sudo rm /var/lib/pacman/db.lck'
alias gitpkg 'pacman -Q | grep -i "\-git" | wc -l' # List amount of -git packages
alias grep 'ugrep --color=auto'
alias egrep 'ugrep -E --color=auto'
alias fgrep 'ugrep -F --color=auto'
alias grubup 'sudo update-grub'
alias hw 'hwinfo --short'                          # Hardware Info
alias ip 'ip -color'
alias psmem 'ps auxf | sort -nr -k 4'
alias psmem10 'ps auxf | sort -nr -k 4 | head -10'
alias rmpkg 'sudo pacman -Rdd'
alias tarnow 'tar -acf '
alias untar 'tar -zxvf '
alias upd '/usr/bin/garuda-update'
alias vdir 'vdir --color=auto'
alias wget 'wget -c '

alias vim 'nvim'
alias v 'nvim'
alias n 'nvim'
alias conda 'micromamba'

alias r "R_AUTO_START=true nvim"

alias mpvm 'mpv --no-video '
alias home '/usr/bin/git --git-dir=$HOME/.cfg --work-tree=$HOME'

# Get the error messages from journalctl
alias jctl 'journalctl -p 3 -xb'

# Recent installed packages
alias rip 'expac --timefmt="%Y-%m-%d %T" "%l\t%n %v" | sort | tail -200 | nl'

# git stuff - doesn't work
function commit
   if parameter_is_provided $argv
      git add .
      git commit -am "$argv"
      git push
   else
      newline
      echo "Please provide a commit message:" && newline
      set_color blue; printf "commit "; set_color green; printf "\"this is a commit message\"";
      set_color normal
   end
end

# Fish command history
function history
   builtin history --show-time='%F %T '
end

function backup --argument filename
   cp $filename $filename.bak
end



# Created by `pipx` on 2024-11-18 03:08:49
set PATH $PATH /home/yoyomanzoor/.local/bin
