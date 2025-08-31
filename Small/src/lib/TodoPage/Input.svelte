<script lang="ts">
	let currentTask = $state("");
	let { addTask } = $props();

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (currentTask.trim() === "") return;
		addTask({ title: currentTask, completed: false });
		currentTask = "";
	}
</script>

<form onsubmit={handleSubmit}>
	<div class="input-container">
		<input
			type="text"
			bind:value={currentTask}
			placeholder="Enter taks name"
		/>
		<button type="submit">Add Task</button>
	</div>
</form>

<style>
	form {
		max-width: 400px;
		margin: 2rem auto 2rem auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
		border: none;
		outline: none;
	}
	input:focus {
		border-color: #007bff;
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
	}

	button {
		padding: 0.5rem;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: white;
		font-size: 1rem;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
