<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<div class="flex h-full">
	<AppRail width="w-24">
		<AppRailAnchor href="/admin" selected={$page.url.pathname === '/admin'}>
			<svelte:fragment slot="lead"></svelte:fragment>
			<span>Workouts</span>
		</AppRailAnchor>
		<AppRailAnchor href="/admin/exercises" selected={$page.url.pathname === '/admin/exercises'}>
			<svelte:fragment slot="lead"></svelte:fragment>
			<span>Exercises</span>
		</AppRailAnchor>
		<AppRailAnchor href="/admin/types" selected={$page.url.pathname === '/admin/types'}>
			<svelte:fragment slot="lead"></svelte:fragment>
			<span>Types</span>
		</AppRailAnchor>
		<!-- --- -->
		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" target="_blank" title="Account">Logout</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
	<div class="w-full">
		<slot />
	</div>
</div>
