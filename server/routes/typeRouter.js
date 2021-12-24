const Router = require('express')
const TypeController = require('../controllers/typeController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/', checkRole('ADMIN'), TypeController.delete)






module.exports = router