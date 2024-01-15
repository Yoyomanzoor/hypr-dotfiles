const { Gdk, Gtk } = imports.gi;
import { Service, Widget } from '../../imports.js';
const { Box, EventBox, Icon, Scrollable, Label, Button, Revealer } = Widget;
const { execAsync } = Utils;
import { setupCursorHover } from "../../lib/cursorhover.js";
import { MaterialIcon } from '../../lib/materialicon.js';
// import { showPrayerTimes } from '../../variables.js';

const timerr = 100000000;

const prayers = () => Box({
    vertical: true,
    className: "cheatsheet-bg spacing-v-15",
    // className: "spacing-v-15",
    homogeneous: false,
    children: [
        Label({
            className: "txt txt-title",
            label: "الصلاة",
        }),
        Box({
            vertical: true,
            homogeneous: true,
            children: [
                Box({
                    vertical: false,
                    homogeneous: true,
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
                            className: "txt txt-small",
                            label: "الفجر",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: true,
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
                            className: "txt txt-small",
                            label: "الشروق",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: true,
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
                            className: "txt txt-small",
                            label: "الظهر",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: true,
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
                            className: "txt txt-small",
                            label: "العصر",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: true,
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
                            className: "txt txt-small",
                            label: "المغرب",
                        }),
                    ],
                }),
                Box({
                    vertical: false,
                    homogeneous: true,
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
                            className: "txt txt-small",
                            label: "العشاء",
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
