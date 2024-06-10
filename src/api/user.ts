import axios, { AxiosError } from 'axios'

const url = 'http://localhost:3000/api/'

interface User {
  id: string
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  role: string
}

interface UserResponse {
  name?: string
  email?: string
  password?: string
  cpf?: string
  phone?: string
  role?: string
  status?: number
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    password?: string[]
    cpf?: string[]
    phone?: string[]
    role?: string[]
  }
}

interface APIError {
  response?: {
    status: number
    data: {
      message: string
      errors: { [key: string]: string[] }
    }
  }
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

export const createUser = async (userData: User): Promise<UserResponse> => {
  try {
    const response = await axios.post(url + 'users/', userData)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        name: ['Erro desconhecido']
      }
    }
  }
}

export const getUserById = async (userId: string): Promise<UserResponse> => {
  try {
    const response = await axios.get(url + `users/${userId}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        name: ['Erro desconhecido']
      }
    }
  }
}

export const updateUser = async (
  userId: string,
  userData: User
): Promise<UserResponse> => {
  try {
    const response = await axios.put(url + `users/${userId}`, userData)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        name: ['Erro desconhecido']
      }
    }
  }
}

export const deleteUser = async (userId: string): Promise<UserResponse> => {
  try {
    const response = await axios.delete(url + `users/${userId}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        name: ['Erro desconhecido']
      }
    }
  }
}
