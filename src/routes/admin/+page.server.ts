import { db } from '../../hooks.server';
import { exercises, workouts, type Exercise } from '../../schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const workout = await db.select().from(workouts);

	return {
		workouts: workout
	};
};
