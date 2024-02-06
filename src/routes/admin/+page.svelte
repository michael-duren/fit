<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const workouts = data.workouts;
</script>

<div class="flex flex-wrap gap-8 m-8">
	{#each workouts as workout}
		<div class="card flex-col justify-between flex h-48 w-48">
			<div class="">
				<h2 class="text-lg">{workout.name}</h2>
				<div>
					<!-- {#each workout.workoutTypes as workoutType}
						<div>{workoutType.workoutTypeName}</div>
					{/each} -->
				</div>
				<div class="p-4 text-sm">{workout.workoutDetails ? workout.workoutDetails : ''}</div>
			</div>
			<div class="card-footer flex justify-end">
				<a href="/admin/workouts/{workout.workoutId}" class="btn variant-filled"> View </a>
			</div>
		</div>
	{/each}
</div>
