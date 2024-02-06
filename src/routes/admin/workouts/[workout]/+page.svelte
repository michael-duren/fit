<script lang="ts">
	import type { PageData } from './$types';
	import 'iconify-icon';

	export let data: PageData;
	const workout = data.workout;
	const workoutExercises = data.workoutExercises;
	console.log('DATA', data.workout);
	console.log('DATA', data.workoutExercises);
</script>

<div class="card m-8 p-4">
	<header class="card-header text-2xl font-semibold mb-4">{workout.name}</header>
	<section class="p-4 flex flex-col gap-8">
		{#each workoutExercises as exercise}
			<div class="">
				<h3 class=" text-2xl flex gap-2">
					<a class="" referrerpolicy="no-referrer" target="_blank" href={exercise.videoLink}>
						<iconify-icon icon="ph:video-light" width="32" height="32"></iconify-icon>
					</a>
					<div>{exercise.name}</div>
				</h3>
				<div>
					{exercise.description}
				</div>
			</div>
		{/each}
	</section>
	<footer class="card-footer"></footer>
</div>
