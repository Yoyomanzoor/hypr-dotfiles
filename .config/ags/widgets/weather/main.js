const { Gdk, Gtk } = imports.gi;
import { Service, Widget } from '../../imports.js';
const { Box, EventBox, Icon, Scrollable, Label, Button, Revealer } = Widget;
const { execAsync } = Utils;
import { setupCursorHover } from "../../lib/cursorhover.js";
import { MaterialIcon } from '../../lib/materialicon.js';

const timerr = 86400000;
// this is 24 hours in milliseconds
// idk how else to keep it from updating too often

const weatherbox = () => Box({
    vertical: true,
    className: "cheatsheet-bg spacing-v-10",
    // className: "spacing-v-15",
    homogeneous: false,
    children: [
        Label({
            className: "txt-reading",
            connections: [[timerr, (label) => execAsync(['bash', '-c', 'curl wttr.in/$(curl ipinfo.io/city 2> /dev/null | tr -d " " )\\?1\\?q\\?n\\?T'])
            // connections: [[timerr, (label) => execAsync(['bash', '-c', 'curl wttr.in/$(curl ipinfo.io/city 2> /dev/null | tr -d " " )\\?format=3'])
            // connections: [[timerr, (label) => execAsync(['bash', '-c', 'curl v2.wttr.in/$(curl ipinfo.io/city 2> /dev/null | tr -d " " )'])
                .then((output) => {
                    label.label = output;
                }).catch(print)
            ]],
        }),
    ],
});

const clickOutsideToClose2 = EventBox({
    onPrimaryClick: () => App.closeWindow('weather'),
    onSecondaryClick: () => App.closeWindow('weather'),
    onMiddleClick: () => App.closeWindow('weather'),
});


export default () => Widget.Window({
    name: 'weather',
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
                child: weatherbox(),
                setup: self => Utils.timeout(10, () => {
                    self.reveal_child = !self.reveal_child;
                }),
            }),
            clickOutsideToClose2,
        ],
    }),
});

