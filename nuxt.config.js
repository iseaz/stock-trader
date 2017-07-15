module.exports = {
	plugins: [
		'~plugins/filters.js',
		{ src: '~plugins/ga.js', ssr: false },
		'~plugins/http.js'
	],
	css: [
		'~assets/main.css',
		{ src: '~assets/test.scss', lang: 'scss' }
	]
}