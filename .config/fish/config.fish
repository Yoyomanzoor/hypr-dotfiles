if status is-interactive
    # Commands to run in interactive sessions can go here
end

alias ls 'exa -al --color=always --group-directories-first --icons'
alias la 'exa -a --color=always --group-directories-first --icons'
alias ll 'exa -l --color=always --group-directories-first --icons'
alias lt 'exa -aT --color=always --group-directories-first --icons'
alias l. 'exa -ald --color=always --group-directories-first --icons .*'

alias cat 'batcat'

alias dir 'dir --color=auto'
alias grep 'grep --color=auto'
alias untar 'tar -zxvf'

alias vim 'nvim'

alias home '/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'

starship init fish | source

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
if test -f /home/yoyomanzoor/miniconda3/bin/conda
    eval /home/yoyomanzoor/miniconda3/bin/conda "shell.fish" "hook" $argv | source
else
    if test -f "/home/yoyomanzoor/miniconda3/etc/fish/conf.d/conda.fish"
        . "/home/yoyomanzoor/miniconda3/etc/fish/conf.d/conda.fish"
    else
        set -x PATH "/home/yoyomanzoor/miniconda3/bin" $PATH
    end
end
# <<< conda initialize <<<

