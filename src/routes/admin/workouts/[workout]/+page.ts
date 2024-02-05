import type { PageLoad } from './$types';

export const load: PageLoad = ({ route }) => {
	console.log(route.id);
};
