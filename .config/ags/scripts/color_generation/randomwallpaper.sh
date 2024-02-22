#!/usr/bin/bash
# Author: Yoyomanzoor

killall mpvpaper

imgpath=$(find "$HOME"/Pictures/wallpapers -type f | shuf -n 1)
# screensizey=$(xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f2 | head -1)
# cursorposx=$(hyprctl cursorpos -j | gojq '.x')
# cursorposy=$(hyprctl cursorpos -j | gojq '.y')
# cursorposy_inverted=$(( screensizey - cursorposy ))
# echo Sending $imgpath to swww.
# swww img "$imgpath" --transition-step 100 --transition-fps 60 \
#     --transition-type grow --transition-angle 30 --transition-duration 1 \
#     --transition-pos "$cursorposx, $cursorposy_inverted"

swww img "$imgpath" --transition-step 100 --transition-fps 60 \
    --transition-type grow --transition-angle 30 --transition-duration 1


"$HOME"/.config/ags/scripts/color_generation/colorgen.sh "${imgpath}" --apply
