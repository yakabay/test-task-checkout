<template>
	<div>
		<h2 class="title-3xl">Shipping Info</h2>

		<h3 class="title-2xl mb-1">Recipient</h3>
		<el-tooltip 
			:disabled="!errors.contains('fullName')" 
			content="Please enter recepient full name" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-3"
				:class="{'error': errors.contains('fullName')}"
				@input="errors.clearField('fullName')"
				placeholder="Full Name" 
				v-model="shippingData.fullName">
			</el-input>
		</el-tooltip>
		
		<div class="flex items-center mb-10">
			<div class="w-3/5">
				<el-tooltip 
					:disabled="!errors.contains('phoneNumber')" 
					content="Please enter recepient phone number" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': errors.contains('phoneNumber')}"
						@input="errors.clearField('phoneNumber')"
						placeholder="Daytime Phone" 
						v-model="shippingData.phoneNumber">
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
			:disabled="!errors.contains('sreetAddress')" 
			content="Please enter recepient sreet address" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-3"
				:class="{'error': errors.contains('sreetAddress')}"
				@input="errors.clearField('sreetAddress')"
				placeholder="Street Address" 
				v-model="shippingData.sreetAddress">
			</el-input>
		</el-tooltip>
		<el-tooltip 
			:disabled="!errors.contains('addressDetails')" 
			content="Please enter recepient address details" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-6"
				:class="{'error': errors.contains('addressDetails')}"
				@input="errors.clearField('addressDetails')"
				placeholder="Apt, Suite, Bldg, Gate Code: (optional)" 
				v-model="shippingData.addressDetails">
			</el-input>
		</el-tooltip>

		<el-tooltip 
			:disabled="!errors.contains('city')" 
			content="Please enter recepient city" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-6"
				:class="{'error': errors.contains('city')}"
				@input="errors.clearField('city')"
				:suffix-icon=" shippingData.city === '' ? 'target-icon' : 'target-icon opacity-50' " 
				placeholder="City" 
				v-model="shippingData.city">
			</el-input>
		</el-tooltip>
		<div class="flex items-center mb-6">
			<div class="w-3/5">
				<el-tooltip 
					:disabled="!errors.contains('country')" 
					content="Please enter recepient country" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-select
						:class="{'error': errors.contains('country')}"
						@input="errors.clearField('country')"
						v-model="shippingData.country" 
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
					:disabled="!errors.contains('zipCode')" 
					content="Please enter recepient zip code" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': errors.contains('zipCode')}"
						@input="errors.clearField('zipCode')"
						placeholder="ZIP" 
						v-model="shippingData.zipCode">
					</el-input>
				</el-tooltip>
			</div>
		</div>
		<el-button
			@click="tryToContinue">
			Continue
		</el-button>

	</div>
</template>

<script>
import { mapState } from 'vuex'
import { Errors } from '@/helpers'

export default {
	data() {
		return {
			shippingData: {
				fullName: '',
				phoneNumber: '',
				sreetAddress: '',
				addressDetails: '',
				city: '',
				country: '',
				zipCode: '',
			},
			errors: new Errors(),
		}
	},
	computed: {
		...mapState(['countries']),
		tt() {
			return this.errors.test()
		}
	},
	methods: {
		tryToContinue() {
			this.errors.check(this.shippingData)
			if (this.errors.absent()) {
				console.log('Good! No Errors')
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