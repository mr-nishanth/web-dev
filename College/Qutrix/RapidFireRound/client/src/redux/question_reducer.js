import { createSlice } from "@reduxjs/toolkit"

// Create a reducer with initial value
export const questionReducer = createSlice({
    name: "questions",
    initialState: {
        // questions
        queue: [],
        answers: [],
        // no of question
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            return {
                ...state,
                queue: action.payload
            }
        }
    }
})


export const { startExamAction } = questionReducer.actions
export default questionReducer.reducer;