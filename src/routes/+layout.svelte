<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div>
	<Navbar authorised={data.authenticated} />
	<slot />
</div>
