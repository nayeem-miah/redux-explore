const { createStore } = require("redux");
// state --> count : 0
// action --> increment, decrement, reset
// reducer
// store

const INCREMENT = "INCREMENT";                   
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";
// state
const initialCounterState = {
    users  : ["nayeem"],
    count: 0,

};

// action
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
};

const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
};

const resetCounterAction = () => {
    return {
        type: RESET
    }
};

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload : value
    }
}

// reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };
        case INCREMENT_BY_VALUE: 
            return {
                ...state,
                count : state.count  + action.payload
            }
          
    
        default:
            state;
    }
    
};

// store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterByValue(5))


// ---------------------------------------------------

// 1. state
// const initialCounterState = {
//     users  : ["nayeem"],
//     count: 0,
// };
//2. creating action users
const addUser = (user) => {
    return {
        type: ADD_USER, 
        payload : user
    }
}

//3. creating reducer user
const usersReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                count: state.count + 1,
                users: [...state.users, action.payload]
            }
    
        default:
            state;
    }
};

// 4.store
const userStore = createStore(usersReducer);
userStore.subscribe(() => {
    console.log(userStore.getState());
})

userStore.dispatch(addUser("abdul basir"));
userStore.dispatch(addUser("Bakiya"));