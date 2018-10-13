<template>
	<div>
		<div class="flex justify-between pt-2 pb-1">
			<div class="flex">
				<div class="border border-grey-lighter rounded" style="width: 3.6rem; height: 3.6rem;">
					<img :src="require(`@/assets${product.img_url}`)" alt="">
				</div>
				<div class="ml-3">
					<div class="text-md text-grey-dark pt-px pb-1">{{ product.name }}</div>
					<div class="text-sm text-grey-darkest">{{ product.desc }}</div>
					<div class="text-sm text-grey-darkest">Quantity: {{ product.quantity }}</div>
				</div>
			</div>
			<div class="text-md text-grey-dark pt-px pl-2">${{ product.price }}</div>
		</div>
		<hr class="border-t border-grey-lighter -ml-2 -mr-1">
	</div>
</template>

<script>
export default {
	props: ['product'],
}
</script>

<style lang="scss">
.checkout {
	display: block;
}
@media only screen and (min-width: 992px) {
	.checkout {
		display: flex;
		flex-direction: row-reverse;
	}
}
</style>