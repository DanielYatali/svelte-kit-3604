<script lang="ts">
	import { Card, Rating, Badge, Progressbar } from 'flowbite-svelte';
	export let rating = '';
	export let image = '';
	export let nutritions: Nutritions[] = [];
	export let name: string = '';

	type Nutritions = {
		name: string;
		value: string;
		color: string;
	};
</script>

<Card padding="none" class="flex items-center text-center w-80 shadow-xl">
	<a href="/">
		<img class="p-8 rounded-t-lg  h-40" src={image} alt="product 1" />
	</a>
	<div class="px-5">
		<a href="/">
			<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
		</a>
		<Rating {rating} size="18" class="m-2.5">
			<Badge slot="text" class="ml-3">{rating}</Badge>
		</Rating>
	</div>
	<div class="grid grid-cols-3 gap-10">
		{#each nutritions as item}
			<div class="my-4 progress">
				<div class="dark:text-white un-progress">
					<p class="font-bold">{item.value} g</p>
					<p>{item.name}</p>
				</div>
				<Progressbar progress={item.value} color={item.color} class="mt-3" />
			</div>
		{/each}
	</div>
</Card>

<style>
	.progress {
		transform: rotate(-90deg);
		-ms-transform: rotate(-90deg); /* IE 9 */
		-webkit-transform: rotate(-90deg);
	}
	.un-progress {
		transform: rotate(90deg);
		-ms-transform: rotate(90deg); /* IE 9 */
		-webkit-transform: rotate(90deg);
	}
</style>
