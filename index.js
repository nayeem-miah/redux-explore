// async actions - api calling
// api url -- jsonplaceholder
// middleware
// axios api


// how to work redux in js
// step : 1 ---->state
// step : 2 ---->action
// step : 3 ---->reducer
// step : 4 ---->store

const axios = require("axios");
const { applyMiddleware,createStore } = require("redux");
const { thunk } = require("redux-thunk");




// consts
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todo"
// state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
};
console.log(typeof thunk); // "function" হওয়া উচিত

// actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    };
};
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    };
};

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
};

// reducer ready
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
    
        default:
            return state;
    }
};

//  actions creations
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
            .then((res) => {
                const todos = res.data;
                const titles = todos.map(todo=>todo.title);
                console.log(titles);
                dispatch.getTodosSuccess(titles);
            })
            .catch(err => {
                console.log(err.message);
                dispatch.getTodosFailed(err.message);
            });
    }
};


// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData());
