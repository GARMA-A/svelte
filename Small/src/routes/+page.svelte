<script lang="ts">
	import { Todo } from "$lib";

	$effect(() => {
		document.title = "Todo App";
	});
</script>

<Todo />
