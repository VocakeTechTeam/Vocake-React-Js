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
    { value: '🎯 Others', type: 'OTHERS' },
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
    { value: 'Other', type: 'OTHER' },
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
