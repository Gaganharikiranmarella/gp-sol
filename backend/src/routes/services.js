import express from 'express'
import * as servicesController from '../controllers/servicesController.js'

const router = express.Router()

router.get('/', servicesController.getServices)
router.get('/:id', servicesController.getService)
router.post('/', servicesController.createService)
router.put('/:id', servicesController.updateService)
router.delete('/:id', servicesController.deleteService)

export default router
