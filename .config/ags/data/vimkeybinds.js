export const vimList = [[
    {
        "icon": "keyboard",
        "name": "Vim Shortcuts",
        "binds": [
            { "keys": ["^"], "action": "Start of line (after whitespace)" },
            { "keys": ["{number}G"], "action": "Go to line {number}" },
            { "keys": ["fc"], "action": "Go forward to character c" },
            { "keys": ["Fc"], "action": "Go backward to character c" },
            { "keys": ["zz"], "action": "Center this line" },
            { "keys": ["zt"], "action": "Top this line" },
            { "keys": ["zb"], "action": "Bottom this line" },
            { "keys": ["*"], "action": "Next whole word under cursor" },
            { "keys": ["#"], "action": "Previous whole word under cursor" },
            { "keys": ["d", "i", "+", "\""], "action": "Remove everything between quotes" },
            { "keys": ["gcc"], "action": "Comment line" },
            { "keys": ["gbc"], "action": "Comment block" },
            { "keys": ["g~"], "action": "Swap case of selection" },
            { "keys": ["gU/gu"], "action": "Uppercase/lowercase" },
            { "keys": ["gf"], "action": "Go to file in cursor" },
            { "keys": ["Leader", "+", "r"], "action": "Home screen" },
            { "keys": ["tn"], "action": "New tab on home screen" },
            { "keys": ["tt"], "action": "Split tab" },
            { "keys": ["t."], "action": "Next tab" },
            { "keys": ["t,"], "action": "Previous tab" },
            { "keys": ["gd"], "action": "Go to definition" },
            { "keys": ["gy"], "action": "Type definition" },
            { "keys": ["gr"], "action": "References" },
            { "keys": ["Ctrl", "+", "n"], "action": "NerdTree" },
            { "keys": ["Ctrl", "+", "d"], "action": "Delete buffer" },
            { "keys": ["m", "+", "key"], "action": "Mark location" },
            { "keys": ["\'", "+", "key"], "action": "Go to mark location" },
            { "keys": ["\'", "+", "\'"], "action": "Go to last location" },
            { "keys": ["[\'", "+", "]\'"], "action": "Cycle local marks" },
            { "keys": ["\'", "+", "."], "action": "Go to last edit location" },
            { "keys": ["\'", "+", "^"], "action": "Go to last cursor location on edit mode" },
            { "keys": ["F5"], "action": "View undo history" },
            { "keys": ["za"], "action": "Toggle fold" },
            { "keys": ["zM"], "action": "Close all folds" },
            { "keys": ["zR"], "action": "Open all folds" },
            { "keys": ["zm"], "action": "Fold more" },
            { "keys": ["zr"], "action": "Fold less" },
        ],
        "appeartick": 1
    },
],
[
    {
        "icon": "description",
        "name": "Vim Commands",
        "binds": [
            { "keys": [":{number}"], "action": "Go to line {number}" },
            { "keys": [":h[elp]", "+", "keyword"], "action": "Open help for keyword" },
            { "keys": [":ter[minal]"], "action": "Open a terminal" },
            { "keys": [":delm", "+", "key"], "action": "Delete mark" },
            { "keys": [":delm!"], "action": "Delete all marks" },
        ],
        "appeartick": 1
    },
    {
        "icon": "picture_as_pdf",
        "name": "Zathura",
        "binds": [
            { "keys": ["A"], "action": "Fit the height of the current page to the display window" },
            { "keys": ["S"], "action": "Fit the width of the current page to the display window" },
            { "keys": ["D"], "action": "Toggle booklet view" },
            { "keys": ["R"], "action": "Rotate by 90 degrees clockwise" },
            { "keys": ["Shift", "+", "H"], "action": "Go to the top of the currently selected page" },
            { "keys": ["Shift", "+", "L"], "action": "Go to the bottom of the currently selected page" },
            { "keys": ["Ctrl", "+", "N"], "action": "Toggle information bar" },
            { "keys": ["Ctrl", "+", "M"], "action": "Toggle input field bar" },
            { "keys": ["Ctrl", "+", "R"], "action": "Toggle color theme" },
            { "keys": ["F5"], "action": "Presentation mode" },
            { "keys": ["Shift", "+", "F"], "action": "Show all link hints" },
            { "keys": ["C"], "action": "Copy link to clipboard" },
            { "keys": ["M", "+", "number"], "action": "Create a bookmark on current page and save to 'number'" },
            { "keys": ["'", "+", "number"], "action": "Load bookmark stored at number" },
            { "keys": [":bdelete"], "action": "Delete bookmark" },
            { "keys": ["Tab"], "action": "Display content index" },
        ],
        "appeartick": 2
    },
    {
        "icon": "phishing",
        "name": "Fish",
        "binds": [
            { "keys": ["Alt", "+", "L"], "action": "ls" },
            { "keys": ["Alt", "+", "H"], "action": "Show command man page" },
            { "keys": ["Alt", "+", "W"], "action": "Show command short description" },
        ],
        "appeartick": 2
    },
    {
        "icon": "folder",
        "name": "Ranger",
        "binds": [
            { "keys": ["SPACE"], "action": "Mark file" },
            { "keys": ["O"], "action": "Show sort options" },
            { "keys": ["dD"], "action": "Delete file" },
            { "keys": ["cw"], "action": "Rename file" },
            { "keys": ["q"], "action": "Quit" },
        ],
        "appeartick": 2
    }
],
[
    {
        "icon": "videocam",
        "name": "mpv",
        "binds": [
            { "keys": ["P"], "action": "Pause" },
            { "keys": ["F"], "action": "Toggle fullscreen" },
            { "keys": ["M"], "action": "Mute" },
            { "keys": ["V"], "action": "Toggle subtitles" },
            { "keys": ["S"], "action": "Screenshot" },
            { "keys": ["Q"], "action": "Quit" },
            { "keys": ["O"], "action": "Toggle show progress" },
            { "keys": ["PgUp", "OR", "PgDown"], "action": "Next/previous chapter" },
            { "keys": [">", "OR", "<"], "action": "Next/previous file in playlist" },
            { "keys": ["→"], "action": "Seek 5 seconds" },
            { "keys": ["↑"], "action": "Seek 1 minute" },
            { "keys": ["Shift", "+", "PgUp/PgDown"], "action": "Seek 10 minutes" },
            { "keys": ["["], "action": "Decrease speed" },
            { "keys": ["]"], "action": "Increase speed" },
        ],
        "appeartick": 3
    },
    {
        "icon": "terminal",
        "name": "Alacritty",
        "binds": [
            { "keys": ["Shift", "Ctrl", "+", "SPACE"], "action": "Toggle vi mode" },
        ],
        "appeartick": 3
    },
    {
        "icon": "globe",
        "name": "Vieb",
        "binds": [
            { "keys": [":", "b"], "action": "search tabs" },
            { "keys": ["B", "B"], "action": "Last tab" },
        ],
        "appeartick": 3
    }
]];
