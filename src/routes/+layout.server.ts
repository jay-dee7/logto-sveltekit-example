import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		authenticated: await locals.logto.isAuthenticated(),
		user: locals.user
	};
};
