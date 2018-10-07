import Vue from 'vue'
import Vuex from 'vuex'
import data from './initial_data'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		countries: data.countries,
		cartProducts: data.products,
	},
	mutations: {

	},
	actions: {

	}
})
