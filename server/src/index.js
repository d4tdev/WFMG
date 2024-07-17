const express = require('express')
const { connectDB } = require('./config/mongodb')
const { env } = require('./config/environment')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const { corsOptions } = require('./config/cors')
const  routes  = require('./routes')
// const hostname = env.HOSTNAME;
const port = env.PORT

connectDB()
   .then(() => bootServer())
   .catch((err) => {
      console.log(err)
      process.exit(1)
   })

const bootServer = () => {
   const app = express()

   app.use(cookieParser())
   app.use(cors(corsOptions))
   app.use(express.json())
   app.use(express.urlencoded({ extended: true }))

   routes(app)

   app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`)
   })
}
