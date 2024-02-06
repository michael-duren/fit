import { Pool, neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { CONNECTION_STRING } from '$env/static/private';

neonConfig.fetchConnectionCache = true;

export const pool = new Pool({ connectionString: CONNECTION_STRING });
export const sql = neon(CONNECTION_STRING);
export const db = drizzle(sql);
