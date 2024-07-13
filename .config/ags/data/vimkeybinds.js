export const vimList = [[
    {
        "icon": "description",
        "name": "Vim Commands",
        "binds": [
            { "keys": [":h[elp]", "+", "keyword"], "action": "open help for keyword" },
            { "keys": [":ter[minal]"], "action": "open a terminal" },
        ],
        "appeartick": 1
    },
    {
        "icon": "keyboard",
        "name": "Vim Shortcuts",
        "binds": [
            { "keys": ["d", "i", "+", "\""], "action": "remove everything between quotes" },
        ],
        "appeartick": 1
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
        "appeartick": 1
    }
],
[
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
        "icon": "construction",
        "name": "Utilities",
        "binds": [
            { "keys": ["Ctrl", "", "+", "S"], "action": "Screen snip" },
        ],
        "appeartick": 2
    },
    {
        "icon": "water_drop",
        "name": "Hypr",
        "binds": [
            { "keys": ["", "+", "\\"], "action": "Toggle all keybinds" },
        ],
        "appeartick": 2
    },
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
            { "keys": ["PgUp", "/", "PgDown"], "action": "Next/previous chapter" },
            { "keys": [">", "/", "<"], "action": "Next/previous file in playlist" },
            { "keys": ["→"], "action": "Seek 5 seconds" },
            { "keys": ["Shift", "+", "PgUp/PgDown"], "action": "Seek 10 minutes" },
            { "keys": ["["], "action": "Decrease speed" },
            { "keys": ["]"], "action": "Increase speed" },
        ],
        "appeartick": 3
    },
    {
        "icon": "keyboard",
        "name": "Typing",
        "binds": [
            { "keys": ["", "+", "V"], "action": "Clipboard history  >>  clipboard" },
        ],
        "appeartick": 3
    },
    {
        "icon": "terminal",
        "name": "Launcher actions",
        "binds": [
            { "keys": [">raw"], "action": "Toggle mouse acceleration" },
        ],
        "appeartick": 3
    }
]];
