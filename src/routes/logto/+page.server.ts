import { isSvelteKitRedirect } from '$lib/helpers';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	signin: async ({ url, locals }) => {
		console.log('inside logto signin method');
		const uri = new URL('/logto/callback', url.href);
		try {
			throw await locals.logto.signIn(uri.toString());
		} catch (err) {
			console.log('we got something: ', err);
			if (isSvelteKitRedirect(err)) {
				return {
					location: err.location
				};
			}

			return fail(400, {
				error: 'error performing signin with Logto'
			});
		}
	},
	signout: async ({ locals, url }) => {
		console.log('inside signout');
		try {
			throw await locals.logto.signOut(url.origin);
		} catch (err) {
			console.log('err in signout: ', err);
			if (isSvelteKitRedirect(err)) {
				return { location: err.location };
			}

			return fail(401, {
				error: err as string
			});
		}
	}
};
