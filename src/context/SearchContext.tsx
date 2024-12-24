import {
    ChangeEvent,
    createContext,
    ReactNode,
    useEffect,
    useState,
} from 'react';
import { useContext } from 'react';
import { api_v1 } from '../services';
import SpinModal from '../components/SpinModal';
import { toast } from 'react-toastify';

type WORD = {
    word: string;
    audio: string;
    example: string;
    ipa: string;
    meaning: string;
};

type SEARCHWORDCONTEXTTYPE = {
    userSearch: string | null;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    search: () => void;
    wordSearch: WORD | null;
};

const SearchContext = createContext<SEARCHWORDCONTEXTTYPE>(
    {} as SEARCHWORDCONTEXTTYPE,
);

export const SearchContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [userSearch, setUserSearch] = useState<string | null>(null);
    const [wordSearch, setWordSearch] = useState<WORD | null>(null);
    const [audio, setAudio] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserSearch(e.target.value);
    };
    useEffect(() => {
        if (audio.length > 1 && wordSearch) {
            setWordSearch((prev) => ({
                ...prev,
                audio: audio,
                word: prev?.word || '',
                example: prev?.example || '',
                ipa: prev?.ipa || '',
                meaning: prev?.meaning || '',
            }));
        }
    }, [audio]);

    const search = async () => {
        try {
            if (!userSearch) {
                toast.success('Please enter word', {
                    progressStyle: {
                        background: '#55AD9B',
                    },
                });
                return;
            }

            setLoading(true);
            const res = await api_v1.post('customer/lib/searching', {
                vocab: userSearch.toLowerCase(),
            });
            setUserSearch(null);
            for (
                let i = 0;
                i < res.data.payload.wordAPIDictionary.phonetics.length;
                i++
            ) {
                if (
                    res.data.payload.wordAPIDictionary.phonetics[i].audio
                        .length > 1
                ) {
                    setAudio(
                        res.data.payload.wordAPIDictionary.phonetics[i].audio,
                    );
                    setLoading(false);
                    break;
                }
                setLoading(false);
            }
            setWordSearch({
                audio: audio,
                word: res.data.payload.wordAPIDictionary.word,
                example: res.data.payload.exampleUsing,
                ipa: res.data.payload.wordAPIDictionary.phonetic,
                meaning:
                    res.data.payload.wordAPIDictionary.meanings[0]
                        .definitions[0].definition,
            });
        } catch (error) {}
    };
    return (
        <SearchContext.Provider
            value={{ userSearch, handleChange, search, wordSearch }}
        >
            <SpinModal isOpen={loading} />
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error(
            'useSearch must be used within an SearchContextProvider',
        );
    }
    return context;
};
