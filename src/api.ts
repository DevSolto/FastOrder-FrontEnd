// src/api.ts
import axios from 'axios'

const url = 'http://localhost:3000/api/'

interface User {
  id: string
  name: string
  cpf: string
  email: string
  password: string
  phone: string
  role: string
}
interface Unity {
  name: string
  description: string
  type: string
}
interface UnityResponse {
  name?: string
  description?: string
  type?: string
  status?: number
  success?: boolean
  message?: string
  errors?: { name: string[] }
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

export const getUnities = async (): Promise<Unity[]> => {
  try {
    const response = await axios.get(url + 'unities/')

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}
export const createUnity = async (unityData: Unity): Promise<UnityResponse> => {
  try {
    const response = await axios.post(url + 'unities/', unityData)

    return response.data
  } catch (error: any) {
    console.log('There was a problem with the axios operation:', error)

    return {
      status: error.response?.status || 500,
      success: false,
      message: error.response?.data?.message || 'Erro no servidor',
      errors: error.response?.data?.errors || {
        name: ['Erro desconhecido']
      }
    }
  }
}
