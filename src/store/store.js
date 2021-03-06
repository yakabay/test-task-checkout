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
		billingData: {
			fullName: '',
			phoneNumber: '',
			streetAddress: '',
			addressDetails: '',
			city: '',
			country: '',
			zipCode: '',
		},
		paymentData: {
			cardholderName: '',
			cardNumber: '',
			expireDate: '',
			securityCode: '',
		},
		shippingErrors: new Errors(),
		billingErrors: new Errors(),
		paymentErrors: new Errors(),
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
		},
		allBillingFieldsAreFilled(state) {
			for (let prop in state.billingData) {
				let trimmedValue = state.billingData[prop].trim()
				if (trimmedValue == '') {
					return false;
				}
			}
			return true;
		},
		countOfCartProducts(state) {
			return state.cartProducts.length
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
		
		updateBillingDataFullName(state, value) { state.billingData = {...state.billingData, fullName: value} },
		updateBillingDataPhoneNumber(state, value) { state.billingData = {...state.billingData, phoneNumber: value} },
		updateBillingDataStreetAddress(state, value) { state.billingData = {...state.billingData, streetAddress: value} },
		updateBillingDataAddressDetails(state, value) { state.billingData = {...state.billingData, addressDetails: value} },
		updateBillingDataCity(state, value) { state.billingData = {...state.billingData, city: value} },
		updateBillingDataCountry(state, value) { state.billingData = {...state.billingData, country: value} },
		updateBillingDataZipCode(state, value) { state.billingData = {...state.billingData, zipCode: value} },
		
		updatePaymentDataCardholderName(state, value) { state.paymentData = {...state.paymentData, cardholderName: value} },
		updatePaymentDataCardNumber(state, value) { state.paymentData = {...state.paymentData, cardNumber: value} },
		updatePaymentDataExpireDate(state, value) { state.paymentData = {...state.paymentData, expireDate: value} },
		updatePaymentDataSecurityCode(state, value) { state.paymentData = {...state.paymentData, securityCode: value} },
	},
	actions: {
		checkShippingErrors({ state }) {
			state.shippingErrors.check(state.shippingData)
		},
		checkBillingErrors({ state }) {
			state.billingErrors.check(state.billingData)
		},
		checkPaymentErrors({ state }) {
			state.paymentErrors.check(state.paymentData)
		}
	}
})
