const uuid = require('uuid')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.foreach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    }))
            }
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
            devices = await Device.findAndCountAll({
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
        const { id } = req.params
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo, as: 'info' }]
        })
        return res.json(device)
    }

    async delete(req, res) {

    }
}

module.exports = new DeviceController()