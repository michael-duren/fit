import { eq } from 'drizzle-orm';
import { db } from '../../../../hooks.server';
import { workouts, exercises, type Exercise } from '../../../../schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const workoutId = params.workout;
	const workout = await db.select().from(workouts).where(eq(workouts.workoutId, +workoutId));
	const workoutExercises: Exercise[] = await db
		.select()
		.from(exercises)
		.where(eq(exercises.workoutId, +workoutId));

	return {
		workout: workout[0],
		workoutExercises
	};
};
