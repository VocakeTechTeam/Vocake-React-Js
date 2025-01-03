import { SideBarTeacherItemProps } from '../components/Sidebar/SidebarTeacher';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
export enum EnumTopic {
    BUSINESS,
    TRAVEL,
    ENTERTAINMENT,
    SOCIALIZING,
    CULTURE,
    DATING,
    SHOPPING,
    FOOD,
    FAMILY,
    SKIP_OTHERS,
}
export enum EnumImproveEnglish {
    IMPROVEPRONUNCIATION,
    GAINCONFIDENCESPEAKING,
    LEARNUSEFULWORDSANDPHRASES,
    IMPROVELISTENINGSKILLS,
    OTHERS,
    SKIP_OTHERS,
}
enum EnumPurposeEnglish {
    TRAVELORLIVEABROAD,
    ACCELERATECARRER,
    TALK2FOREIGNERS,
    SELFIMPROVEMENT,
    SPEAK2KID,
    OTHERSPURPOSE,
}
export enum EnumLanguageLearn {
    ENGLISH,
    FINNISH,
    SKIP_OTHERS,
}
export enum EnumLanguage {
    KOREAN,
    JAPANESE,
    CHINESE,
    SPANISH,
    GERMAN,
    FRENCH,
    PORTUGUESE,
    POLISH,
    VIETNAMESE,
    SKIP_OTHERS,
}
export enum EnumPracticeEnglish {
    FEWMINUTESADAY,
    FEWTIMESEACHDAY,
    FEWTIMESEACHMONTH,
    CANNOTCOMMITNOW,
    SKIP_OTHERS,
}
export const NativeLanguageChoices = [
    { value: 'Korean', type: 'KOREAN' },
    { value: 'Japanese', type: 'JAPANESE' },
    { value: 'Chinese', type: 'CHINESE' },
    { value: 'Spanish', type: 'SPANISH' },
    { value: 'German', type: 'GERMAN' },
    { value: 'French', type: 'FRENCH' },
    { value: 'Portuguese', type: 'PORTUGUESE' },
    { value: 'Polish', type: 'POLISH' },
    { value: 'Vietnamese', type: 'VIETNAMESE' },
];
export enum EnumRangeAge {
    UNDER10,
    BETWEEN1020,
    BETWEEN2125,
    BETWEEN2635,
    BETWEEN3645,
    ABOVE56,
}
export enum EnumChallengeInEnglish {
    HARD2FINDTIME,
    HARD2STAYMOTIVATED,
    REMEMBERWHATILEARN,
    ENGLISHMIGHTHARD,
    SKIP_OTHERS,
}

export const AgeChoices: {
    value: string;
    type: string;
}[] = [
    { value: 'Under 10 years old', type: 'UNDER10' },
    { value: 'Between 10 and 20 years old', type: 'BETWEEN1020' },
    { value: 'Between 21 and 25 years old', type: 'BETWEEN2125' },
    { value: 'Between 26 and 35 years old', type: 'BETWEEN2635' },
    { value: 'Between 36 and 45 years old', type: 'BETWEEN3645' },
    { value: 'Between 46 and 55 years old', type: 'ABOVE56' },
    { value: '56 years old or older', type: 'ABOVE56' },
];

export const ChallengeReassureChoices = {
    time: (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>
                Time is precious, and that's why Vocake lessons average just 5
                minutes long!
            </h2>{' '}
            <p>
                You can pause any time, and when you're ready to restart, it's
                super easy to pick up from right where you left off!
            </p>
        </div>
    ),
    motivation: (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>We all find it hard to stay motivated sometimes! 😓</h2>{' '}
            <p>
                We have fun monthly challenges with prizes, smart methods to
                review, and great ways to track your progress.
            </p>
            <p>
                Most importantly, our lessons are designed to keep you
                interested!
            </p>
        </div>
    ),
    remember: (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Why learn something if you can't remember it? 😬</h2>{' '}
            <p>
                At Vocake, we've built a proven method that will not only help
                you to learn new words and concepts, but to also remember them
                down the road!
            </p>
        </div>
    ),
    difficult: (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Vocake is designed for learners of all skill levels!</h2>{' '}
            <p>
                Our thousands of lessons cover all experiences and topics. We
                make sure our content is relevant and that concepts are
                explained clearly for you!
            </p>
            <p>You are capable of it, and it WILL be fun and rewarding!</p>
        </div>
    ),
};
export const InterestedTopicChoices: {
    value: string;
    type: string;
}[] = [
    { value: '📌 Business', type: 'BUSINESS' },
    { value: '🚖 Travel', type: 'TRAVEL' },
    { value: '🎱 Entertainment', type: 'ENTERTAINMENT' },
    { value: '👯‍♀️ Socializing', type: 'SOCIALIZING' },
    { value: '🧫 Culture', type: 'CULTURE' },
    { value: '❤️ Dating', type: 'DATING' },
    { value: '🛒 Shopping', type: 'SHOPPING' },
    { value: '🌭 Food', type: 'FOOD' },
    { value: '🏠 Family', type: 'FAMILY' },
];

export const LanguageWantToLearnChoices = [
    { value: '🇺🇸 English', isActive: true, type: 'ENGLISH' },
    { value: '🇫🇮 Finnish', isActive: false, type: 'FINNISH' },
];

export const MainChallengeChoices: {
    value: string;
    type: string;
}[] = [
    { value: "⏰ It's hard to find time", type: 'HARD2FINDTIME' },
    { value: "🚀 It's hard to stay motivated", type: 'HARD2STAYMOTIVATED' },
    { value: '🧠 Remembering what I learned', type: 'REMEMBERWHATILEARN' },
    { value: '😔 English might be too hard', type: 'ENGLISHMIGHTHARD' },
];

export const ChooseWhereToImpChoices: {
    value: string;
    type: string;
}[] = [
    { value: '👄 Improve pronunciation', type: 'IMPROVEPRONUNCIATION' },
    { value: '🗣️ Gain confidence in speaking', type: 'GAINCONFIDENCESPEAKING' },
    {
        value: '💪 Learn useful words and phrases',
        type: 'LEARNUSEFULWORDSANDPHRASES',
    },
    { value: '👂 Improve my listening skills', type: 'IMPROVELISTENINGSKILLS' },
    { value: '🎯 Others', type: 'SKIP_OTHERS' },
];

export const HowOftenChoices: {
    value: string;
    type: string;
}[] = [
    { value: 'A few minutes every day', type: 'FEWMINUTESADAY' },
    { value: 'A few times each week', type: 'FEWTIMESEACHDAY' },
    { value: 'A few times each month', type: 'FEWTIMESEACHMONTH' },
    { value: 'I cant commit right now', type: 'CANNOTCOMMITNOW' },
];

export const EnglishRateChoices = [
    {
        level: 'A1',
        description: 'Can use basic phrases and introduce themselves.',
    },
    {
        level: 'A2',
        descrption: 'Can handle simple conversations on familiar topics.',
    },
    {
        level: 'B1',
        descrption: ' Can talk about daily life and express opinions.',
    },
    {
        level: 'B2',
        descrption:
            'Can have detailed conversations and understand complex topics.',
    },
    {
        level: 'C1',
        descrption:
            'Can communicate fluently and use academic or professional English.',
    },
    {
        level: 'C2',
        descrption: 'Can use English effortlessly like a native speaker.',
    },
];

export const WhyBetterEnglishChoices = [
    { value: '🚗 Travel or live abroad', type: 'TRAVELORLIVEABROAD' },
    { value: '🚀 Accelerate my career', type: 'ACCELERATECARRER' },
    { value: '🎙️ Talk to foreigners', type: 'TALK2FOREIGNERS' },
    { value: '🕹️ Self improvement', type: 'SELFIMPROVEMENT' },
    { value: '👶 Speak English to my kids', type: 'SPEAK2KID' },
    { value: 'Other', type: 'OTHERSPURPOSE' },
];

export const ChallengeReassureMapping: Record<
    string,
    keyof typeof ChallengeReassureChoices
> = {
    "⏰ It's hard to find time": 'time',
    "🚀 It's hard to stay motivated": 'motivation',
    '🧠 Remembering what I learned': 'remember',
    '😔 English might be too hard': 'difficult',
};

export const SideBarTeacherItemArr1: SideBarTeacherItemProps[] = [
    {
        label: 'My classes',
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.49775 0.5H11.502C14.0528 0.5 15.4928 1.94675 15.5003 4.4975V11.5025C15.5003 14.0525 14.0528 15.5 11.502 15.5H4.49775C1.947 15.5 0.500252 14.0525 0.500252 11.5025V4.4975C0.500252 1.94675 1.947 0.5 4.49775 0.5ZM8.03705 12.395C8.3603 12.395 8.62955 12.155 8.65955 11.8325V4.19C8.68955 3.9575 8.5778 3.72425 8.3753 3.5975C8.16455 3.47 7.90955 3.47 7.7078 3.5975C7.50455 3.72425 7.3928 3.9575 7.41455 4.19V11.8325C7.4528 12.155 7.72205 12.395 8.03705 12.395ZM11.4878 12.395C11.8028 12.395 12.0721 12.155 12.1103 11.8325V9.3725C12.132 9.13175 12.0203 8.9075 11.817 8.78C11.6153 8.6525 11.3603 8.6525 11.1503 8.78C10.9471 8.9075 10.8353 9.13175 10.8653 9.3725V11.8325C10.8953 12.155 11.1646 12.395 11.4878 12.395ZM5.16453 11.8325C5.13453 12.155 4.86528 12.395 4.54203 12.395C4.21952 12.395 3.94952 12.155 3.92027 11.8325V6.65C3.89777 6.41675 4.00952 6.185 4.21277 6.0575C4.41453 5.93 4.67028 5.93 4.87278 6.0575C5.07453 6.185 5.18778 6.41675 5.16453 6.65V11.8325Z"
                    fill={'#707FDD'} // Dynamically set icon color
                />
            </svg>
        ),
    },
    {
        label: 'Begin TEH 01',
        icon: <>✨</>,
    },
    {
        label: 'Advanced TEH 02',
        icon: <>😎</>,
    },
    {
        label: 'TEH 03',
        icon: <>🎯</>,
    },
    {
        label: 'TEH 04',
        icon: <>😤</>,
    },
];

export const SideBarTeacherItemArr2: SideBarTeacherItemProps[] = [
    {
        label: 'Settings',
        icon: <SettingsIcon sx={{ width: 15, color: '#A6ABC8' }} />,
    },
    {
        label: 'Payment',
        icon: <AccountBalanceWalletIcon sx={{ width: 15, color: '#A6ABC8' }} />,
    },
    {
        label: 'Account',
        icon: (
            <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.97047 4.46829C9.97047 6.67106 8.2043 8.43733 5.99998 8.43733C3.7964 8.43733 2.02949 6.67106 2.02949 4.46829C2.02949 2.26552 3.7964 0.5 5.99998 0.5C8.2043 0.5 9.97047 2.26552 9.97047 4.46829ZM6 15.5C2.74678 15.5 0 14.9712 0 12.9312C0 10.8904 2.76404 10.3804 6 10.3804C9.25397 10.3804 12 10.9092 12 12.9492C12 14.99 9.23596 15.5 6 15.5Z"
                    fill="#A6ABC8"
                />
            </svg>
        ),
    },
    {
        label: 'Help',
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.75237 0.499023H11.2549C13.7974 0.499023 15.4999 2.28402 15.4999 4.93902V11.0673C15.4999 13.7148 13.7974 15.499 11.2549 15.499H4.75237C2.20987 15.499 0.499872 13.7148 0.499872 11.0673V4.93902C0.499872 2.28402 2.20987 0.499023 4.75237 0.499023ZM7.99243 5.79479C7.63994 5.79479 7.34743 5.50154 7.34743 5.14229C7.34743 4.77479 7.63994 4.48229 8.00743 4.48229C8.36743 4.48229 8.65993 4.77479 8.65993 5.14229C8.65993 5.50154 8.36743 5.79479 7.99243 5.79479ZM8.65231 10.8348C8.65231 11.1948 8.35981 11.4873 7.99231 11.4873C7.63231 11.4873 7.33981 11.1948 7.33981 10.8348V7.51976C7.33981 7.15901 7.63231 6.85976 7.99231 6.85976C8.35981 6.85976 8.65231 7.15901 8.65231 7.51976V10.8348Z"
                    fill="#A6ABC8"
                />
            </svg>
        ),
    },
];

export const sidebarItemLists = [
    {
        title: 'Search',
        path: '/',
        icon: <SearchIcon />,
    },
    {
        title: 'My list',
        path: '/mylist',
        icon: <ListAltIcon />,
    },
    {
        title: 'Explore',
        path: '/explore',
        icon: <ExploreIcon />,
    },
    {
        title: 'Setting',
        path: '/setting',
        icon: <SettingsOutlinedIcon />,
    },
];
