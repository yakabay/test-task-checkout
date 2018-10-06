<template>
  	<div class="oderSummary">
    	<h1>Order summary</h1>
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
	background-color: #F2F4F7;
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