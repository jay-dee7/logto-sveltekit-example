import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, url }) => {
	try {
		// url.toString() here is something like:
		// <origin>/logto/callback for eg, in localhost:3000, it's http://localhost:3000/logto/callback
		// this url must be registered as the redirect url in your Logto Application
		await locals.logto.handleSignInCallback(url.toString());
	} catch (err) {
		console.log('ERR_LOGTO_SIGNIN_CALLBACK: ', err);
		throw error(401, {
			message: (err as Error).message
		});
	}

	throw redirect(303, '/protected');
};
