const Nuxt = require('nuxt')
const express = require('express')
const app = express()
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3000

let config = require('./nuxt.config.js')
config.dev = !isProd
// config.router.base = isProd ? '/sea/nuxt/' : '/'
const nuxt = new Nuxt(config)

app.use(nuxt.render)

if (config.dev) {
	nuxt.build()
		.catch((error) => {
			console.error(error)
			process.exit(1)
		})
}

app.listen(port, '0.0.0.0')