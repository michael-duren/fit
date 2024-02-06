<script lang="ts">
	import type { ConicStop } from '@skeletonlabs/skeleton';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];
</script>

<div>
	<ConicGradient stops={conicStops} spin>Loading</ConicGradient>
</div>
