<template>
	<div>
		<app-stock v-for="stock in stocks" key={stock.id} :stock="stock" />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Stock from './Stock.vue'

	export default {
		components: {
			appStock: Stock
		},
		computed: {
			...mapGetters({
				stocks: 'stockPortfolio'
			})
		}
	}
</script>