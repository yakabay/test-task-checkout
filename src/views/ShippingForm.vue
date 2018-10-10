<template>
	<div>
		<h2 class="title-3xl">Shipping Info</h2>

		<h3 class="title-2xl mb-1">Recipient</h3>
		<el-tooltip 
			:disabled="!shippingErrors.contains('fullName')" 
			content="Please enter recepient full name" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-3"
				:class="{'error': shippingErrors.contains('fullName')}"
				@input="shippingErrors.clearField('fullName')"
				placeholder="Full Name" 
				v-model="fullName">
			</el-input>
		</el-tooltip>
		
		<div class="flex items-center mb-10">
			<div class="w-3/5">
				<el-tooltip 
					:disabled="!shippingErrors.contains('phoneNumber')" 
					content="Please enter recepient phone number" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': shippingErrors.contains('phoneNumber')}"
						@input="shippingErrors.clearField('phoneNumber')"
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
			:disabled="!shippingErrors.contains('streetAddress')" 
			content="Please enter recepient sreet address" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-3"
				:class="{'error': shippingErrors.contains('streetAddress')}"
				@input="shippingErrors.clearField('streetAddress')"
				placeholder="Street Address" 
				v-model="streetAddress">
			</el-input>
		</el-tooltip>
		<el-tooltip 
			:disabled="!shippingErrors.contains('addressDetails')" 
			content="Please enter recepient address details" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-6"
				:class="{'error': shippingErrors.contains('addressDetails')}"
				@input="shippingErrors.clearField('addressDetails')"
				placeholder="Apt, Suite, Bldg, Gate Code: (optional)" 
				v-model="addressDetails">
			</el-input>
		</el-tooltip>

		<el-tooltip 
			:disabled="!shippingErrors.contains('city')" 
			content="Please enter recepient city" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-6"
				:class="{'error': shippingErrors.contains('city')}"
				@input="shippingErrors.clearField('city')"
				:suffix-icon=" city === '' ? 'target-icon' : 'target-icon opacity-50' " 
				placeholder="City" 
				v-model="city">
			</el-input>
		</el-tooltip>
		<div class="flex items-center mb-6">
			<div class="w-3/5">
				<el-tooltip 
					:disabled="!shippingErrors.contains('country')" 
					content="Please enter recepient country" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-select
						:class="{'error': shippingErrors.contains('country')}"
						@input="shippingErrors.clearField('country')"
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
					:disabled="!shippingErrors.contains('zipCode')" 
					content="Please enter recepient zip code" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': shippingErrors.contains('zipCode')}"
						@input="shippingErrors.clearField('zipCode')"
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
		...mapState(['countries', 'shippingData', 'shippingErrors',]),
		fullName: {
			get() { return this.$store.state.shippingData.fullName },
			set(value) { this.updateShippingDataFullName(value) }
		},
		phoneNumber: {
			get() { return this.$store.state.shippingData.phoneNumber },
			set(value) { this.updateShippingDataPhoneNumber(value) }
		},
		streetAddress: {
			get() { return this.$store.state.shippingData.streetAddress },
			set(value) { this.updateShippingDataStreetAddress(value) }
		},
		addressDetails: {
			get() { return this.$store.state.shippingData.addressDetails },
			set(value) { this.updateShippingDataAddressDetails(value) }
		},
		city: {
			get() { return this.$store.state.shippingData.city },
			set(value) { this.updateShippingDataCity(value) }
		},
		country: {
			get() { return this.$store.state.shippingData.country },
			set(value) { this.updateShippingDataCountry(value) }
		},
		zipCode: {
			get() { return this.$store.state.shippingData.zipCode },
			set(value) { this.updateShippingDataZipCode(value) }
		},
	},
	methods: {
		...mapMutations([
			'updateShippingDataFullName',
			'updateShippingDataPhoneNumber',
			'updateShippingDataStreetAddress',
			'updateShippingDataAddressDetails',
			'updateShippingDataCity',
			'updateShippingDataCountry',
			'updateShippingDataZipCode',
		]),
		...mapActions(['checkShippingErrors']),
		validateFormAndContinue() {
			this.checkShippingErrors()
			if (this.shippingErrors.absent()) {
				this.$router.push({ path: '/checkout/billing' })
			}
		}
	}
}
</script>

<style lang="scss">
.target-icon {
	background-image: url('/img/target.png');
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	height: 1.7rem;
	top: 12px;
	right: 9px;
}
</style>