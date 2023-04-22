import type { LogtoClient } from '@cntr/sveltekit';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			logto: LogtoClient;
			user: import('@cntr/sveltekit').UserInfoResponse | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
