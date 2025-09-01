<script>
	import "../app.css";
</script>

<div class="app">
	<nav class="nav-bar">
		<a href="/">Home</a>
		<a href="/globalStateTesting">Global State Testing</a>
	</nav>
	<div class=" app-container">
		<slot />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		overflow-x: hidden;
	}
	.nav-bar {
		display: flex;
		justify-content: space-around;
		margin-bottom: 2rem;
		font-size: 1.5rem;
		background-image: linear-gradient(
			to right,
			#000000,
			#060017,
			#060017,
			#000000,
			#060017,
			#060017,
			#000000
		);
		width: 100vw;
		color: #ddd;
	}
	.app-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media (max-width: 600px) {
		.app-container {
			width: 90vw;
			top: 2rem;
		}
	}
</style>
