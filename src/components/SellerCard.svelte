<script lang="ts">
	import { Avatar, Card, Rating, Badge } from 'flowbite-svelte';
	export let rating: string = '';
	export let image: string = '';
	export let desciption: string = '';
	export let name: string = '';
	export let role: string = '';
</script>

<Card padding="none" class="w-80 text-center shadow-xl">
	<div class="flex flex-col items-center p-4">
		<Avatar size="xl" src={image} />
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
		<span class="text-sm text-gray-500 dark:text-gray-400">{role}</span>
		<Rating {rating} size="18" class="m-2.5">
			<Badge slot="text" class="ml-3">{rating}</Badge>
		</Rating>
		<div class="flex space-x-3">
			<p>{desciption}</p>
		</div>
	</div>
</Card>
