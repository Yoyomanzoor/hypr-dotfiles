import { Widget } from '../../imports.js';
import { vimList } from "../../data/vimkeybinds.js";

export const KeebSheet = () => Widget.Box({
    vertical: false,
    className: "spacing-h-15",
    homogeneous: true,
    children: [
        Widget.Icon({
            icon: '~/.config/ags/widgets/keeb/planck_light.svg',
            size: 30,
        }),
    ]
});
