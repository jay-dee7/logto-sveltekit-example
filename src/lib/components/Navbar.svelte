<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '$app/forms';

	export let authorised = false;

	const handleSignIn: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					window.open(result.data?.location, '_self');
					break;
				case 'failure':
					// handle error here
					await applyAction(result);
					await update();
					break;
				case 'error':
					// handle server side error here
					await update();
					await applyAction(result);
					break;
				default:
					await update();
			}
		};
	};

	const handleSignOut: SubmitFunction = () => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					window.open(result.data?.location, '_self');
					break;
				case 'failure':
					// handle error here
					await applyAction(result);
					await update();
					break;
				case 'error':
					// handle server side error here
					await update();
					await applyAction(result);
					break;
				default:
					await update();
			}
		};
	};
</script>

<header class="bg-slate-900 py-3">
	<nav class="flex bg-slate-900 justify-center px-4">
		<div class="container bg-slate-900 max-w-[2000px] px-4 lg:px-8">
			<div class="flex bg-slate-900 flex-col md:items-center md:justify-between lg:flex-row">
				<div class="flex items-center justify-between sm:w-full lg:w-fit">
					<div
						class="half:ml-5 bg-slate-900 flex cursor-pointer items-center justify-center whitespace-nowrap"
					>
						<a href="/">
							<h3 class="prose font-semibold text-white bg-slate-900">SvelteKit + Logto Example</h3>
						</a>
					</div>
				</div>
				{#if authorised}
					<form method="POST" use:enhance={handleSignOut} action="/logto?/signout">
						<button class="border-red-500 text-red-500 border-2 py-1 px-2 rounded-md">
							Sign out
						</button>
					</form>
				{:else}
					<form method="POST" use:enhance={handleSignIn} action="/logto?/signin">
						<button class="border-green-500 text-green-500 border-2 py-1 px-2 rounded-md">
							Sign In
						</button>
					</form>
				{/if}
			</div>
		</div>
	</nav>
</header>
