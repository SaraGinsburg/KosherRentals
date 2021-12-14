const express = require('express')
const { check } = require('express-validator')

const { login, signup, getUsers } = require('../controllers/users-controller')

const router = express.Router()

router.get('/', getUsers)
router.post('/login', login)
router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  signup
)

module.exports = router // the configured router is being exported
