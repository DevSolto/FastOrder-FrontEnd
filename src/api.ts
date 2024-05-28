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

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get('http://localhost:3000/api/users/')
    return response.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}
