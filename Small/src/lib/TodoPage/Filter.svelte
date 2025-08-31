<script lang="ts">
	let { value = $bindable() } = $props<
		"all" | "completed" | "not completed"
	>();
</script>

<select bind:value class="filter-select">
	<option selected value="all">All</option>
	<option value="completed">Completed</option>
	<option value="not completed">Not Completed</option>
</select>

<style>
	.filter-select {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		background-color: #1e1e2f;
		color: #ddd;
		font-size: 1rem;
		border: none;
		outline: none;
		margin-bottom: 0.55rem;
	}
</style>
