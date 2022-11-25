const redux = require('redux');

// This Order is important

// Step 1: Redux store
const createStore = redux.createStore

// Actions 

const CAKE_ORDERED = "CAKE_ORDERED";
// Action created
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

// Reducer
// (previousState , action) =>  newState

const initialState = {
    numberOCake: 10,
    anotherProperty: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOCake: state.numberOCake - 1
            }
        default:
            return state

    }
}

// Step 2: Holds applications state
const store = createStore(reducer)
// Step 3: Allow access to state via getState()
console.log("Initial Store", store.getState())

// Step 4: Register listeners via subscribe(listener)
const unSubscribe = store.subscribe(() => console.log("Updated state", store.getState())) // 7

// Step 5: Allow state to be updated via dispatch(action)

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

// Step 6: Handle unregistered of listeners via the function returned by subscribe(listener)
unSubscribe()