<template>
	<div>
		<h2>Trade or View your portfolio</h2>
		<h5>You may save & load your data</h5>
		<h5>Click on 'End Day' to begin a New Day!</h5>
		<hr />
		<p>Your Funds: {{funds | currency}}</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters(['funds'])
		}
	}
</script>