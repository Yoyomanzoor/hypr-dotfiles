#!/usr/bin/bash
# Author: Yoyomanzoor

# Assumes videos are in $HOME/Videos and called all.m3u
imgpath=$(cat $HOME/Videos/all.m3u | shuf -n 1 | awk -v home=$HOME '{print home"/Videos/"$1}')

echo $imgpath
mpvpaper -p -f -o "--no-audio --loop" '*' "${imgpath}"

"$HOME"/.config/ags/scripts/color_generation/colorgen.sh "${imgpath}" --apply
