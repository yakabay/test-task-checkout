import Vue from 'vue'
import Vuex from 'vuex'
import data from './initial_data'
import { Errors } from '@/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		countries: data.countries,
		cartProducts: data.products,
		shippingData: {
			fullName: '',
			phoneNumber: '',
			streetAddress: '',
			addressDetails: '',
			city: '',
			country: '',
			zipCode: '',
		},
		shippingErrors: new Errors(),
		billingErrors: new Errors(),
	},
	getters: {
		allShippingFieldsAreFilled(state) {
			for (let prop in state.shippingData) {
				let trimmedValue = state.shippingData[prop].trim()
				if (trimmedValue == '') {
					return false;
				}
			}
			return true;
		}
	},
	mutations: {
		updateShippingDataFullName(state, value) { state.shippingData = {...state.shippingData, fullName: value} },
		updateShippingDataPhoneNumber(state, value) { state.shippingData = {...state.shippingData, phoneNumber: value} },
		updateShippingDataStreetAddress(state, value) { state.shippingData = {...state.shippingData, streetAddress: value} },
		updateShippingDataAddressDetails(state, value) { state.shippingData = {...state.shippingData, addressDetails: value} },
		updateShippingDataCity(state, value) { state.shippingData = {...state.shippingData, city: value} },
		updateShippingDataCountry(state, value) { state.shippingData = {...state.shippingData, country: value} },
		updateShippingDataZipCode(state, value) { state.shippingData = {...state.shippingData, zipCode: value} },
	},
	actions: {
		checkShippingErrors({ state }) {
			state.shippingErrors.check(state.shippingData)
		}
	}
})
