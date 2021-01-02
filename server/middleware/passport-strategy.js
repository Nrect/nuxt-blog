const { Strategy, ExtractJwt } = require('passport-jwt')
// const { model } = require('mongoose')
const keys = require('../keys')

// const User = model('users')
const User = require('../models/user.model')

// Authorization: Bearer ...token
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKe: keys.JWT
}

// в payload хранится объект jwt.sign
module.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await User.findById(payload.userId).select('id')
    if (candidate) {
      done(null, candidate)
    } else {
      // Если нет токена, то пользователь не может получыить эндпоинт
      done(null, false)
    }
  } catch (err) {
    console.log(err)
  }
})
