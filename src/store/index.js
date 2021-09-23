import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/authSlice';
import counterReducer from '../store/counterSlice';

// NOTE: WE CAN REDUCE CODE FROM THIS FILE TO counterSlice.JS AND authSlice.JS.
// const initialCounterState = { counter: 0, showCounter: true };
// const initialAuthState = { isAuthenticated: false };

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {

//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         },

//     }

// });
// const authSlice = createSlice({
//     name: 'authentication',
//     initialState: initialAuthState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         }
//     }

// });

//NOTE: WE CAN USE CREATESLICE FUNCTION FOR REDUCE IF CONDITIONS.
// const counterFunction = (state = initialstate, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter + 1,
//             showCounter: !state.showCounter
//         };
//     }
//     return state;
// };

const store = configureStore({
    reducer: { counter: counterReducer ,auth:authReducer }
});

export default store;