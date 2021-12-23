const Router = require('express')
const DeviceController = require('../controllers/deviceController')
const router = new Router()



router.post('/', DeviceController.create)
router.get('/', DeviceController.getAll)
router.delete('/', DeviceController.delete)
router.get('/:id', DeviceController.getOne)






module.exports = router