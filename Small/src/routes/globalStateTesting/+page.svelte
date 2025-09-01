<script>
	import { DisplayComponent, SomeOtherComponent } from "$lib";
</script>

<div>
	<SomeOtherComponent />
	<DisplayComponent />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #ddd;
		font-size: 1.5rem;
	}
</style>
