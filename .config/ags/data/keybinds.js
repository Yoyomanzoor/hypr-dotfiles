export const keybindList = [[
    {
        "icon": "pin_drop",
        "name": "Workspaces: navigation",
        "binds": [
            { "keys": ["", "+", "#"], "action": "Go to workspace #" },
            { "keys": ["", "+", "S"], "action": "Toggle special workspace" },
            // { "keys": ["", "+", "(Scroll ↑↓)"], "action": "Go to workspace -1/+1" },
            { "keys": ["Ctrl", "", "+", "←"], "action": "Go to workspace on the left" },
            { "keys": ["Ctrl", "", "+", "→"], "action": "Go to workspace on the right" },
            // { "keys": ["", "+", "PageUp"], "action": "Go to workspace on the left" },
            // { "keys": ["", "+", "PageDown"], "action": "Go to workspace on the right" },
        ],
        "appeartick": 1
    },
    {
        "icon": "overview_key",
        "name": "Workspaces: management",
        "binds": [
            { "keys": ["", "Shift", "+", "#"], "action": "Move window to workspace #" },
            { "keys": ["", "Shift", "+", "S"], "action": "Move to special workspace" },
            { "keys": ["Ctrl", "", "Shift", "+", "←"], "action": "Move window to workspace on the left" },
            { "keys": ["Ctrl", "", "Shift", "+", "→"], "action": "Move window to workspace on the right" },
        ],
        "appeartick": 1
    },
    {
        "icon": "move_group",
        "name": "Windows",
        "binds": [
            { "keys": ["", "Shift", "+", "Q"], "action": "Close window" },
            { "keys": ["", "+", "←↑→↓"], "action": "Focus window in direction" },
            { "keys": ["", "Shift", "+", "←↑→↓"], "action": "Swap window in direction" },
            // { "keys": ["", "+", ";"], "action": "Split ratio -" },
            // { "keys": ["", "+", "'"], "action": "Split ratio +" },
            { "keys": ["", "+", "Lmb"], "action": "Move window" },
            { "keys": ["", "+", "Mmb"], "action": "Move window" },
            { "keys": ["", "+", "Rmb"], "action": "Resize window" },
            { "keys": ["", "Shift", "+", "F"], "action": "Toggle floating window" },
            { "keys": ["", "+", "D"], "action": "Fullscreen" },
            { "keys": ["", "+", "F"], "action": "Totally fullscreen" },
            { "keys": ["", "Alt", "+", "F"], "action": "Fake fullscreen (e.g. for firefox)" }
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
            { "keys": ["", "+", "SPACE"], "action": "Toggle anyrun launcher" },
            // { "keys": ["Ctrl", "", "SPACE"], "action": "Toggle fuzzel launcher" },
            { "keys": ["", "+", "/"], "action": "Toggle this cheatsheet" },
            { "keys": ["", "+", "N"], "action": "Toggle system sidebar, notifications" },
            { "keys": ["", "+", "A", "OR", "", "+", "O"], "action": "Toggle utilities sidebar" },
            { "keys": ["", "+", "B"], "action": "Toggle virtual keyboard" },
            { "keys": ["", "+", "Tab"], "action": "Toggle prayer times" },
            { "keys": ["Ctrl", "", "+", "T"], "action": "Change wallpaper+colorscheme" },
            { "keys": ["Ctrl", "", "+", "R"], "action": "Restart AGS" },
            { "keys": ["Ctrl", "Alt", "+", "Del"], "action": "Power/Session menu" },
            { "keys": ["Ctrl", "", "Alt", "Shift", "+", "Del"], "action": "Power off" },

            // { "keys": ["Esc"], "action": "Exit a window" },
            // { "keys": ["rightCtrl"], "action": "Dismiss/close sidebar" },


            // { "keys": ["", "+", "B"], "action": "Toggle left sidebar" },
            // { "keys": ["", "+", "N"], "action": "Toggle right sidebar" },
            // { "keys": ["", "+", "G"], "action": "Toggle volume mixer" },
            // { "keys": ["", "+", "M"], "action": "Toggle useless audio visualizer" },
            // { "keys": ["(right)Ctrl"], "action": "Dismiss notification & close menus" }
        ],
        "appeartick": 2
    },
    {
        "icon": "construction",
        "name": "Utilities",
        "binds": [
            // { "keys": ["PrtSc"], "action": "Screenshot  >>  clipboard" },
            { "keys": ["Ctrl", "", "+", "S"], "action": "Screen snip" },
            { "keys": ["", "Alt", "Shift", "+", "S"], "action": "Screenshot  >>  clipboard" },
            { "keys": ["Ctrl", "", "Shift", "+", "S", "OR", "T"], "action": "Image to text  >>  clipboard" },
            { "keys": ["", "Shift", "+", "C"], "action": "Color picker  >>  clipboard" },
            { "keys": ["", "Alt", "+", "R"], "action": "Record region" },
            { "keys": ["Ctrl", "Alt", "+", "R"], "action": "Record region with sound" },
            { "keys": ["", "Shift", "Alt", "+", "R"], "action": "Record screen with sound" },
        ],
        "appeartick": 2
    },
    {
        "icon": "water_drop",
        "name": "Hypr",
        "binds": [
            { "keys": ["", "+", "\\"], "action": "Toggle all keybinds" },
            { "keys": ["Ctrl", "Alt", "Shift", "+", "L"], "action": "Lock screen and suspend" },
        ],
        "appeartick": 2
    },
    // {
    //     "icon": "edit",
    //     "name": "Edit mode",
    //     "binds": [
    //         { "keys": ["Esc"], "action": "Exit Edit mode" },
    //         { "keys": ["#"], "action": "Go to to workspace #" },
    //         { "keys": ["Alt", "+", "#"], "action": "Dump windows to workspace #" },
    //         { "keys": ["Shift", "+", "#"], "action": "Swap windows with workspace #" },
    //         { "keys": ["Lmb"], "action": "Move window" },
    //         { "keys": ["Mmb"], "action": "Move window" },
    //         { "keys": ["Rmb"], "action": "Resize window" }
    //     ],
    //     "appeartick": 2
    // }
],
[
    {
        "icon": "apps",
        "name": "Apps",
        "binds": [
            { "keys": ["", "+", "RETURN"], "action": "Launch terminal: kitty" },
            { "keys": ["Ctrl", "", "+", "RETURN"], "action": "Launch terminal: alacritty" },
            { "keys": ["Ctrl", "", "Alt", "+", "RETURN"], "action": "Launch terminal: foot" },
            { "keys": ["", "Shift", "+", "RETURN"], "action": "Launch browser: Firefox" },
            { "keys": ["", "+", "C"], "action": "Launch editor: vscode" },
            { "keys": ["", "+", "W"], "action": "Launch editor: WPS Office" },
            { "keys": ["", "+", "X"], "action": "Launch PDF viewer: Zathura" },
            { "keys": ["", "+", "I"], "action": "Launch settings: GNOME Control center" }
        ],
        "appeartick": 3
    },
    {
        "icon": "keyboard",
        "name": "Typing",
        "binds": [
            { "keys": ["", "+", "V"], "action": "Clipboard history  >>  clipboard" },
            { "keys": ["", "+", "."], "action": "Emoji picker  >>  clipboard" },
        ],
        "appeartick": 3
    },
    {
        "icon": "terminal",
        "name": "Launcher actions",
        "binds": [
            { "keys": [">raw"], "action": "Toggle mouse acceleration" },
            { "keys": [">img"], "action": "Select wallpaper and generate colorscheme" },
            { "keys": [">light"], "action": "Switch to light theme" },
            { "keys": [">dark"], "action": "Switch to dark theme" },
            { "keys": [">badapple"], "action": "Apply black n' white colorscheme" },
            { "keys": [">color"], "action": "Pick acccent color" },
            { "keys": [">todo"], "action": "Type something after that to add a To-do item" },
        ],
        "appeartick": 3
    }
]];
