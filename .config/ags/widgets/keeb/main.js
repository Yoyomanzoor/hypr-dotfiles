const { Gdk, Gtk } = imports.gi;
import { Service, Widget } from '../../imports.js';
import { setupCursorHover } from "../../lib/cursorhover.js";

const KeebSheet = () => Widget.Box({
    vertical: false,
    className: "spacing-h-15",
    homogeneous: true,
    children: [
        Widget.Icon({
            icon: 'planck_light.svg',
            size: 30,
        }),
    ]
});

const cheatsheetHeader = () => Widget.CenterBox({
    vertical: false,
    startWidget: Widget.Box({}),
    centerWidget: Widget.Box({
        vertical: true,
        className: "spacing-h-15",
        children: [
            Widget.Box({
                hpack: 'center',
                className: 'spacing-h-5',
                children: [
                    Widget.Label({
                        hpack: 'center',
                        css: 'margin-right: 0.682rem;',
                        className: 'txt-title txt',
                        label: 'Vim Cheat sheet',
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "cheatsheet-key txt-small",
                        label: "",
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "cheatsheet-key txt-small",
                        label: "Shift",
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "cheatsheet-key-notkey txt-small",
                        label: "+",
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "cheatsheet-key txt-small",
                        label: "/",
                    })
                ]
            }),
            Widget.Label({
                useMarkup: true,
                selectable: true,
                justify: Gtk.Justification.CENTER,
                className: 'txt-small txt',
                label: 'Sheet data stored in <tt>~/.config/ags/data/vimkeybinds.js</tt>\nChange keybinds in <tt>~/.config/nvim/init.vim</tt>'
            }),
        ]
    }),
    endWidget: Widget.Button({
        vpack: 'start',
        hpack: 'end',
        className: "cheatsheet-closebtn icon-material txt txt-hugeass",
        onClicked: () => {
            App.toggleWindow('keebsheet');
        },
        child: Widget.Label({
            className: 'icon-material txt txt-hugeass',
            label: 'close'
        }),
        setup: setupCursorHover,
    }),
});

const clickOutsideToClose = Widget.EventBox({
    onPrimaryClick: () => App.closeWindow('keebsheet'),
    onSecondaryClick: () => App.closeWindow('keebsheet'),
    onMiddleClick: () => App.closeWindow('keebsheet'),
});

export default () => Widget.Window({
    name: 'keebsheet',
    exclusivity: 'ignore',
    focusable: true,
    popup: true,
    visible: false,
    child: Widget.Box({
        vertical: true,
        children: [
            clickOutsideToClose,
            Widget.Box({
                vertical: true,
                className: "cheatsheet-bg spacing-v-15",
                children: [
                    cheatsheetHeader(),
                    KeebSheet(),
                ]
            }),
        ],
    })
});
