export interface IconProps {
    width?: string;
    height?: string;
    color?: string;
}

export type UserReigster = {
    email: string | null;
    password: string | null;
    password_retry: string | null;
    fullName: string | null;
    phoneNumber: string | null;
    city: string | null;
    country: string | null;
    role: string | null;
    keySecret: string | null;
    subscriptionUser: string | null;
};

export type UserOnboard = UserReigster & {
    //List Question
    nativeLanguage: string[] | null;
    rangeAge: string | null;
    topicInterest: string[] | null;
    languageLearn: string[] | null;
    purposeEnglish: string[] | null;
    challengeInEnglish: string[] | null;
    levelUser: string | null;
    improveEnglish: string[] | null;
    practiceEnglish: string[] | null;
    xCode: string | null;
};

export interface Word {
    word: string;
    definition: string;
}

export interface MyList {
    id: string;
    name: string;
    words: Word[];
    image: string;
}

export interface MyListCollection {
    collections: MyList[];
    userName: string;
}
