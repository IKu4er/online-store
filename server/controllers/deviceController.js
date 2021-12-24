const uuid = require('uuid')
const { Device } = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let { typeId, brandId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!typeId && !brandId) {
            devices = await Device.findAndCountAll({ limit, offset })
        }
        if (!typeId && brandId) {
            devices = await Device.findfindAndCountAll({
                where: { brandId },
                limit,
                offset
            })
        }
        if (typeId && !brandId) {
            devices = await Device.findAndCountAll({
                where: { typeId },
                limit,
                offset
            })
        }
        if (typeId && brandId) {
            devices = await Device.findAndCountAll({
                where: { brandId, typeId },
                limit,
                offset
            })
        }

        return res.json(devices)

    }
    async getOne(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new DeviceController()