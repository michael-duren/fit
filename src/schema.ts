import { pgTable, integer, text, varchar, serial } from 'drizzle-orm/pg-core';

export const exercises = pgTable('Exercises', {
	exerciseId: integer('ExerciseId').primaryKey().notNull(),
	name: text('Name').notNull(),
	videoLink: text('VideoLink').notNull(),
	description: text('Description').notNull(),
	workoutId: integer('WorkoutId').notNull()
});

export const workoutWorkoutTypes = pgTable('WorkoutWorkoutTypes', {
	workoutWorkoutTypeId: integer('WorkoutWorkoutTypeId').primaryKey().notNull(),
	workoutId: integer('WorkoutId').notNull(),
	workoutTypeId: integer('WorkoutTypeId').notNull()
});

export const workouts = pgTable('Workouts', {
	workoutId: integer('WorkoutId').primaryKey().notNull(),
	name: text('Name'),
	workoutDetails: text('WorkoutDetails')
});

export const efMigrationsHistory = pgTable('__EFMigrationsHistory', {
	migrationId: varchar('MigrationId', { length: 150 }).primaryKey().notNull(),
	productVersion: varchar('ProductVersion', { length: 32 }).notNull()
});

export const workoutTypes = pgTable('WorkoutTypes', {
	workoutTypeId: integer('WorkoutTypeId').primaryKey().notNull(),
	workoutTypeName: varchar('WorkoutTypeName', { length: 100 }).notNull()
});

export const individualExercises = pgTable('IndividualExercises', {
	individualExerciseId: serial('IndividualExerciseId').primaryKey().notNull(),
	name: text('Name').notNull(),
	videoLink: text('VideoLink'),
	workoutTypeId: integer('WorkoutTypeId').references(() => workoutTypes.workoutTypeId)
});
