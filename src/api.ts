// src/api.ts
import axios from 'axios'

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
    const response = await axios.get(
      'https://studious-potato-wjrxrwvjqr4cgwgg-3000.app.github.dev/api/users/'
    )

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
    const response = await axios.post(
      'https://upgraded-spoon-679w9jv7q45c4vxv-3000.app.github.dev/api/users/',
      createUserParams
    )

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export async function getProducts(): Promise<Product[]>{
  try {
    const response = await axios.get(
      'https://upgraded-spoon-679w9jv7q45c4vxv-3000.app.github.dev/api/products'
    )

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}