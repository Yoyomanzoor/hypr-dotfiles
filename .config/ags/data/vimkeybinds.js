export const vimList = [[
    {
        "icon": "keyboard_command_key",
        "name": "Commands",
        "binds": [
            { "keys": [":h[elp]", "+", "keyword"], "action": "open help for keyword" },
            { "keys": [":ter[minal]"], "action": "open a terminal" },
        ],
        "appeartick": 1
    },
    {
        "icon": "overview_key",
        "name": "Workspaces: management",
        "binds": [
            { "keys": ["", "Shift", "+", "#"], "action": "Move window to workspace #" },
        ],
        "appeartick": 1
    },
    {
        "icon": "move_group",
        "name": "Windows",
        "binds": [
            { "keys": ["", "Shift", "+", "Q"], "action": "Close window" },
        ],
        "appeartick": 1
    }
],
[
    {
        "icon": "widgets",
        "name": "Widgets (AGS)",
        "binds": [
            { "keys": [""], "action": "Toggle overview/launcher" },
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
        "icon": "apps",
        "name": "Apps",
        "binds": [
            { "keys": ["", "+", "RETURN"], "action": "Launch terminal: kitty" },
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
