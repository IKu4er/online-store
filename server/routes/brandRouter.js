const Router = require('express')
const BrandController = require('../controllers/brandController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), BrandController.create)
router.get('/', BrandController.getAll)
router.delete('/', checkRole('ADMIN'), BrandController.delete)






module.exports = router