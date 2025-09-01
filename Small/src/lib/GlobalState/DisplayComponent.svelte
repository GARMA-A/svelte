<script>
	import { counter, decrement, increment } from "./store";
</script>

<h1>{$counter}</h1>
<div>
	<button onclick={increment}>+</button>
	<button onclick={decrement}>-</button>
</div>

<style>
	button {
		font-size: 2rem;
		margin: 1rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: #333;
		color: #ddd;
		cursor: pointer;
		transition: background-color 0.3s;
	}
</style>
