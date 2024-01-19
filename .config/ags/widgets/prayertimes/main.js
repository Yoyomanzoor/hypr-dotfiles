const { Gdk, Gtk } = imports.gi;
import { Service, Widget } from '../../imports.js';
const { Box, EventBox, Icon, Scrollable, Label, Button, Revealer } = Widget;
const { execAsync } = Utils;
import { setupCursorHover } from "../../lib/cursorhover.js";
import { MaterialIcon } from '../../lib/materialicon.js';
// import { showPrayerTimes } from '../../variables.js';

const timerr = 86400000;
// this is 24 hours in milliseconds
// idk how else to keep it from updating too often

const prayers = () => Box({
    vertical: true,
    className: "cheatsheet-bg spacing-v-10",
    // className: "spacing-v-15",
    homogeneous: false,
    children: [
        Label({
            className: "txt txt-hugerass-arabic spacing-v-15",
            label: "الصلاة",
        }),
        Label({
            className: "txt-semibold txt-hugeass-arabic",
            connections: [[timerr, (label) => execAsync(['check-athan', '-q'])
                .then((output) => {
                    label.label = output;
                }).catch(print)
            ]],
        }),
        Box({
            vertical: false,
            homogeneous: true,
            className: "cheatsheet-key",
            children: [
                Box({
                    vertical: false,
                    homogeneous: false,
                    children: [
                        Label({
                            className: "txt txt-small",
                            connections: [[timerr, (label) => execAsync(['check-athan', '-s', 'isha'])
                                .then((output) => {
                                    label.label = output;
                                }).catch(print)
                            ]],
                        }),
                        MaterialIcon('dark_mode', 'small'),
                        Label({
                            className: "txt txt-norm-arabic",
                            label: "العشاء",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: false,
                    children: [
                        Label({
                            className: "txt txt-small",
                            connections: [[timerr, (label) => execAsync(['check-athan', '-s', 'maghrib'])
                                .then((output) => {
                                    label.label = output;
                                }).catch(print)
                            ]],
                        }),
                        MaterialIcon('wb_twilight', 'small'),
                        Label({
                            className: "txt txt-norm-arabic",
                            label: "المغرب",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: false,
                    children: [
                        Label({
                            className: "txt txt-small",
                            connections: [[timerr, (label) => execAsync(['check-athan', '-s', 'asr'])
                                .then((output) => {
                                    label.label = output;
                                }).catch(print)
                            ]],
                        }),
                        MaterialIcon('flare', 'small'),
                        Label({
                            className: "txt txt-norm-arabic",
                            label: "العصر",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: false,
                    children: [
                        Label({
                            className: "txt txt-small",
                            connections: [[timerr, (label) => execAsync(['check-athan', '-s', 'dhuhr'])
                                .then((output) => {
                                    label.label = output;
                                }).catch(print)
                            ]],
                        }),
                        MaterialIcon('sunny', 'small'),
                        Label({
                            className: "txt txt-norm-arabic",
                            label: "الظهر",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: false,
                    children: [
                        Label({
                            className: "txt txt-small",
                            connections: [[timerr, (label) => execAsync(['check-athan', '-s', 'sunrise'])
                                .then((output) => {
                                    label.label = output;
                                }).catch(print)
                            ]],
                        }),
                        MaterialIcon('water_lux', 'small'),
                        Label({
                            className: "txt txt-norm-arabic",
                            label: "الشروق",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: false,
                    children: [
                        Label({
                            className: "txt txt-small",
                            connections: [[timerr, (label) => execAsync(['check-athan', '-s', 'fajr'])
                                .then((output) => {
                                    label.label = output;
                                }).catch(print)
                            ]],
                        }),
                        MaterialIcon('wb_twilight', 'small'),
                        Label({
                            className: "txt txt-norm-arabic",
                            label: "الفجر",
                        }),
                    ],
                }),
            ]
        }),
    ],
});

const clickOutsideToClose = EventBox({
    onPrimaryClick: () => App.closeWindow('prayertimes'),
    onSecondaryClick: () => App.closeWindow('prayertimes'),
    onMiddleClick: () => App.closeWindow('prayertimes'),
});


export default () => Widget.Window({
    name: 'prayertimes',
    exclusivity: 'normal',
    focusable: true,
    popup: true,
    visible: false,
    anchor: ['top'],
    layer: 'overlay',
    margin: [0, 6],
    // monitor: 0,
    child: Box({
        css: 'padding: 1px;',
        children: [
            Revealer({
                reveal_child: false,
                transition: 'slide_down',
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
