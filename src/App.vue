<template>
	<div id="app">
		<header class="bg-white fixed w-full z-10" style="height: 3.825rem;">
			<div class="container">
				<div class="row center-xs" style="height: 100%">
					<div class="col-xs-11 col-xl-9" style="height: 100%">
						<div class="flex justify-between items-center" style="height: 100%">
							<router-link to="/" class="flex items-center">
								<img src="@/assets/img/t-logo.png" alt="logo" class="h-8">
								<span class="text-2xl text-primary font-thin pl-3 pt-1">Front-end Developer Test Task</span>
							</router-link>
							<router-link to="/checkout/shipping" class="flex items-center">
								<span class="text-pink-dark text-xl pr-1">cart</span>
								<cart-icon/>
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<div class="gradient"></div>
		</header>
		
		<main>
			<div class="container">
				<div class="row center-xs" style="height: 100%; text-align: initial">
					<div class="col-xs-11 col-md-9 col-lg-11 col-xl-9" style="height: 100%">
						<div class="relative">
							<transition name="el-fade-in-linear">
								<router-view class="card absolute"/>
							</transition>
						</div>
					</div>
				</div>
			</div>
		</main>
		
	</div>
</template>

<script>
import CartIcon from '@/components/CartIcon.vue'

export default {
	components: {
		'cart-icon': CartIcon,
	},
}
</script>

<style lang="scss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;
@tailwind screens;

body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	.title-3xl {
		@apply text-3xl text-primary font-light tracking-tight mb-6;
	}
	.title-2xl {
		@apply text-primary text-2xl font-normal tracking-tight;
	}
	.el-input {
		&__inner {
			@apply block border border-grey-lighter rounded text-lg text-grey-darkest w-full px-4 py-2 h-auto outline-none;
			line-height: 1.6;
			&:focus {
				@apply shadow-plain;
			}
		}
	}
	.error {
		.el-input__inner {
			@apply bg-yellow-lightest;
		}
	}
	.el-select {
		width: 100%;
	}
	.el-button {
		@apply border rounded bg-purple border-purple-darker text-xl text-center text-white font-semibold px-2 py-4;
		width: 14.2rem;
		&:focus {
			outline: none;
		}
		&--default {
			@apply bg-purple border-purple-darker;
			&:hover {
				@apply bg-purple-light border-purple;
			}
			transition: background-color .3s ease;
		}
	}
	::placeholder { 
		@apply text-grey-darker;
		opacity: 1;
	}

	.shipping-form, .billing-form {
		height: 580px;
	}
	.payment-form {
		height: 439px;
	}
	@screen lg {
		.title-3xl {
			@apply text-4xl;
		}
		.el-input__inner {
			@apply text-xl;
		}
		.shipping-form, .billing-form {
			height: 608px;
		}
		.payment-form {
			height: 455px;
		}
	}

	.target-icon {
		background-image: url('./assets/img/target.png'); 
		background-repeat: no-repeat;
		background-size: contain;
		position: absolute;
		height: 1.7rem;
		top: 12px;
		right: 9px;
	}
}


.el-select-dropdown {
	.el-select-dropdown__item {
		@apply text-grey-dark text-lg font-light;
		&.selected {
			@apply text-grey-dark font-medium;
		}
	}
}
@screen lg {
	.el-select-dropdown {
		.el-select-dropdown__item {
			@apply text-xl;
		}
	}
}
.el-tooltip__popper.is-light {
	@apply text-md text-red shadow;
	border: 1px solid #DEDCDC !important;
	.popper__arrow {
		@apply border-none shadow;
		border: 1px solid #DEDCDC !important;
	}
}

a {
	text-decoration: none;
}

.gradient {
	height: 1px;
	background: rgba(235,182,232,1);
	background: linear-gradient(to right, rgba(235,182,232,1) 0%, rgba(255,186,214,1) 48%, rgba(217,178,249,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ebb6e8', endColorstr='#d9b2f9', GradientType=1 );
}

.card {
	width: 100%;
	background-color: white;
	margin-top: 7.425rem;
	margin-bottom: 3.6rem;
	border-radius: 6px;
	box-shadow: 0px 2px 20px 4px rgba(221,221,221,1);
}
main {
	height: 100vh;
	width: 100vw;
	overflow: auto;
	position: fixed;
	background-color: #E6E9EF;
}
/* Scroll Appearance */
::-webkit-scrollbar {
			display: block;
			width: 6px;
}

/* Scroll Track */
::-webkit-scrollbar-track {
			background: rgb(235, 241, 243); 
}

/* Scroll Handle */
::-webkit-scrollbar-thumb {
			background: #888; 
}

.container {
	height: 100%;
	max-width: 100%;
}	
@media only screen and (min-width: 576px) {
	.container {
		width: 560px;
	}
}
@media only screen and (min-width: 768px) {
	.container {
		width: 752px;
	}
}
@media only screen and (min-width: 992px) {
	.container {
		width: 976px;
	}
}
@media only screen and (min-width: 1200px) {
	.container {
		width: 1184px;
	}
}
</style>
