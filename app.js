const webpack = require('webpack')
const path = require('path')
const middleware = require('webpack-dev-middleware')
const compiler = webpack(require('./webpack.config'))
const express = require('express')
const app = express()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'development') {
	app.use(
		'/dist',
		middleware(compiler, {
		// webpack-dev-middleware options
		})
	)
} 

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, './public')))
}

app.get('/api/greeting', (req, res) => {
	setTimeout(()=> {
		res.json({data: 'Hello world!'})
	}, 2000)
})

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, `./public/index.html`))
})

module.exports = app