<script lang="ts">
	import { Input, Filter, List } from "$lib";
	import { browser } from "$app/environment";
	import { type Task } from "./types";

	function initializeTasks(): Task[] {
		if (browser && localStorage.getItem("tasks")) {
			try {
				return JSON.parse(
					localStorage.getItem("tasks")!,
				);
			} catch {
				return [];
			}
		}
		return [];
	}

	function saveTasks() {
		if (browser) {
			localStorage.setItem("tasks", JSON.stringify(tasks));
		}
	}

	function addTask(task: Omit<Task, "id">) {
		const newTask = { ...task, id: Date.now().toString() };
		tasks = [...tasks, newTask];
		saveTasks();
	}

	function deleteTask(e: Event) {
		const element = e.target as HTMLButtonElement;
		const index = +element.dataset.index!;
		tasks = tasks.filter((task) => task.id !== tasks[index].id);
		saveTasks();
	}

	function toggleTaskCompletion(e: Event) {
		const element = e.target as HTMLInputElement;
		const index = +element.dataset.index!;
		tasks[index].completed = !tasks[index].completed;
		saveTasks();
	}

	function editInput(e: Event) {
		const element = e.target as HTMLInputElement;
		const index = +element.dataset.index!;
		tasks[index].title = element.value;
		saveTasks();
	}
	function filterTasks() {
		if (filterValue === "all") {
			return tasks;
		} else if (filterValue === "completed") {
			return tasks.filter((task) => task.completed);
		} else {
			return tasks.filter((task) => !task.completed);
		}
	}

	let tasks = $state<Task[]>(initializeTasks());
	let filterValue = $state<"all" | "completed" | "not completed">("all");
</script>

<dev class="controls">
	<Input {addTask} />
	<Filter bind:value={filterValue} />
</dev>
<List
	bind:tasks
	{editInput}
	{deleteTask}
	{toggleTaskCompletion}
	{filterTasks}
/>

<style>
	.controls {
		max-width: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto 1rem auto;
	}

	@media (max-width: 600px) {
		.controls {
			max-width: 90vw;
			flex-direction: column-reverse;
			gap: 0.5rem;
		}
	}
</style>
