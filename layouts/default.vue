<template>
	<div class="container">
		<app-header />
		<div class="row">
			<div class="col-xs-12">
				<nuxt />
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../components/Header.vue'

	export default {
		components: {
			appHeader: Header
		},
		head: {
			title: 'Stock Trader',
			link: [
				{
					href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
					rel: 'stylesheet',
					integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
					crossorigin: 'anonymous'
				},
				{
					rel: 'icon',
					href: '/logo.png',
					type: 'image/png'
				}
			],
			meta: [
				{
					charset: 'utf-8'
				},
				{
					name: 'viewport',
					content: 'user-scalable=no, initial-scale=1, width=device-width'
				}
			]
		},
		created(){
			this.$store.dispatch('loadData')
		}
	}
</script>

<style>
	body {
		padding: 30px;
	}
</style>