const Router = require('express')
const TypeController = require('../controllers/typeController')
const router = new Router()



router.post('/', TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/', TypeController.delete)






module.exports = router