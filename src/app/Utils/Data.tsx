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

export const trendingPlayers = [
    {
        text: 'Cameron Green',
        icon: <KeyboardArrowRightOutlinedIcon fontSize='small' />,
    },
    { text: 'Steven Smith', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Marnus Labuschagne', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Laura Wolvaardt', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Nathan Lyon', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Virat Kohli', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'James Fuller', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
    { text: 'Tim Southee', icon: <KeyboardArrowRightOutlinedIcon fontSize='small' /> },
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

export const slidesTwo = [
    {
        imageUrl: '10',
        text: 'Test hundreds for Joe Root against India are the most by any batter.',
    },
    {
        imageUrl: '10',
        text: 'Test hundreds for Joe Root against India are the most by any batter.',
    },
    {
        imageUrl: '10',
        text: 'Test hundreds for Joe Root against India are the most by any batter.',
    },
    {
        imageUrl: '10',
        text: 'Test hundreds for Joe Root against India are the most by any batter.',
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

export const chips = [
    { label: "Int'l", isSelected: false, disabled: false },
    { label: 'T20s', isSelected: false, disabled: false },
    { label: 'ODIs', isSelected: false, disabled: false },
    { label: 'Tests', isSelected: false, disabled: false },
    { label: 'Men', isSelected: false, disabled: false },
    { label: 'Women', isSelected: false, disabled: false },
    { label: 'Domestic', isSelected: false, disabled: false },
    { label: 'FC', isSelected: false, disabled: false },
    { label: 'Youth', isSelected: false, disabled: false },
    { label: 'List A', isSelected: false, disabled: false },
    { label: 'Others', isSelected: false, disabled: false },
];

export const cricketMatches = [
    {
        id: 1,
        stumps: 'Live',
        match: {
            matchInfo: {
                description: '8th Match (N), Lahore, February 22, 2024',
            },
            teams: [
                {
                    name: 'Islamabad United',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313500/313521.logo.png',
                    score: '(20 ov) 138/9',
                },
                {
                    name: 'Quetta Gladiators',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313500/313522.logo.png',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Series Home',
        day: 'Gladiators chose to field.',
        label: [{ label: 'Men' }, { label: 'Domestic' }, { label: 'T20s' }],
    },
    {
        id: 2,
        stumps: 'Today, 11:00PM',
        match: {
            matchInfo: {
                description: '4th Test, Ranchi, February 23 - 27, 2024',
            },
            teams: [
                {
                    name: 'India',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png',
                    score: '76 & 67/3',
                    overs: '28',
                },
                {
                    name: 'England',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313114.logo.png',
                    score: '575/9d',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Preview News',
        day: 'Match yet to begin',
        label: [{ label: "Int'l" }, { label: 'Tests' }, { label: 'Men' }],
    },

    {
        id: 3,
        stumps: 'Result',
        match: {
            matchInfo: {
                description: '2nd Match, Group B, Bangi, February 22, 2024',
            },
            teams: [
                {
                    name: 'Bahrain',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/358500/358567.png',
                    score: '266/7',
                },
                {
                    name: 'Vanuatu',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313221.logo.png',
                    score: '(48.2/50 ov, T:267) 157',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Summary Series Home',
        day: 'Bahrain won by 109 runs',
        label: [{ label: 'Men' }],
    },
    {
        id: 4,
        stumps: 'Result',
        match: {
            matchInfo: {
                description: '3rd Match, Group A, Kuala Lumpur, February 22, 2024',
            },
            teams: [
                {
                    name: 'Saudi Arabia',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/358500/358566.png',
                    score: '231',
                },
                {
                    name: 'Kuwait',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/358500/358568.png',
                    score: '(35/50 ov. T:232) 134',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Report, Photos, Videos',
        day: 'N/A',
        label: [{ label: 'Men' }, { label: 'Domestic' }],
    },

    {
        id: 5,
        stumps: 'Live',
        match: {
            matchInfo: {
                description: 'Final, Dubai, March 05, 2024',
            },
            teams: [
                {
                    name: 'Australia',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/340400/340493.png',
                    score: '(18 ov) 172/4',
                },
                {
                    name: 'New Zealand',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/340500/340505.png',
                },
            ],
        },
        textUnderScore: 'Day 3 - New Zealand need 258 runs.',
        additionalContent: 'Series Finale',
        day: 'Aussies chose to bat.',
        label: [{ label: 'Men' }, { label: "Int'l" }, { label: 'T20' }],
        commentary: [
            {
                over: 84,
                ball: 0.6,
                bowler: "O'Rourke",
                batsman: 'Green',
                runs: 0,
                description:
                    "Full outside off, left alone, and he'll be able to come back tomorrow",
                is_boundary: false,
                is_wicket: false,
            },
            {
                over: 84,
                ball: 0.5,
                bowler: "O'Rourke",
                batsman: 'Green',
                runs: 4,
                description:
                    "He's done it! Leans back and carves it away through backward point from outside off. Lets our a roar and celebrates. His second Test hundred. A fantastic knock in challenging conditions",
                is_boundary: true,
                is_wicket: false,
            },
            {
                over: 84,
                ball: 0.4,
                bowler: "O'Rourke",
                batsman: 'Green',
                runs: 0,
                description: 'Chopped down into the pitch outside off',
                is_boundary: false,
                is_wicket: false,
            },
            {
                over: 84,
                ball: 0.3,
                bowler: "O'Rourke",
                batsman: 'Green',
                runs: 4,
                description:
                    "He still finds the rope! That's a great shot, short outside off, flayed through the off side and he's on 99",
                is_boundary: true,
                is_wicket: false,
            },
            {
                over: 84,
                ball: 0.2,
                bowler: "O'Rourke",
                batsman: 'Green',
                runs: 0,
                description:
                    "A huge heave! Clears the front leg and aims for the hills, doesn't make contact",
                is_boundary: false,
                is_wicket: false,
            },
            {
                over: 84,
                ball: 0.1,
                bowler: "O'Rourke",
                batsman: 'Green',
                runs: 4,
                description:
                    'Takes him on! Just wide of mid-on. Green clubs it down the ground, evades a diving Kuggeleijn',
                is_boundary: true,
                is_wicket: false,
            },
        ],
        summary: {
            stumps_day: 1,
            runs: 12,
            wickets: 0,
            overs_completed: 84,
            current_run_rate: null,
            batting_team: 'Australia',
            bowling_team: 'New Zealand',
            batsman_stats: [
                {
                    name: 'Cameron Green',
                    runs: 100,
                    balls: null,
                    fours: null,
                    sixes: null,
                    centuries: 1,
                    half_centuries: null,
                },
            ],
            bowler_stats: [
                {
                    name: "Will O'Rourke",
                    overs: null,
                    runs_given: 12,
                    wickets_taken: 0,
                },
            ],
            match_context:
                "End of Day 1, absorbing cricket with final over drama as Cameron Green scores a century. Australia likely happier. Good platforms by Smith, Khawaja, and support by Mitch Marsh. Matt Henry and Will O'Rourke noted performances for New Zealand.",
        },
        end_of_over_summary: {
            over: 85,
            runs: 12,
            total_runs: 279,
            wickets: 9,
            current_run_rate: 3.28,
            batsman_at_crease: 'Cameron Green',
            runs_scored_by_batsman_at_crease: 103,
            balls_faced_by_batsman_at_crease: 155,
            fours_by_batsman_at_crease: 16,
            bowler_stats_over_one: 'William O’Rourke',
            bowler_number_one: '20-8-59-2',
            bowler_number_two: '20-6-54-3',
            bowler_stats_over_two: 'Matt Henry 20-6-54-3',
        },
        match_summary: {
            day_summary:
                "That's stumps on the opening day. Absorbing cricket from start to finish capped by the final-over drama of Cameron Green bringing up a superb century. Feels like Australia will be the happier side overall. There's plenty in this pitch although, yes, it can flatten out here. They were put into bat by Tim Southee. Steven Smith and Usman Khawaja laid a good platform against bowling that was a little shorter, but either side of lunch New Zealand took charge. Mitch Marsh helped Green steady things before the latter took over with the lower order. Matt Henry the pick of the attack for New Zealand while Will O'Rourke was also good.",
            player_quotes: [
                {
                    player: 'Cameron Green',
                    quote: 'Obviously feels really good. Mainly with where we are as a team. It was a pretty tough wicket out there and I felt like the boys played pretty well. Just one of those days. Someone just needed to bat through so glad it was me. I sort of felt like in the 20th over it started to come back even more, than maybe the first 20. Nice to stick out there and hopefully put a semi-competitive total on the board.',
                },
            ],
            viewer_comments: [
                {
                    commenter: 'KJ',
                    comment:
                        "All in all a good days cricket for the neutral but disappointing for NZ. They had Australia under pressure at times but couldn't be ruthless and finish the job. Australia won't be so kind. Australia well ahead now.",
                },
                {
                    commenter: 'Jason mc',
                    comment:
                        'Sent in on a bit of an uneven track. Would take 279. Not sure what Cummins would have done of won the toss. Interest will be in the pitch 2nd day. Then we find out whether 279 is good or bad. Well poised overnight.',
                },
            ],
        },
    },
    {
        id: 6,
        stumps: 'Today, 2:00PM',
        match: {
            matchInfo: {
                description: '1st ODI, Wellington, March 10, 2024',
            },
            teams: [
                {
                    name: 'Pakistan',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313129.logo.png',
                    score: '250/7',
                    overs: '50',
                },
                {
                    name: 'South Africa',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313125.logo.png',
                    score: '251/5',
                    overs: '48.3',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Match Report',
        day: 'Match ended',
        label: [{ label: "Int'l" }, { label: 'ODIs' }, { label: 'Men' }],
    },
    {
        id: 7,
        stumps: 'Delayed',
        match: {
            matchInfo: {
                description: 'Semi-Final, Colombo, March 15, 2024',
            },
            teams: [
                {
                    name: 'Sri Lanka',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/340000/340047.png',
                },
                {
                    name: 'West Indies',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/317600/317615.png',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Rain Delay',
        day: 'Match delayed due to rain.',
        label: [{ label: 'Men' }, { label: "Int'l" }, { label: 'T20' }],
    },
    {
        id: 8,
        stumps: 'Result',
        match: {
            matchInfo: {
                description: 'Quarter Final, Dhaka, March 20, 2024',
            },
            teams: [
                {
                    name: 'Bangladesh',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/341400/341456.png',
                    score: '350/8',
                },
                {
                    name: 'Zimbabwe',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/340500/340503.png',
                    score: '(50 ov, T:351) 220',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Match Summary',
        day: 'Bangladesh won by 130 runs',
        label: [{ label: 'Men' }, { label: 'ODIs' }],
    },
    {
        id: 9,
        stumps: 'Result',
        match: {
            matchInfo: {
                description: 'Group Stage, Harare, April 05, 2024',
            },
            teams: [
                {
                    name: 'Ireland',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313149.logo.png',
                    score: '280/6',
                },
                {
                    name: 'Afghanistan',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/321000/321005.png',
                    score: '(48/50 ov, T:281) 284/7',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Full Scorecard',
        day: 'Afghanistan won by 3 wickets',
        label: [{ label: 'Men' }, { label: 'ODIs' }],
    },
    {
        id: 10,
        stumps: 'Live',
        match: {
            matchInfo: {
                description: "2nd Test, Lord's, July 22 - 26, 2024",
            },
            teams: [
                {
                    name: 'England',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313114.logo.png',
                    score: '345 & 129/3',
                    overs: '45',
                },
                {
                    name: 'India',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png',
                    score: '290 & 280',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Live Commentary',
        day: 'Day 4 in progress',
        label: [{ label: "Int'l" }, { label: 'Tests' }, { label: 'Men' }],
    },
    {
        id: 11,
        stumps: 'Today, 9:00AM',
        match: {
            matchInfo: {
                description: '1st T20, Abu Dhabi, April 25, 2024',
            },
            teams: [
                {
                    name: 'United Arab Emirates',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/358500/358569.png',
                },
                {
                    name: 'Nepal',
                    flag: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/319900/319958.png',
                },
            ],
        },
        textUnderScore: 'Top Performer: Player XYZ',
        additionalContent: 'Match Preview',
        day: 'Match yet to begin',
        label: [{ label: 'Men' }, { label: "Int'l" }, { label: 'T20' }],
    },
];

export const disableRules: { [key: string]: string[] } = {
    "Int'l": ['Domestic', 'Others'],
    T20s: ['ODIs', 'Tests', 'FC', 'List A'],
    Men: ['FC', 'List A', 'Women', 'Youth'],
    Tests: ['T20s', 'ODIs', 'Others', 'Domestic', 'List A'],
    ODIs: ['T20s', 'Tests', 'Others', 'Domestic', 'FC'],
    Domestic: ["Int'l", 'Youth', 'Tests', 'ODIs'],
    Others: ["Int'l", 'Tests', 'ODIs', 'FC', 'List A', 'Youth'],
    FC: ['ODIs', 'T20s', 'Others', 'List A', 'Women', 'Youth'],
    'List A': ['T20s', 'Tests', 'Women', 'Youth', 'Others', 'FC'],
    Youth: ['Domestic', 'Others', 'Women', 'FC', 'List A'],
    Women: ['Men', 'Youth', 'FC', 'List A'],
};

export const tabDataMatch = [
    { label: 'Summary' },
    { label: 'Scoreboard' },
    { label: 'Report' },
    { label: 'Commentary' },
    { label: 'Stats' },
    { label: 'Tables' },
    { label: 'News' },
    { label: 'Videos' },
    { label: 'Photos' },
];

export const tabs = [
    { name: 'Matches', count: 26 },
    { name: 'AFG v IRE', count: 1 },
    { name: 'BPL 2024', count: 1 },
    { name: 'WPL', count: 2 },
    { name: 'NZ v AUS', count: 1 },
    { name: 'WCL 2', count: 1 },
    { name: 'Sheffield Shield', count: 3 },
    { name: 'Plunket Shield', count: 3 },
    { name: 'Durham in ZIM', count: 1 },
    { name: 'CSA 4-Day DIV1', count: 1 },
    { name: 'CWC Play-off', count: 3 },
    { name: 'Nepal Tri-Nation', count: 2 },
    { name: 'Dang CL', count: 3 },
    { name: 'Ranji Trophy', count: 2 },
    { name: 'PSL 2024', count: 2 },
];

export const carouselItems = [
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/374900/374946.6.jpg',
        alt: 'MAR 01',

        description: 'India vs England has been a tale of two very good captains',
    },

    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/243500/243599.3.jpg',
        alt: 'MAR 01',

        description: 'Ask Steven: Who has scored the most Test hundreds in a calendar year?',
    },
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/243500/243599.3.jpg',
        alt: 'MAR 01',

        description: 'Ask Steven: Who has scored the most Test hundreds in a calendar year?',
    },
    {
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/243500/243599.3.jpg',
        alt: 'MAR 01',

        description: 'Ask Steven: Who has scored the most Test hundreds in a calendar year?',
    },
];

export const photos = [
    {
        id: 1,
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/376900/376968.jpg',
        alt: 'Fortune Barishal won their maiden BPL title',
        layout: 'small', // Indicative of the photo size or layout style
    },
    {
        id: 2,
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_240/lsci/db/PICTURES/CMS/376900/376967.jpg',
        alt: 'Grace Harris scored her first fifty of the WPL season',
        layout: 'small',
    },
    // Add more photos as needed, varying the layout as desired
    {
        id: 3,
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480/lsci/db/PICTURES/CMS/376900/376966.jpg',
        alt: 'Grace Harris moved to top of run charts on Friday',
        layout: 'large',
    },
    {
        id: 4,
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480/lsci/db/PICTURES/CMS/376900/376966.jpg',
        alt: 'Grace Harris moved to top of run charts on Friday',
        layout: 'small',
    },
    {
        id: 5,
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480/lsci/db/PICTURES/CMS/376900/376966.jpg',
        alt: 'Grace Harris moved to top of run charts on Friday',
        layout: 'small',
    },

    {
        id: 5,
        src: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480/lsci/db/PICTURES/CMS/376900/376966.jpg',
        alt: 'Grace Harris moved to top of run charts on Friday',
        layout: 'large',
    },
    // Continue with other photos
];
