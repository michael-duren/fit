import { eq } from 'drizzle-orm';
import { db } from '../../hooks.server';
import {
	workoutTypes,
	workoutWorkoutTypes,
	workouts,
	type Workout,
	type WorkoutType
} from '../../schema';
import type { PageServerLoad } from './$types';

type WorkoutDto = Workout & {
	workoutTypes: WorkoutType[];
};

export const load: PageServerLoad = async ({ setHeaders }) => {
	const allWorkouts = await db.select().from(workouts);
	const allWorkoutTypes = await db.select().from(workoutTypes);

	let workoutsWithTypes: WorkoutDto[] = [];
	for (let workout of allWorkouts) {
		const joinTable = await db
			.select()
			.from(workoutWorkoutTypes)
			.where(eq(workoutWorkoutTypes.workoutTypeId, workout.workoutId));
		workoutsWithTypes.push({
			...workout,
			workoutTypes: allWorkoutTypes.filter((at) =>
				joinTable.map((jt) => jt.workoutTypeId).includes(at.workoutTypeId)
			)
		});
	}

	setHeaders({
		'cache-control': 'max-age=604800'
	});

	return {
		workouts: workoutsWithTypes
	};
};
