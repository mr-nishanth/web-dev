// create center store

import { combineReducers, configureStore } from "@reduxjs/toolkit"


// using combineReducers to create two different reducer and maintain individually
// Call Reducers
import { questionReducer } from "./question_reducer"
import { resultReducer } from "./result_reducer"

const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer
})

// create a store with reducer

export default configureStore({
    reducer: rootReducer
})
