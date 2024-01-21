// This is for the right pill of the bar. 
// For the cool memory indicator on the sidebar, see sysinfo.js
import { Service, Utils, Widget } from '../../imports.js';
const {  execAsync } = Utils;
const { GLib } = imports.gi;
import Hyprland from 'resource:///com/github/Aylur/ags/service/hyprland.js';
// import { MaterialIcon } from '../../lib/materialicon.js';
// import { AnimatedCircProg } from "../../lib/animatedcircularprogress.js";

const BarClock = () => Widget.Box({
    vpack: 'center',
    className: 'spacing-h-5 txt-onSurfaceVariant bar-clock-box',
    children: [
        Widget.Label({
            className: 'txt-smallie',
            label: GLib.DateTime.new_now_local().format("%A, %m/%d"),
            setup: (self) => self.poll(5000, label => {
                label.label = GLib.DateTime.new_now_local().format("%A, %m/%d");
            }),
        }),
        Widget.Label({
            className: 'txt-norm',
            label: '•',
        }),
        Widget.Label({
            className: 'bar-clock',
            label: GLib.DateTime.new_now_local().format("%I:%M %p"),
            setup: (self) => self.poll(5000, label => {
                label.label = GLib.DateTime.new_now_local().format("%I:%M %p");
            }),
        }),
        Widget.Label({
            className: 'txt-norm',
            label: '•',
        }),
        Widget.Label({
            className: 'txt-smallie',
            // className: 'txt-smallie-arabic', // for amiri font
            connections: [[5000, (label) => execAsync(['check-athan', '-d'])
                .then((output) => {
                    label.label = output;
                }).catch(print)
            ]],
        }),
    ],
});

const BarHijri = () => Widget.Box({
    vpack: 'center',
    className: 'spacing-h-5 txt-onSurfaceVariant bar-clock-box',
    children: [
        Widget.Label({
            className: 'txt-smallie',
            connections: [[5000, (label) => execAsync(['check-athan', '-d'])
                .then((output) => {
                    label.label = output;
                }).catch(print)
            ]],
        }),
    ],
});

const BarGroup = ({ child }) => Widget.Box({
    className: 'bar-group-margin bar-sides',
    children: [
        Widget.Box({
            className: 'bar-group bar-group-standalone bar-group-pad-system',
            children: [child],
        }),
    ]
});

export const ModuleClock = () => Widget.EventBox({
    onScrollUp: () => Hyprland.sendMessage(`dispatch workspace -1`),
    onScrollDown: () => Hyprland.sendMessage(`dispatch workspace +1`),
    onPrimaryClick: () => App.toggleWindow('sideright'),
    child: Widget.Box({
        className: 'spacing-h-5',
        children: [
            BarGroup({ child: BarClock() }),
            // BarGroup({ child: BarHijri() }),
        ]
    })
});
