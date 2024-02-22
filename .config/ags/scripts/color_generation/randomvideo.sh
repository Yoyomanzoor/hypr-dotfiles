#!/usr/bin/env bash
# Author: Yoyomanzoor

# Assumes videos are in $HOME/Videos and called all.m3u
for video in $(cat $HOME/Videos/all.m3u | shuf); do
    imgpath=$HOME/Videos/$video
    echo $imgpath
    "$HOME"/.config/ags/scripts/color_generation/colorgen.sh "${imgpath}" --apply
    mpvpaper -p -o "--no-audio --keep-open=no" '*' "${imgpath}"
done

# imgpath=$(cat $HOME/Videos/all.m3u | shuf -n 1 | awk -v home=$HOME '{print home"/Videos/"$1}')

# echo $imgpath
# mpvpaper -p -f -o "--no-audio --loop-playlist" '*' "${imgpath}"
#
# "$HOME"/.config/ags/scripts/color_generation/colorgen.sh "${imgpath}" --apply
