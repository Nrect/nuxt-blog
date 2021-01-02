const { Router } = require('express')
const { create } = require('../controllers/comment.controller')
const router = new Router()

// /server/api/comment
router.post('/', create)

module.exports = router
