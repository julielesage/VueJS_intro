import { createStore } from 'vuex'

export default createStore({
	state: {
		totalCounter: 0
	},
	getters: {
		doubleTotal(state) {
			return state.totalCounter * 2;
		}
	},
	mutations: {
		setTotal(state, value) {
			state.totalCounter = value;
		}
	},
	actions: {
	},
	modules: {
	}
})
