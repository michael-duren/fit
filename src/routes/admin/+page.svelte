<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const workouts = data.workouts;
	console.log(data);
</script>

<div class="flex flex-wrap gap-8 m-8">
	{#each workouts as workout}
		<div class="card flex-col justify-between flex h-48 w-48">
			<div class="">
				<div class="card-header">
					<h2 class="text-lg">{workout.name}</h2>
				</div>
				<div class="p-4 text-sm">{workout.workoutDetails ? workout.workoutDetails : ''}</div>
			</div>
			<div class="card-footer flex justify-end">
				<a href="/admin/workouts/{workout.workoutId}" class="btn variant-filled"> View </a>
			</div>
		</div>
	{/each}
</div>
