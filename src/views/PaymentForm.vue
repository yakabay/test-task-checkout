<template>
	<div>
		<h2 class="title-3xl">Payment</h2>

		<h3 class="title-2xl mb-1">Cardholder name</h3>
		<el-tooltip 
			:disabled="!paymentErrors.contains('cardholderName')" 
			content="Please enter recepient cardholder name" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-8"
				:class="{'error': paymentErrors.contains('cardholderName')}"
				@input="paymentErrors.clearField('cardholderName')"
				placeholder="Name as it appears on your card" 
				v-model="cardholderName">
			</el-input>
		</el-tooltip>

		<h3 class="title-2xl mb-1">Card number</h3>
		<el-tooltip 
			:disabled="!paymentErrors.contains('cardNumber')" 
			content="Please enter recepient card number" 
			placement="top-start" 
			effect="light"
			:open-delay=500>
			<el-input class="mb-8"
				:class="{'error': paymentErrors.contains('cardNumber')}"
				@input="paymentErrors.clearField('cardNumber')"
				placeholder="XXXX XXXX XXXX XXXX" 
				v-model="cardNumber">
			</el-input>
		</el-tooltip>


		<div class="flex items-center mb-10">
			<div class="w-32">
				<h3 class="title-2xl mb-1">Expire date</h3>
				<el-tooltip 
					:disabled="!paymentErrors.contains('expireDate')" 
					content="Please enter recepient expireDate" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': paymentErrors.contains('expireDate')}"
						@input="paymentErrors.clearField('expireDate')"
						placeholder="MM/YY" 
						v-model="expireDate">
					</el-input>
				</el-tooltip>
			</div>
			<div class="w-32 ml-6">
				<h3 class="title-2xl mb-1">Security code</h3>
				<el-tooltip 
					:disabled="!paymentErrors.contains('securityCode')" 
					content="Please enter recepient security code" 
					placement="top-start" 
					effect="light"
					:open-delay=500>
					<el-input
						:class="{'error': paymentErrors.contains('securityCode')}"
						@input="paymentErrors.clearField('securityCode')"
						v-model="securityCode">
					</el-input>
				</el-tooltip>
			</div>
		</div>

		<el-button
			@click="validateFormAndContinue">
			Pay Securely
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
		...mapState(['paymentData', 'paymentErrors',]),
		cardholderName: {
			get() { return this.$store.state.paymentData.cardholderName },
			set(value) { this.updatePaymentDataCardholderName(value) }
		},
		cardNumber: {
			get() { return this.$store.state.paymentData.cardNumber },
			set(value) { this.updatePaymentDataCardNumber(value) }
		},
		expireDate: {
			get() { return this.$store.state.paymentData.expireDate },
			set(value) { this.updatePaymentDataExpireDate(value) }
		},
		securityCode: {
			get() { return this.$store.state.paymentData.securityCode },
			set(value) { this.updatePaymentDataSecurityCode(value) }
		},
	},
	methods: {
		...mapMutations([
			'updatePaymentDataCardholderName',
			'updatePaymentDataCardNumber',
			'updatePaymentDataExpireDate',
			'updatePaymentDataSecurityCode',
		]),
		...mapActions(['checkPaymentErrors']),
		validateFormAndContinue() {
			this.checkPaymentErrors()
			if (this.paymentErrors.absent()) {
				this.$router.push({ path: '/thanks' })
			}
		}
	}
}
</script>

<style lang="scss">
</style>