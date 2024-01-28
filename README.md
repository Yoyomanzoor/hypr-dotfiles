# Hyperland Dotfiles

This project was forked from [end-4 illogical impulse](https://github.com/end-4/dots-hyprland/tree/illogical-impulse)

## TODO

- [ ] Replace the waifu thing with a prayer time widget
- [x] Remake the Quran thing from KDE setup to sidebar
- [ ] Fix mpv so ytfzf shows in media bar
- [x] Update hint tooltip for both hyprland and nvim
- [x] Prayer times in top bar
- [x] Update color changing script to include other tools, like `alacritty`, 

## Setup

- Arch running hypr
- Terminal: foot, alacritty, kitty
- Shell: fish + starship
- IDE: nvim, vscode, rstudio
- dmenu: ags, anyrun, ags

## Installation (not yet tested)

Install Arch<br>
In `archinstall`, these are the relevant settings:
- Desktop: Hyprland (comes with a set of things, including wofi, dolphin)
- Greeting: ly
- Audio: Pipewire
- Additional packages: git vim

Install packages, add user to input and video groups, install hy3

```bash
yay -S coreutils meson sysstat curl wget upower brightnessctl wireplumber blueberry rsync bat less fzf eza anyrun swappy grim fish fuzzel kitty alacritty foot thunar gjs gnome-bluetooth-3.0 gnome-control-center gnome-keyring gradience-git pavucontrol gobject-introspection gojq gtk3 gtk-layer-shell libdbusmenu-gtk3 networkmanager npm plasma-browser-integration playerctl polkit-gnome ripgrep sassc slurp starship swayidle typescript wlr-randr nwg-displays xorg-xrandr webp-pixbuf-loader wl-clipboard tesseract yad ydotool adw-gtk3-git cava hyprland-git hyprpicker-git python-material-color-utilities python-pywal python-poetry python-build python-pillow swww swaylock-effects-git wayland-idle-inhibitor-git wlogout wlsunset-git fastfetch neovim find-the-command micromamba-bin wf-recorder wps-office ttf-wps-fonts lexend-fonts-git ttf-material-symbols-variable-git ttf-space-mono-nerd ttf-jetbrains-mono-nerd ttf-amiri ttf-scheherazade-new
sudo usermod -aG video $(whoami)  # if this somehow doesn't work, just replace "$(whoami)" with your username
sudo usermod -aG input $(whoami)  # same for this
hyprpm add https://github.com/outfoxxed/hy3
hyprpm enable hy3
```

Change shell to fish

```bash
sudo chsh -s /usr/bin/fish
chsh -s /usr/bin/fish
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

Clone and checkout dotfiles

```bash
cd ~/Downloads   # Let's not trash your home folder
git clone https://github.com/Yoyomanzoor/dotfiles.git
cd dotfiles && git checkout hyprland
```

Copy dots to home directory (make a backup!)

Restart the machine and it should all be working!

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

## Random thoughts/FAQ

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

To apply the config edited by `ags`, the config could either be copied over to the application's config directory or the application can have it's config symlinked to ags. I'm sticking with the former at the moment. The advantage to the latter is that all of the configs for every application managed by `ags` could theoretically be placed in a single location for simpler organization.

### Networking

Generally, the gnome interface (via the sidebar) works fine. Sometimes, it acts weird, so I suggest using `nm-applet` in those cases. In a terminal, run

```bash
nm-applet &; disown
```

The icon will show in the bar and you can set up your WiFi accordingly.<br>
Once a WiFi network is setup, NetworkManager should automatically connect to it and you shouldn't have problems using the gnome interface/sidebar to connect.

For bluetooth, you can use `blueman-applet` if needed.

### Terminals

#### Arabic in terminals

No terminal is great for bidi support. Konsole might be the best, but it does not have an easy text file configuration - configuration is done via GUI. Kitty is a good runner up. Plus Kitty has awesome [documentation](https://sw.kovidgoyal.net/kitty/conf/).

#### Kitty

Kitty is great cause of its config setup and documentation (above), and it has cool features.

_Update_: A problem with kitty and pywal is that kitty can't update config without closing and reopening or pressing ctrl+shift+Fn5 on the kitty window or the kitty command in the active window `kitty @`. I tried using the option `--single-instance` with remote access but that still doesn't work. Basically, all the open terminals can't be reloaded at once from an external command. It looks like there are no plans for kitty to support this. Alacritty, on the other hand, has no problem with config reloads.

#### Alacritty was alalitty but now is ala-not-as-good-as-kitty

Cause of a) no easy documentation for its toml files (they recently switched from yaml to toml) and b) no bidi

_Update_: Alacritty made a comeback. If I need to work in arabic, I would have to use vscode anyway, but for general purpose alacritty can refresh its config on the fly which makes it a better candidate for pywal + ags.

#### Foot has gotten the boot

Fun terminal, but the fact that I can't figure out `Ctrl C` is not okay

### Display settings

This uses nwg-displays to manage windows. Note that the window location should be placed at (0,0) for the ags overview window to show the workspace correctly, else there will be a lot of extra space on the overview page.

### Discord

Steps to make Discord work with pywal
- install `pywal-discord' from aur
- install BetterDiscord-Installer from aur
- run `betterdiscord-installer`
- run `pywal-discord -t default` to update discord to the current pywal theme
- in discord, go to discord settings and turn on the theme

### Google Drive
To setup google drive, follow [rclone instructions](https://rclone.org/drive/) and [setup a client ID](https://rclone.org/drive/#making-your-own-client-id). Make sure to call the remove `googledrive`.
To enable on startup, create the script `/etc/systemd/system/rclone-drive.service`. Replace the `User` and `Group` with your user and group.

```desktop
[Unit]
Description=RClone Google Drive mount
After=network.target

[Service]
Type=simple
User=yoyomanzoor
Group=yoyomanzoor
ExecStart=/opt/scripts/rclone-gdrive.sh

[Install]
WantedBy=default.target
```

Then create `/opt/scripts/rclone-gdrive.sh`

```sh
#!/usr/bin/bash

mkdir -p $HOME/drive
rclone mount googledrive: $HOME/drive/
```

Google drive should be mounted at `$HOME/drive` on startup for your user.
