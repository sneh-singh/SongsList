import { screenNames } from './routes/screen-names';
import {
    HomeIcon,
    HomeActiveIcon,
    ListIcon,
    ListActiveIcon
} from './images';

export const ICONS_MAP = {
    [screenNames.screen.Home]: {
        active: HomeActiveIcon,
        inActive: HomeIcon,
        size: {
            height: '20',
            width: '20',
        },
        tabName:'Home'
    },
    [screenNames.screen.List]: {
        active: ListActiveIcon,
        inActive: ListIcon,
        size: {
            height: '20',
            width: '20',
        },
        tabName:'List'
    },
};

export const URL = 'https://itunes.apple.com/search?term=Michael+jackson';