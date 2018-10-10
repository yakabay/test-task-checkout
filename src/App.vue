<template>
	<div id="app">
		<header class="header">
			<div class="container">
				<div class="row center-xs" style="height: 100%">
					<div class="col-xs-11 col-xl-9" style="height: 100%">
						<div class="header__container" style="height: 100%">
							<router-link to="/">Home</router-link>
							<router-link to="/checkout/shipping">Cart</router-link>
						</div>
					</div>
				</div>
			</div>
			
		</header>

		<main class="container">
			<div class="row center-xs" style="height: 100%; text-align: initial">
				<div class="col-xs-11 col-md-9 col-lg-11 col-xl-9" style="height: 100%">
					<div class="card">
						<router-view/>
					</div>
				</div>
			</div>
		</main>
		
	</div>
</template>

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
	min-height: 100vh;
	background-color: #E6E9EF;

	.title-3xl {
		@apply text-3xl text-primary font-light text-left tracking-tight mb-6;
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
		}
	}
	::placeholder { 
		@apply text-grey-darker;
		opacity: 1;
	}

	@screen lg {
		.title-3xl {
			@apply text-4xl;
		}
		.el-input__inner {
			@apply text-xl;
		}
	}

	.target-icon {
		background-image: url('/img/target.png');
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

.header {
	background: white;
	height: 3.825rem;
	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.card {
	background-color: white;
	margin-top: 3.6rem;
	border-radius: 6px;
	box-shadow: 0px 2px 20px 4px rgba(221,221,221,1);
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
