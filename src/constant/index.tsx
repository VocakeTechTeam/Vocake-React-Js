import { v4 as uuid } from 'uuid';
export const NativeLanguageChoices = [
    'Korean',
    'Japanese',
    'Chinese',
    'Spanish',
    'German',
    'French',
    'Portuguese',
    'Polish',
    'Vietnamese',
];

export const AgeChoices = [
    'Under 10 years old',
    'Between 10 and 20 years old',
    'Between 21 and 25 years old',
    'Between 26 and 35 years old',
    'Between 36 and 45 years old',
    'Between 46 and 55 years old',
    '56 years old or older',
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
export const InterestedTopicChoices = [
    '📌 Business',
    '🚖 Travel',
    '🎱 Entertainment',
    '👯‍♀️ Socializing',
    '🧫 Culture',
    '❤️ Dating',
    '🛒 Shopping',
    '🌭 Food',
    '🏠 Family',
];

export const LanguageWantToLearnChoices = [
    { name: '🇺🇸 English', isActive: true },
    { name: '🇫🇮 Finnish', isActive: false },
];

export const MainChallengeChoices = [
    "⏰ It's hard to find time",
    "🚀 It's hard to stay motivated",
    '🧠 Remembering what I learned',
    '😔 English might be too hard',
];

export const ChooseWhereToImpChoices = [
    '👄 Improve pronunciation',
    '🗣️ Gain confidence in speaking',
    '💪 Learn useful words and phrases',
    '👂 Improve my listening skills',
    '🎯 Others',
];

export const HowOftenChoices = [
    '👄 Improve pronunciation',
    '🗣️ Gain confidence in speaking',
    '💪 Learn useful words and phrases',
    '👂 Improve my listening skills',
    '🎯 Others',
];

export const EnglishRateChoices = [
    {
        id: uuid(),
        level: 'A1',
        description: 'Can use basic phrases and introduce themselves.',
    },
    {
        id: uuid(),
        level: 'A2',
        descrption: 'Can handle simple conversations on familiar topics.',
    },
    {
        id: uuid(),
        level: 'B1',
        descrption: ' Can talk about daily life and express opinions.',
    },
    {
        id: uuid(),
        level: 'B2',
        descrption:
            'Can have detailed conversations and understand complex topics.',
    },
    {
        id: uuid(),
        level: 'C1',
        descrption:
            'Can communicate fluently and use academic or professional English.',
    },
    {
        id: uuid(),
        level: 'C2',
        descrption: 'Can use English effortlessly like a native speaker.',
    },
];

export const WhyBetterEnglishChoices = [
    '🚗 Travel or live abroad',
    '🚀 Accelerate my career',
    '🎙️ Talk to foreigners',
    '🕹️ Self improvement',
    '👶 Speak English to my kids',
    'Other',
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
