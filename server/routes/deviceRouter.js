const Router = require('express')
const DeviceController = require('../controllers/deviceController')
const router = new Router()
const checkRole = require('../middleware/checkRoleMiddleware')



router.post('/', checkRole('ADMIN'), DeviceController.create)
router.get('/', DeviceController.getAll)
router.delete('/', checkRole('ADMIN'), DeviceController.delete)
router.get('/:id', DeviceController.getOne)






module.exports = router