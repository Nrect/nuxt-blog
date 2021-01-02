const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const mongoose = require('mongoose')

const passportStrategy = require('./middleware/passport-strategy')
const keys = require('./keys')
const app = express()

mongoose.connect(keys.MONGO_URI, { useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error(error))

// Middleware
app.use(passport.initialize())
// регистрация стратегии
passport.use(passportStrategy)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())

// Require API routes
const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const commentRoutes = require('./routes/post.routes')

// Import API Ro utes
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
