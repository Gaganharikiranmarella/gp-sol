import { allAsync, getAsync, runAsync } from '../database/connection.js'

export const getAllContacts = async () => {
  return await allAsync('SELECT * FROM contacts ORDER BY created_at DESC')
}

export const getContactById = async (id) => {
  return await getAsync('SELECT * FROM contacts WHERE id = ?', [id])
}

export const createContact = async (name, email, message) => {
  const result = await runAsync('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message])
  return result.lastID
}

export const deleteContact = async (id) => {
  const result = await runAsync('DELETE FROM contacts WHERE id = ?', [id])
  return result.changes
}
