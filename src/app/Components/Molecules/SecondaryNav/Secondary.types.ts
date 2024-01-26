import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

type SecondaryItem = {
    type: 'icon' | 'text';
    value: string | React.ComponentType;
};

export const SecondaryNavArray: SecondaryItem[] = [
    { type: 'text', value: 'Edition LG' },
    { type: 'icon', value: DarkModeOutlinedIcon },
    { type: 'icon', value: NotificationsNoneOutlinedIcon },
    { type: 'icon', value: AppsOutlinedIcon },
];