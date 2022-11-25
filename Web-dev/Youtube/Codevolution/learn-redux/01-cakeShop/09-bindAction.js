// Helper function

const redux = require('redux');

// This Order is important

// Step 1: Redux store
const createStore = redux.createStore


const bindActionCreators = redux.bindActionCreators

// Actions 

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
// Action created
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

// Reducer
// (previousState , action) =>  newState

const initialState = {
    numberOfCake: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCake: state.numberOfCake + action.payload,
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

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(3))

const actions = bindActionCreators({
    orderCake, restockCake
}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

// Step 6: Handle unregistered of listeners via the function returned by subscribe(listener)
unSubscribe()