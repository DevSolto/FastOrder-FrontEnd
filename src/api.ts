// src/api.ts
import axios from 'axios'

const url = 'https://fastorder-api.onrender.com/api/'

interface User {
  id: string
  name: string
  cpf: string
  email: string
  password: string
  phone: string
  role: string
}
interface Product {
  id: string
  name: string
  description: string
  type: string
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(url + 'users/')

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}
export const addUser = async (createUserParams: {
  name: string
  cpf: string
  email: string
  password: string
  phone: string
  role: string
}): Promise<User[]> => {
  try {
    const response = await axios.post(url + 'users/', createUserParams)

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(url + 'products')

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}
