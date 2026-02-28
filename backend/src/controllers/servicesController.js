import * as ServiceModel from '../models/Service.js'

export const getServices = async (req, res) => {
  try {
    const services = await ServiceModel.getAllServices()
    res.json(services)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getService = async (req, res) => {
  try {
    const service = await ServiceModel.getServiceById(req.params.id)
    if (!service) {
      return res.status(404).json({ error: 'Service not found' })
    }
    res.json(service)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createService = async (req, res) => {
  try {
    const { title, description } = req.body
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' })
    }
    const id = await ServiceModel.createService(title, description)
    res.status(201).json({ id, title, description })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateService = async (req, res) => {
  try {
    const { title, description } = req.body
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' })
    }
    const changes = await ServiceModel.updateService(req.params.id, title, description)
    if (changes === 0) {
      return res.status(404).json({ error: 'Service not found' })
    }
    res.json({ message: 'Service updated successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteService = async (req, res) => {
  try {
    const changes = await ServiceModel.deleteService(req.params.id)
    if (changes === 0) {
      return res.status(404).json({ error: 'Service not found' })
    }
    res.json({ message: 'Service deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
