const { apiV1 } = require('./v1')

module.exports = routes = (app) => {
   app.use('/', (req, res) => res.json({ message: 'Welcome to the API' }))
   app.use('/v1', apiV1)
}
