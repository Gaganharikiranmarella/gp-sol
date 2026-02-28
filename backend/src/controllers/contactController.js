import * as ContactModel from '../models/Contact.js'

export const getContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.getAllContacts()
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }
    const id = await ContactModel.createContact(name, email, message)
    res.status(201).json({ 
      id, 
      message: 'Contact message received successfully',
      data: { name, email, message }
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteContact = async (req, res) => {
  try {
    const changes = await ContactModel.deleteContact(req.params.id)
    if (changes === 0) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json({ message: 'Contact deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
