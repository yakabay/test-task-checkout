<template>
	<div>
		<h2 class="title-3xl">Shipping Info</h2>

		<h3 class="title-2xl mb-1">Recipient</h3>
		<el-input class="mb-3"
			placeholder="Full Name" 
			v-model="fullName"
		></el-input>
		<div class="flex items-center mb-10">
			<div class="w-3/5">
				<el-input
					placeholder="Daytime Phone" 
					v-model="phoneNumber"
				></el-input>
			</div>
			<div class="text-grey-dark leading-none w-2/5 ml-3">
				For delivery
				<br>questions only
			</div>
		</div>

		<h3 class="title-2xl mb-1">Address</h3>
		<el-input class="mb-3"
			placeholder="Streen Address" 
			v-model="addressSreet"
		></el-input>
		<el-input class="mb-6"
			placeholder="Apt, Suite, Bldg, Gate Code: (optional)" 
			v-model="addressDetails"
		></el-input>

		<el-input class="mb-6"
			placeholder="City" 
			v-model="city"
		></el-input>
		<div class="flex items-center mb-6">
			<div class="w-3/5">
				<el-select 
					v-model="country" 
					placeholder="Country"
					filterable
				>
					<el-option
							v-for="item in countries"
							:key="item"
							:label="item"
							:value="item">
					</el-option>
				</el-select>
			</div>
			<div class="w-2/5 ml-6">
				<el-input
					placeholder="ZIP" 
					v-model="zipCode"
				></el-input>
			</div>
		</div>
		 <el-button>Continue</el-button>

	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			fullName: '',
			phoneNumber: '',
			addressSreet: '',
			addressDetails: '',
			city: '',
			country: '',
			zipCode: '',
		}
	},
	computed: {
	...mapState(['countries']),
	}
}
</script>

<style scoped lang="scss">
</style>