// product reducers
const { createStore , applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");
// products constance
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
// 1. init state
const initialProducts = {
    products: ["sugar", "salt"],
    numberOfProduct: 2
};

// 2.product counter
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
};

const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload : product    
    }
}

// creating reducer 
const productReducer = (state= initialProducts, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            };
        default:
            return state
    }
}

// store creating
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(getProducts())

