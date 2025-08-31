<script lang="ts">
	import { type Task } from "./types";
	let {
		tasks = $bindable<Task[]>(),
		editInput,
		deleteTask,
		toggleTaskCompletion,
		filterTasks,
	} = $props();

	let filteredTasks: Task[] = $derived(filterTasks());
</script>

{#if tasks.length === 0}
	<p class="empty-state">No tasks yet.</p>
{:else}
	<ul class="task-list">
		{#each filteredTasks as task, i (task.id)}
			<li class="task-item">
				<div class="task-info">
					<input
						class="task-checkbox"
						type="checkbox"
						checked={task.completed}
						onchange={toggleTaskCompletion}
						data-index={i}
					/>
					<input
						class={task.completed
							? "completed"
							: ""}
						value={task.title}
						readonly={!task.editable}
						ondblclick={() =>
							(task.editable = true)}
						onblur={() =>
							(task.editable = false)}
						onkeydown={(e) => {
							if (e.key === "Enter") {
								task.editable = false;
							}
						}}
						oninput={editInput}
						data-index={i}
					/>
				</div>
				<button
					onclick={deleteTask}
					class="delete-button"
					data-index={i}
				>
					Delete
				</button>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.task-item {
		margin: 0.5rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.task-info {
		display: flex;
		align-items: center;

		gap: 0.5rem;
	}
	input {
		border: none;
		outline: none;
		cursor: default;
	}
</style>
