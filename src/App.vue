<template>
	<div id="app">
		<header class="header">
			<div class="container">
				<div class="row center-xs" style="height: 100%">
					<div class="col-xs-11 col-xl-9" style="height: 100%">
						<div class="header__container" style="height: 100%">
							<router-link to="/">Home</router-link>
							<router-link to="/checkout">Cart</router-link>
						</div>
					</div>
				</div>
			</div>
			
		</header>

		<main class="container">
			<div class="row center-xs" style="height: 100%">
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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-height: 100vh;
	background-color: #E6E9EF;
	color: #2c3e50;
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
