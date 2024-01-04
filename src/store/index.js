import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
	count: 0,
	show: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
		increase(state, action) {
			state.count += action.payload.amount;
		},
		toggleCounter(state) {
			state.show = !state.show;
		},
	},
});

const initialAuthState = { isAuth: false };

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuth = true;
		},
		logout(state) {
			state.isAuth = false;
		},
	},
});

// const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'increment':
// 			return {
// 				count: state.count + 1,
// 				show: state.show,
// 			};

// 		case 'decrement':
// 			return {
// 				count: state.count - 1,
// 				show: state.show,
// 			};

// 		case 'increase':
// 			return {
// 				count: state.count + action.value,
// 				show: state.show,
// 			};

// 		case 'toggle':
// 			return {
// 				count: state.count,
// 				show: !state.show,
// 			};

// 		default: {
// 			return state;
// 		}
// 	}
// };

// const store = createStore(counterReducer);

const actions = counterSlice.actions;
const authActions = authSlice.actions;

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});

export { actions, authActions };

export default store;
