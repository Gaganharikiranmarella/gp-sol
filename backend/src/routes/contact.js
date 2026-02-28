import express from 'express'
import * as contactController from '../controllers/contactController.js'

const router = express.Router()

router.get('/', contactController.getContacts)
router.post('/', contactController.submitContact)
router.delete('/:id', contactController.deleteContact)

export default router
