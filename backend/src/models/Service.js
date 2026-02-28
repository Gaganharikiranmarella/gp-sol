import { allAsync, getAsync, runAsync } from '../database/connection.js'

export const getAllServices = async () => {
  return await allAsync('SELECT * FROM services ORDER BY created_at DESC')
}

export const getServiceById = async (id) => {
  return await getAsync('SELECT * FROM services WHERE id = ?', [id])
}

export const createService = async (title, description) => {
  const result = await runAsync('INSERT INTO services (title, description) VALUES (?, ?)', [title, description])
  return result.lastID
}

export const updateService = async (id, title, description) => {
  const result = await runAsync('UPDATE services SET title = ?, description = ? WHERE id = ?', [title, description, id])
  return result.changes
}

export const deleteService = async (id) => {
  const result = await runAsync('DELETE FROM services WHERE id = ?', [id])
  return result.changes
}
