import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const write = createSlice({
    name: "write",

    initialState: {
        writeList: [],
    },

    reducers: {
        insert: (state, action) => {
            return {
                ...state,
                writeList: state.writeList.concat({
                    id: id++,
                    title: action.payload.title,
                    writer: action.payload.writer,
                    content: action.payload.content,
                    date: action.payload.date,
                }),
            };
        },
    },
});

export const { insert } = write.actions;

export default write.reducer;
