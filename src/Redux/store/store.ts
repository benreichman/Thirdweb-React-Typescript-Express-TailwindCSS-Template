import { createStore, combineReducers } from 'redux';

// Define the shape of the state
interface AppState {
    count: number;
}

// Define the initial state
const initialState: AppState = {
    count: 0,
};

// Define the actions that can be dispatched
interface IncrementAction {
    type: 'INCREMENT';
}

interface DecrementAction {
    type: 'DECREMENT';
}

type CountActions = IncrementAction | DecrementAction;

// Define the reducers
function countReducer(state: number = 0, action: CountActions): number {

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const rootReducer = combineReducers<AppState>(
    {
        count: countReducer,
    }
);

// Create the store
const store = createStore(rootReducer, initialState);



export default store;
