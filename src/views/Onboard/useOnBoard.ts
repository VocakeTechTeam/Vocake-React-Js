import { useState } from 'react';

export const useOnBoard = () => {
    const onboard = {
        age: [],
        interestedTopic: [],
        languageToLearn: [],
        mainChallenge: [],
        howOften: [],
        rateEnglish: [],
        WhereToImprove: [],
        BetterEnglist: [],
    };
    const addOnBoard = () => {};
    return {
        addOnBoard,
    };
};
