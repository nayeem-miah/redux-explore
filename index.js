// product reducers
const { createStore, combineReducers } = require("redux");
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
// const store = createStore(productReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });
// store.dispatch(getProducts());
// store.dispatch(addProducts("potato"))


// ------------------------------------------------
// cart reduces

const GET_CART_ITEM = "GET_CART_ITEM";
const ADD_CART_ITEM = "ADD_CART_ITEM"; 

// initial cart
const initialCarts = {
    carts: ["umbrella", "pen"],
    numberOfCarts : 2
}

// cart counter
const getCarts = () => {
    return {
        type: GET_CART_ITEM
    }
};

const addCarts = (cart) => {
    return {
        type: ADD_CART_ITEM,
        payload: cart
    }
};

// creating reducer
const cartReducer = (state = initialCarts, action) => {
    switch (action.type){
        case GET_CART_ITEM:
            return {
                ...state
            };
        case ADD_CART_ITEM:
            return {
                carts: [...state.carts, action.payload],
                numberOfCarts: state.numberOfCarts + 1
            };

        default:
         return state
    }
}

// store
// const cartStore = createStore(cartReducer);
// cartStore.subscribe(() => {
//     console.log(cartStore.getState());
// });

// cartStore.dispatch(getCarts());
// cartStore.dispatch(addCarts("mobile"));

// combineReducers -----------------------------------------
const rootReducer = combineReducers({
    productR: productReducer,
    cartR : cartReducer
})

const combineStore = createStore(rootReducer);
combineStore.subscribe(() => {
    console.log(combineStore.getState());
});

combineStore.dispatch(getCarts())
combineStore.dispatch(addCarts("orange"));

combineStore.dispatch(getCarts());
combineStore.dispatch(addProducts("laptop"));
