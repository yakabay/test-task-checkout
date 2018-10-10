<template>
	<div>
		<h2 class="title-3xl">Billing Info</h2>

		<h3 class="title-2xl mb-1">Recipient</h3>
		<el-tooltip 
			:disabled="!billingErrors.contains('fullName')" 
			content="Please enter recepient full name" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-3"
				:class="{'error': billingErrors.contains('fullName')}"
				@input="billingErrors.clearField('fullName')"
				placeholder="Full Name" 
				v-model="fullName">
			</el-input>
		</el-tooltip>
		
		<div class="flex items-center mb-10">
			<div class="w-3/5">
				<el-tooltip 
					:disabled="!billingErrors.contains('phoneNumber')" 
					content="Please enter recepient phone number" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': billingErrors.contains('phoneNumber')}"
						@input="billingErrors.clearField('phoneNumber')"
						placeholder="Daytime Phone" 
						v-model="phoneNumber">
					</el-input>
				</el-tooltip>
			</div>
			<div class="text-grey-dark leading-none w-2/5 ml-3">
				For delivery
				<br>questions only
			</div>
		</div>

		<h3 class="title-2xl mb-1">Address</h3>
		<el-tooltip 
			:disabled="!billingErrors.contains('streetAddress')" 
			content="Please enter recepient sreet address" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-3"
				:class="{'error': billingErrors.contains('streetAddress')}"
				@input="billingErrors.clearField('streetAddress')"
				placeholder="Street Address" 
				v-model="streetAddress">
			</el-input>
		</el-tooltip>
		<el-tooltip 
			:disabled="!billingErrors.contains('addressDetails')" 
			content="Please enter recepient address details" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-6"
				:class="{'error': billingErrors.contains('addressDetails')}"
				@input="billingErrors.clearField('addressDetails')"
				placeholder="Apt, Suite, Bldg, Gate Code: (optional)" 
				v-model="addressDetails">
			</el-input>
		</el-tooltip>

		<el-tooltip 
			:disabled="!billingErrors.contains('city')" 
			content="Please enter recepient city" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-6"
				:class="{'error': billingErrors.contains('city')}"
				@input="billingErrors.clearField('city')"
				:suffix-icon=" city === '' ? 'target-icon' : 'target-icon opacity-50' " 
				placeholder="City" 
				v-model="city">
			</el-input>
		</el-tooltip>
		<div class="flex items-center mb-6">
			<div class="w-3/5">
				<el-tooltip 
					:disabled="!billingErrors.contains('country')" 
					content="Please enter recepient country" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-select
						:class="{'error': billingErrors.contains('country')}"
						@input="billingErrors.clearField('country')"
						v-model="country" 
						placeholder="Country"
						filterable>
						<el-option
								v-for="item in countries"
								:key="item"
								:label="item"
								:value="item">
						</el-option>
					</el-select>
				</el-tooltip>
			</div>
			<div class="w-2/5 ml-6">
				<el-tooltip 
					:disabled="!billingErrors.contains('zipCode')" 
					content="Please enter recepient zip code" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': billingErrors.contains('zipCode')}"
						@input="billingErrors.clearField('zipCode')"
						placeholder="ZIP" 
						v-model="zipCode">
					</el-input>
				</el-tooltip>
			</div>
		</div>
		<el-button
			@click="validateFormAndContinue">
			Continue
		</el-button>

	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
	data() {
		return {
		}
	},
	computed: {
		...mapState(['countries', 'billingData', 'billingErrors',]),
		fullName: {
			get() { return this.$store.state.billingData.fullName },
			set(value) { this.updateBillingDataFullName(value) }
		},
		phoneNumber: {
			get() { return this.$store.state.billingData.phoneNumber },
			set(value) { this.updateBillingDataPhoneNumber(value) }
		},
		streetAddress: {
			get() { return this.$store.state.billingData.streetAddress },
			set(value) { this.updateBillingDataStreetAddress(value) }
		},
		addressDetails: {
			get() { return this.$store.state.billingData.addressDetails },
			set(value) { this.updateBillingDataAddressDetails(value) }
		},
		city: {
			get() { return this.$store.state.billingData.city },
			set(value) { this.updateBillingDataCity(value) }
		},
		country: {
			get() { return this.$store.state.billingData.country },
			set(value) { this.updateBillingDataCountry(value) }
		},
		zipCode: {
			get() { return this.$store.state.billingData.zipCode },
			set(value) { this.updateBillingDataZipCode(value) }
		},
	},
	methods: {
		...mapMutations([
			'updateBillingDataFullName',
			'updateBillingDataPhoneNumber',
			'updateBillingDataStreetAddress',
			'updateBillingDataAddressDetails',
			'updateBillingDataCity',
			'updateBillingDataCountry',
			'updateBillingDataZipCode',
		]),
		...mapActions(['checkBillingErrors']),
		validateFormAndContinue() {
			this.checkBillingErrors()
			if (this.billingErrors.absent()) {
				this.$router.push({ path: '/checkout/payment' })
			}
		}
	}
}
</script>

<style lang="scss">
</style>