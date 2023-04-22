import { isSvelteKitRedirect } from '$lib/helpers';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const DELETE: RequestHandler = async ({ url, locals }) => {
	try {
		await locals.logto.signOut(url.origin);
		return new Response(null, { status: 204 });
	} catch (err) {
		if (isSvelteKitRedirect(err)) {
			return json(
				{ location: err.location },
				{
					status: err.status,
					headers: {
						location: err.location
					}
				}
			);
		}

		throw error(400, {
			message: err as string
		});
	}
};
