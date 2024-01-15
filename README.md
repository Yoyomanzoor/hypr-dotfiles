## TODO

- [ ] Replace the waifu thing with a prayer time widget
- [ ] Remake the Quran thing from KDE setup to sidebar
- [ ] Fix mpv so ytfzf shows in media bar
- [ ] Update hint tooltip for both hyprland and nvim
- [x] Prayer times in top bar
- [x] Update color changing script to include other tools, like `alacritty`, 

## Setup

[OG](https://github.com/end-4/dots-hyprland/tree/illogical-impulse)

- Arch running hypr
- Terminal: foot, alacritty, kitty
- Shell: fish + starship
- IDE: nvim, vscode, rstudio
- dmenu: ags, anyrun, ags

## Installation (not yet tested)

I plan on testing install on VMs, but for now, taken from end-4:

Install packages, add user to input and video groups

```bash
yay -S blueberry brightnessctl coreutils curl fish foot fuzzel gjs gnome-bluetooth-3.0 gnome-control-center gnome-keyring gobject-introspection grim gtk3 gtk-layer-shell libdbusmenu-gtk3 meson networkmanager npm plasma-browser-integration playerctl polkit-gnome python-pywal ripgrep sassc slurp starship swayidle typescript upower xorg-xrandr webp-pixbuf-loader wget wireplumber wl-clipboard tesseract yad ydotool adw-gtk3-git cava gojq gradience-git hyprland-git hyprpicker-git lexend-fonts-git python-material-color-utilities python-pywal python-poetry python-build python-pillow swww ttf-material-symbols-variable-git ttf-space-mono-nerd swaylock-effects-git ttf-jetbrains-mono-nerd wayland-idle-inhibitor-git wlogout wlsunset-git
sudo usermod -aG video $(whoami)  # if this somehow doesn't work, just replace "$(whoami)" with your username
sudo usermod -aG input $(whoami)  # same for this
```

Install AGS from source, AUR is not up to date

```bash
cd ~/Downloads   # Let's not trash your home folder
git clone --recursive https://github.com/Aylur/ags.git
cd ags
npm install
meson setup build
meson install -C build   # When asked to use sudo, make sure you say yes
```

clone and checkout dotfiles

```bash
cd ~/Downloads   # Let's not trash your home folder
git clone https://github.com/Yoyomanzoor/hypr-dotfiles.git
cd dots-hyprland && git checkout hypr
```

copy dots to home directory (make a backup!)

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

## Random thoughts

### How making a widget works

Everying is containerized, and documentation for arguments they can take are [here](https://aylur.github.io/ags-docs/config/widgets/).

Making the prayer times widget:
- Move around classes of top bar, such that instead of just a left, top, and right, there are separate things for the clock and for salah times. This way, clicking on each part of the bar can have different effects.
- Create the widget itself
    - Create `prayertimes.js` in widget folder, this is the actual popup
    - Call it in `config.js` so it's exposed to App
    - Call it in the topbar widget box so that the popup is opened when clicked

The advantage to this: it can be opened via a command line ags call (`ags -t prayertimes`), meaning it can be called from pretty much anywhere.

### How changing colors works

The way color schemes work is via the script `$HOME/.config/ags/scripts/color_generation/applycolor.sh`. Check `$HOME/.config/ags/scripts/color_generation/pywal_to_material.scss` and `$HOME/.config/ags/scripts/color_generation/specials/_material_badapple.scss` to get an idea of the colors available. They are set using a `sed` command.

To edit configs for whatever is being edited by `ags`, there are two ways of doing this:
- edit the file in the template folder `$HOME/.config/ags/scripts/templates/`
- make the `applycolor.sh` script edit a file that is imported into the config file, if the tool allows this

For now I'm sticking with the former, even if the latter is more elegant.

### Arabic in terminals

No terminal is great for bidi support. Konsole might be the best, but it does not have an easy text file configuration - configuration is done via GUI. Kitty is a good runner up. Plus Kitty has awesome [documentation](https://sw.kovidgoyal.net/kitty/conf/).

### Alacritty was alalitty but now is ala-not-as-good-as-kitty

Cause of a) no easy documentation for its toml files (they recently switched from yaml to toml) and b) no bidi

### Foot has gotten the boot

Fun terminal, but the fact that I can't figure out `Ctrl C` is not okay


