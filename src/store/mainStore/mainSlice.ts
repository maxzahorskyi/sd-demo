import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const SLICE_MAIN_NAME = "main";

export type WordDefinition = {
  [key: string]: string;
};

export type WordEtymology = {
  [key: string]: string;
};

export type WordPronunciation = {
  w: string;
  e: string;
};

export type WordTypeData = {
  word: string;
  pos: string;
  definition: WordDefinition[];
  pronunciation: WordPronunciation;
  etymology: WordEtymology[];
};

export interface MainStateType {
  wordData: {
    reformed: WordTypeData[];
    traditional: WordTypeData[];
  };
  showHeaderSearch: boolean;
  selectedWord: string;
}

const initialState: MainStateType = {
  wordData: {
    reformed: [
      {
        word: "Test word",
        pos: "test_pos",
        definition: [{ noun: "noun_text" }],
        pronunciation: { w: "te-st (pronunciation)", e: "te-st (pronunciation)" },
        etymology: [{ etymology: "ety text" }]
      }
    ],
    traditional: [
      {
        word: "Tur`",
        pos: "tur_pos",
        definition: [{ tur: "noun_text" }],
        pronunciation: { w: "T u r (pronunciation)", e: "T u r (pronunciation)" },
        etymology: [{ etymology: "ety text" }]
      }
    ]
  },
  showHeaderSearch: false,
  selectedWord: ""
};

export const mainSlice = createSlice({
  name: SLICE_MAIN_NAME,
  initialState,
  reducers: {
    reset: () => initialState,
    setShowHeaderSearch: (state, action: PayloadAction<boolean>) => {
      state.showHeaderSearch = action.payload;
    },
    setSelectedWord: (state, action: PayloadAction<string>) => {
      state.selectedWord = action.payload;
      // // temp bellow
      // state.wordData.reformed.word = action.payload;
      // state.wordData.traditional.word = action.payload;
    },
    setWordData: (state, action: PayloadAction<MainStateType["wordData"]>) => {
      state.wordData = action.payload;
    }
  }
});

export default mainSlice.reducer;

export const { reset, setShowHeaderSearch, setSelectedWord, setWordData } = mainSlice.actions;
