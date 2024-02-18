#!/usr/bin/bash
# Switches sww wallpaper
# Requires: coreutils, xrandr, hyprland

# check if swww-daemon is running
if ! pidof swww-daemon; then
    swww init
fi

if [ "$1" == "--noswitch" ]; then
    imgpath=$(swww query | awk -F 'image: ' '{print $2}')
else
    # Select and set image (hyprland)
    cd "$HOME/Pictures"
    imgpath=$(yad --width 1200 --height 800 --file --title='Choose wallpaper')
    screensizey=$(xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f2 | head -1)
    cursorposx=$(hyprctl cursorpos -j | gojq '.x')
    cursorposy=$(hyprctl cursorpos -j | gojq '.y')
    cursorposy_inverted=$(( screensizey - cursorposy ))

    if [ "$imgpath" == '' ]; then
        echo 'Aborted'
        exit 0
    fi

    if [[ "$imgpath" == *.mp4 ]] || [[ "$imgpath" == *.mov ]]; then
        echo Sending "$imgpath" to mpvpaper.
        # Change mpvpaper wallpaper
        mpvpaper -o "--no-audio --loop" '*' "$imgpath"
        exit 0
    else
        if pidof mpvpaper; then
            echo Killing mpvpaper
            killall mpvpaper
        fi
        echo Sending "$imgpath" to swww. Cursor pos: ["$cursorposx, $cursorposy_inverted"]
        # Change swww wallpaper
        swww img "$imgpath" --transition-step 100 --transition-fps 60 \
        --transition-type grow --transition-angle 30 --transition-duration 1 \
        --transition-pos "$cursorposx, $cursorposy_inverted"
    fi
fi

# Generate colors for ags n stuff
"$HOME"/.config/ags/scripts/color_generation/colorgen.sh "${imgpath}" --apply
