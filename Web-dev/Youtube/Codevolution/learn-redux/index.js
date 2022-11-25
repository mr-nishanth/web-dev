// Actions 

const CAKE_ORDERED = "CAKE_ORDERED";

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

const reducers = (state = initialState, action) => {
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

