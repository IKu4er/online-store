import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Fridge' },
            { id: 2, name: 'Smartphone' },
            { id: 3, name: 'Notebook' },
            { id: 4, name: 'TV' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ]
        this._devices = [
            { id: 1, name: 'Iphone 12', price: 2500, rating: 5, img: 'https://images.radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2021-01/1-laptop-qoav8r7u-2_0.jpg?itok=G5hVfN2f' },
            { id: 2, name: 'Iphone 12', price: 2500, rating: 5, img: 'https://images.radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2021-01/1-laptop-qoav8r7u-2_0.jpg?itok=G5hVfN2f' },
            { id: 3, name: 'Iphone 12', price: 2500, rating: 5, img: 'https://images.radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2021-01/1-laptop-qoav8r7u-2_0.jpg?itok=G5hVfN2f' },
            { id: 4, name: 'Iphone 12', price: 2500, rating: 5, img: 'https://images.radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2021-01/1-laptop-qoav8r7u-2_0.jpg?itok=G5hVfN2f' },
            { id: 5, name: 'Iphone 12', price: 2500, rating: 5, img: 'https://images.radiokp.ru/sites/default/files/styles/kp_fullnode_730_486/public/2021-01/1-laptop-qoav8r7u-2_0.jpg?itok=G5hVfN2f' }
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        return this._selectedType = type
    }

    setSelectedBrand(brand) {
        return this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}