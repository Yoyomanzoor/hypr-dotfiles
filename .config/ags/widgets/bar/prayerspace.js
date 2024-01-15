// This is for the center of the bar. 
import { Service, Utils, Widget } from '../../imports.js';
// const { Box, Label, Button, Overlay, Revealer, Scrollable, Stack, EventBox } = Widget;
const { execAsync } = Utils;
// const { GLib } = imports.gi;
import Hyprland from 'resource:///com/github/Aylur/ags/service/hyprland.js';
// import { MaterialIcon } from '../../lib/materialicon.js';

const BarAthan = () => Widget.EventBox({
    child: Widget.Box({
        vpack: 'center',
        className: 'spacing-h-5 txt-onSurfaceVariant bar-clock-box',
        children: [
            Widget.Label({
                className: 'txt-smallie',
                connections: [[5000, (label) => execAsync(['check-athan', '-t'])
                    .then((output) => {
                        label.label = output;
                    }).catch(print)
                ]],
            }),
        ],
    })
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

export const ModulePrayer = () => Widget.EventBox({
    onScrollUp: () => Hyprland.sendMessage(`dispatch workspace -1`),
    onScrollDown: () => Hyprland.sendMessage(`dispatch workspace +1`),
    onPrimaryClick: () => App.toggleWindow('prayertimes'),
    // onPrimaryClickRelease: () => showPrayerTimes.setValue(!showPrayerTimes.value),
    child: Widget.Box({
        className: 'spacing-h-5',
        children: [
            BarGroup({ child: BarAthan() }),
        ]
    })
});
