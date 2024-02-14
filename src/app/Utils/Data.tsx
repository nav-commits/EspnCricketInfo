import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { SecondaryItem } from '../Components/Molecules/SecondaryNav/Secondary.types';

export const linkButtons = [
    {
        text: 'T20 World Cup schedule',
        icon: <KeyboardArrowRightOutlinedIcon fontSize='small' />,
    },
    { text: 'ESPNcricinfo Awards', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Updated IPL squads', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'WTC points table', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'ICC player rankings', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'ICC team rankings', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Writers', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Ask Cricinfo', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
];

export const stories = [
    {
        id: 1,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/abb188ea-7bb0-df0e-a88b-3a10873489f1/638426623803656898_best_square_thumbnail.webp',
        title: '🇮🇳 vs 🏴 in 📸',
    },
    {
        id: 2,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/c166b072-c739-e8f6-3c6d-3a10873d30be/638426629222026552_best_square_thumbnail.webp',
        title: '🇦🇺 never give up',
    },
    {
        id: 3,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/438c06d8-a180-7b37-c987-3a1086c7db1a/638426552628918149_best_square_thumbnail.webp',
        title: 'Semi-final time 💪',
    },
    {
        id: 4,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/b0089e75-4684-8780-eecb-3a109104b904/638428271367292718_best_square_thumbnail.webp',
        title: '31-over ODI 😮',
    },
    {
        id: 5,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/04dd09b0-5d49-6b0f-43b2-3a107cd457e4/638424884948950866_best_square_thumbnail.webp',
        title: 'Bedlam in 🇵🇰',
    },
    {
        id: 6,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/37beeef7-d90e-8864-6c66-3a107a4ec2b8/638424569952524018_best_square_thumbnail.webp',
        title: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 toil on flat deck',
    },
    {
        id: 7,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/b428b401-d4c4-5e47-e88e-3a108675114c/638426499348427649_best_square_thumbnail.webp',
        title: 'Newcomer of 2023? ⭐',
    },
    {
        id: 8,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/943788f0-f44c-3cee-72d9-3a10778b1db8/638424008179889177_best_square_thumbnail.webp',
        title: 'Beware of Bashir 🔥',
    },
    {
        id: 9,
        imageUrl:
            'https://media.usestoryteller.com/assets/stories/1b618ae0-f688-adff-240d-3a1077a28e6c/638424011856128291_best_square_thumbnail.webp',
        title: 'The rise of Marsh 🌅',
    },
];

export const dropdownItems = [
    {
        label: 'Live Scores',
        dropdownItems: ['Live Scores', 'Results', 'Season View', 'Desktop Scoreboard', 'Schedule'],
    },
    { label: 'Series', dropdownItems: ['U19 World Cup', 'SA20 2024', 'IPL 2024'] },
    { label: 'Teams', dropdownItems: ['Australia', 'Bangladesh', 'England', 'India'] },
    { label: 'News', dropdownItems: ['News Home', 'Racism', 'Corruption'] },
    { label: 'Features', dropdownItems: ['Features Home', 'Writers', 'On this day'] },
    { label: 'Videos', dropdownItems: ['Match day', 'Safe Hands', 'Men of Platinum'] },
    { label: 'Stats', dropdownItems: ['Stats Home', 'All Records', 'Rankings'] },
];

export const tabData = [
    { label: 'Aus vs WI', content: "1st Men's ODI" },
    { label: 'Ind vs Eng', content: "2nd Men's Test" },
    { label: 'SL vs Afg', content: 'Only test' },
    { label: 'Ind A vs Lions', content: '3rd unofficial Test' },
    { label: 'ILT20', content: '2024' },
];

export const secondaryItemArray: SecondaryItem[] = [
    { type: 'text', value: 'Edition LG' },
    { type: 'icon', value: DarkModeOutlinedIcon },
    { type: 'icon', value: NotificationsNoneOutlinedIcon },
    { type: 'icon', value: AppsOutlinedIcon },
];

export const mainNavArray = [
    { value: 'Live Scores', path: '/LiveScores' },
    { value: 'Series', path: '/series' },
    { value: 'Teams', path: '/teams' },
    { value: 'News', path: '/news' },
    { value: 'Features', path: '/features' },
    { value: 'Videos', path: '/videos' },
    { value: 'Stats', path: '/stats' },
];

const bashirHeading = {
    heading: 'Bashir',
    subheading: 'Bashir@gmail.com',
    profileImage:
        'https://media.usestoryteller.com/assets/stories/943788f0-f44c-3cee-72d9-3a10778b1db8/638424008179889177_best_square_thumbnail.webp',
};
export const storyContent = [
    {
        url: 'https://media.usestoryteller.com/assets/pages/e2062520-4102-e818-a848-3a108ff1f43f/bf4b75b1-47dc-9b6c-60c1-3a108ff1f43f/AssetImage.jpg',
        duration: 5000,
        header: bashirHeading,
    },
    {
        url: 'https://media.usestoryteller.com/assets/pages/258f511c-749f-275f-a7ce-3a108b4e48ae/0fe1593c-b843-f824-4a1e-3a108b4e7866/AssetImage.jpg',
        duration: 5000,
        header: bashirHeading,
    },
    {
        url: 'https://media.usestoryteller.com/assets/pages/bb1a81e4-d737-ffe9-c809-3a1087245b8f/fe28b72d-1d0b-e7ee-2605-3a1087245b8f/AssetImage.jpg',
        duration: 5000,
        header: bashirHeading,
    },
    {
        url: 'https://media.usestoryteller.com/assets/pages/184b9d19-6dd6-fb25-a129-3a1087246830/db03a760-a1d4-b23e-e648-3a108724682f/AssetImage.jpg',
        duration: 5000,
        header: bashirHeading,
    },
];

export const slides = [
    {
        imageUrl:
            'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2024/0205/dm_240205_INET_CRIC_INDvsENG_ENGBOWL_HARMISON_GLOBAL/dm_240205_INET_CRIC_INDvsENG_ENGBOWL_HARMISON_GLOBAL.jpg',
        text: 'Pant: I felt at home even around my super-seniors',
    },
    {
        imageUrl:
            'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2024/0201/dm_240201_INET_CRIC_PANTWITHSTAR_/dm_240201_INET_CRIC_PANTWITHSTAR_.jpg',
        text: 'Pant: I felt at home even around my super-seniors',
    },
    {
        imageUrl:
            'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2024/0201/dm_240201_INET_CRIC_star_pant_interview_GLOBAL/dm_240201_INET_CRIC_star_pant_interview_GLOBAL.jpg',
        text: 'Pant: I felt at home even around my super-seniors',
    },
    {
        imageUrl:
            'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2024/0205/dm_240205_indveng_generic_dravidpc1/dm_240205_indveng_generic_dravidpc1.jpg',
        text: 'Pant: I felt at home even around my super-seniors',
    },
];

export const dataArray = [
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/374700/374703.6.jpg',
        content: "U-19 WC: Agony for Pakistan, it's an Australia vs India final.",
    },
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/369600/369657.6.jpg',
        content: "Conrad on SA's big loss vs NZ: 'A jolt and a wake-up call.",
    },
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/375600/375654.6.jpg',
        content: 'NZ vs SA: Daryl Mitchell sidelined by foot injury.',
    },
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/375400/375423.6.jpg',
        content: 'Rehan swings from the hip... but not on the golf course.',
    },
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/310600/310657.6.jpg',
        content: 'IPL: Deepak Chahar is trying get stronger - with ball and bat.',
    },
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/324600/324614.6.jpg',
        content: 'Sri Lanka drop Shanaka for ODIs against Afghanistan.',
    },
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/372600/372693.6.jpg',
        content: 'WI star power returns as Australia assess top-order squeeze.',
    },
    {
        imgSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_160/lsci/db/PICTURES/CMS/375500/375583.6.jpg',
        content: 'Kapp on Sydney win: Proud moment for SA cricket.',
    },
];


export const matchHighlights = [
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2024/0213/dm_240213_generic_bedingham/dm_240213_generic_bedingham.jpg',
        alt: 'SL vs Afg Highlights',
        subTitle: 'Bedingham on his bizarre dismissal',
    },
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/cricinfo/2024/0209/cric_240209_Martin_Guptill_25_Questions/cric_240209_Martin_Guptill_25_Questions.jpg',
        alt: 'SL vs Afg Highlights',
        subTitle: 'Which Australian does Guptill secretly wish was a New Zealander?',
    },
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/esci/media/motion/2024/0210/dm_240210_INET_CRIC_INDvENG_SQUADREAX_SHREYAS_GLOBAL/dm_240210_INET_CRIC_INDvENG_SQUADREAX_SHREYAS_GLOBAL.jpg',
        alt: 'SL vs Afg Highlights',
        subTitle: 'Why did India leave Shreyas Iyer out?',
    },
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375213.6.jpg',
        alt: 'SL vs Afg Highlights',
        subTitle: 'Bedingham on his bizarre dismissal',
    },
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/375200/375213.6.jpg',
        alt: 'SL vs Afg Highlights',
        subTitle: 'Bedingham on his bizarre dismissal',
    },
];

export const tabDataLiveScores = [
    { label: 'Live Cricket Score' },
    { label: 'Upcoming' },
    { label: 'Result' },
];