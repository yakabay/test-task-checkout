<template>
  	<div class="oderSummary bg-grey-lightest pt-7 px-4 sm:px-12 lg:px-4">
		<div class="flex justify-between items-baseline">
			<h3 class="text-primary font-normal tracking-tight" style="font-size: 1.4rem">Order summary</h3>
			<a href="#" class="text-md text-grey underline">edit order</a>
		</div>
  	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'Summary',
		}
	},
}
</script>

<style scoped lang="scss">
.oderSummary {
	border-top-right-radius: 5px;
	border-top-left-radius: 5px;
}
@media only screen and (min-width: 992px) {
	.oderSummary {
		width: 43%;
		border-top-left-radius: 0;
		border-bottom-right-radius: 5px;
	}
}
</style>