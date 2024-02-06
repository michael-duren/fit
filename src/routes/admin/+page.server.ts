import { eq } from 'drizzle-orm';
import { db } from '../../hooks.server';
import { workoutWorkoutTypes, workouts } from '../../schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ setHeaders }) => {
	const allWorkouts = await db.select().from(workouts);

	setHeaders({
		'cache-control': 'max-age=604800'
	});

	return {
		workouts: allWorkouts
	};
};
