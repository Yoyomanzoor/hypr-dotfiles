const { Gdk, Gtk } = imports.gi;
import { Service, Widget } from '../../imports.js';
const { Box, EventBox, Icon, Scrollable, Label, Button, Revealer } = Widget;
import { setupCursorHover } from "../../lib/cursorhover.js";
// import { showPrayerTimes } from '../../variables.js';

const prayers = () => Widget.Box({
    vertical: true,
    className: "cheatsheet-bg spacing-v-15",
    // className: "spacing-v-15",
    homogeneous: true,
    children: [
        Widget.Label({
            className: "txt txt-title",
            label: "Prayers",
        }),
        Widget.Box({
            homogeneous: true,
            children: [
                Widget.Label({
                    className: "txt txt-small",
                    label: "Fajr",
                }),
                Widget.Label({
                    className: "txt txt-small",
                    label: "Dhuhr",
                }),
                Widget.Label({
                    className: "txt txt-small",
                    label: "Asr",
                }),
                Widget.Label({
                    className: "txt txt-small",
                    label: "Maghrib",
                }),
                Widget.Label({
                    className: "txt txt-small",
                    label: "Isha",
                }),
            ]
        }),
    ],
});

const clickOutsideToClose = Widget.EventBox({
    onPrimaryClick: () => App.closeWindow('prayertimes'),
    onSecondaryClick: () => App.closeWindow('prayertimes'),
    onMiddleClick: () => App.closeWindow('prayertimes'),
});


export default () => Widget.Window({
    name: 'prayertimes',
    exclusivity: 'ignore',
    focusable: true,
    popup: true,
    visible: false,
    anchor: ['top'],
    layer: 'overlay',
    margin: [0, 6],
    // monitor: 0,
    child: Widget.Box({
        css: 'padding: 1px;',
        children: [
            Widget.Revealer({
                reveal_child: false,
                child: prayers(),
                setup: self => Utils.timeout(10, () => {
                    self.reveal_child = !self.reveal_child;
                }),
            }),
            clickOutsideToClose,
        ],
    }),
});

/* export default () => Widget.Window({
    name: 'prayertimes',
    exclusivity: 'ignore',
    focusable: true,
    popup: true,
    visible: false,
    anchor: ['top', 'left'],
    child: Widget.Box({
        vertical: true,
        children: [
            clickOutsideToClose,
            Widget.Box({
                vertical: true,
                className: "cheatsheet-bg spacing-v-15",
                children: [
                    prayers(),
                ]
            }),
        ],
    })
}); */
