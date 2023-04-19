import { createSlice } from '@reduxjs/toolkit';

const askSlice = createSlice({
  name: 'askSlice',
  initialState: {
    id: null,
    name: null,
    title: null,
    titleErrorMsg: null,
    content: null,
    contentErrorMsg: null,
    tags: [],
    tagsErrorMsg: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
      console.log(state.title);
    },
    setTitleErrorMsg: (state, action) => {
      state.titleErrorMsg = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setContentErrorMsg: (state, action) => {
      state.contentErrorMsg = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setTagsErrorMsg: (state, action) => {
      state.tagsErrorMsg = action.payload;
    },
  },
});

export default askSlice;
export const { setName, setTitle, setTitleErrorMsg, setContent, setContentErrorMsg, setTags, setTagsErrorMsg } = askSlice.actions;
