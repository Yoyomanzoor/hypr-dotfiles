# https://gitlab.com/ShalokShalom/garuda-fish-config

function fish_prompt -d "Write out the prompt"
    # This shows up as USER@HOST /home/user/ >, with the directory colored
    # $USER and $hostname are set by fish, so you can just use them
    # instead of using `whoami` and `hostname`
    printf '%s@%s %s%s%s > ' $USER $hostname \
        (set_color $fish_color_cwd) (prompt_pwd) (set_color normal)
end

if status is-interactive
    # Commands to run in interactive sessions can go here
    set fish_greeting
end

# Add ~/.local/bin to PATH
if test -d ~/.local/bin
   if not contains -- ~/.local/bin $PATH
      set -p PATH ~/.local/bin
   end
end

function fish_remove_path
  if set -l index (contains -i "$argv" $fish_user_paths)
    set -e fish_user_paths[$index]
    echo "Removed $argv from the path"
  end
end

alias ls 'eza -al --color=always --group-directories-first --icons' # preferred listing
alias la 'eza -a --color=always --group-directories-first --icons'  # all files and dirs
alias ll 'eza -l --color=always --group-directories-first --icons'  # long format
alias lt 'eza -aT --color=always --group-directories-first --icons' # tree listing
alias l. 'eza -ald --color=always --group-directories-first --icons .*' # show only dotfiles

alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias .....="cd ../../../.."
alias ......="cd ../../../../../.."

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

# Get the error messages from journalctl
alias jctl 'journalctl -p 3 -xb'

# Recent installed packages
alias rip 'expac --timefmt="%Y-%m-%d %T" "%l\t%n %v" | sort | tail -200 | nl'


# Abstractions for better readability
function no_error_output
   $argv 2> /dev/null
end

function parameter_is_provided
   set -q argv[1]
end

function command_failed
   test $status -eq 1
end

function newline
   echo ""
end

function updated
   test 2400 -ge (path mtime --relative /var/log/pacman.log) && # Prevents that updates run even if the system has been updated recently.
   string match -rq "System is updated" (tail -2 /var/log/pacman.log) # Prevents that canceled updates count as complete updates.
end

function log_update
   echo [(date +"%Y-%m-%dT%T%z")] [FISH] System is updated  | sudo tee -a /var/log/pacman.log >/dev/null
end

# git stuff
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

set -x GEM_HOME $HOME/.gems

# dotfile version control
alias home '/sbin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'

## Advanced command-not-found hook
# source /usr/share/doc/find-the-command/ftc.fish

# Fish command history
function history
   builtin history --show-time='%F %T '
end

function backup --argument filename
   cp $filename $filename.bak
end

alias conda 'micromamba'

starship init fish | source

# function fish_prompt
#   set_color cyan; echo (pwd) 
#   set_color green; echo '> '
# end

# >>> mamba initialize >>>
# !! Contents within this block are managed by 'mamba init' !!
set -gx MAMBA_EXE "/usr/bin/micromamba"
set -gx MAMBA_ROOT_PREFIX "/home/yoyomanzoor/micromamba"
$MAMBA_EXE shell hook --shell fish --root-prefix $MAMBA_ROOT_PREFIX | source
# <<< mamba initialize <<<
