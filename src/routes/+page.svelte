<script lang="ts">
	import { page } from '$app/stores';

	let openDialog = true;
</script>

<div class="h-full w-full flex justify-center items-center mx-auto flex-col">
	<div class="prose prose-h1:text-white bg-slate-700 rounded-md p-10 w-full mt-10">
		<h1 class="bg-inherit">Welcome to SvelteKit with Logto Example</h1>
		<p class="bg-inherit">
			Visit
			<a
				class="bg-inherit text-white"
				target="_blank"
				href="https://github.com/jay-dee7/logto-sveltekit-example"
			>
				GitHub Repo
			</a>
			to learn more about it
			{#if $page.url.searchParams.get('error')}
				<dialog open={openDialog} class="bg-slate-400 text-center rounded-md py-6 px-12">
					<div class="py-6 px-12 rounded-md flex justify-center items-center flex-col">
						<span>
							Error: {$page.url.searchParams.get('error')}
						</span>
					</div>
					<button
						class="rounded-md border-2 text-slate-900 mt-4 px-4 py-1 border-slate-700"
						on:click={() => {
							$page.url.searchParams.delete('error');
							window.location.href = $page.url.toString();
							openDialog = false;
						}}
					>
						Close
					</button>
				</dialog>
			{/if}
		</p>
	</div>
</div>
