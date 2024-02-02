-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "Exercises" (
	"ExerciseId" integer PRIMARY KEY NOT NULL,
	"Name" text NOT NULL,
	"VideoLink" text NOT NULL,
	"Description" text NOT NULL,
	"WorkoutId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "WorkoutWorkoutTypes" (
	"WorkoutWorkoutTypeId" integer PRIMARY KEY NOT NULL,
	"WorkoutId" integer NOT NULL,
	"WorkoutTypeId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Workouts" (
	"WorkoutId" integer PRIMARY KEY NOT NULL,
	"Name" text,
	"WorkoutDetails" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
	"MigrationId" varchar(150) PRIMARY KEY NOT NULL,
	"ProductVersion" varchar(32) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "WorkoutTypes" (
	"WorkoutTypeId" integer PRIMARY KEY NOT NULL,
	"WorkoutTypeName" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "IndividualExercises" (
	"IndividualExerciseId" serial PRIMARY KEY NOT NULL,
	"Name" text NOT NULL,
	"VideoLink" text,
	"WorkoutTypeId" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "IndividualExercises" ADD CONSTRAINT "IndividualExercises_WorkoutTypeId_fkey" FOREIGN KEY ("WorkoutTypeId") REFERENCES "public"."WorkoutTypes"("WorkoutTypeId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/