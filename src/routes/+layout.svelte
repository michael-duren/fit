<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import 'iconify-icon';
	import { navigating } from '$app/stores';
	import { loading } from '$lib/loading';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// takes a obj/null converts it to a boolean, and then returns the opposite of that
	$: $loading = !!$navigating;

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Spinner from '$lib/ui/Spinner.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl">Free Fitness</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex gap-2">
					<a href="/">
						<iconify-icon icon="ph:house" width={20}></iconify-icon>
					</a>
					<a href="/workouts">
						<iconify-icon icon="ph:notebook" width="1.2rem" height="1.2rem" />
					</a>
					<a href="/admin">
						<iconify-icon icon="ph:database" width={20} />
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	{#if $loading}
		<Spinner />
	{:else}
		<slot />
	{/if}
</AppShell>
