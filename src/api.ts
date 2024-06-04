// src/api.ts
import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

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
    const response = await axios.get(process.env.API_URL + '/users/')

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
      process.env.API_URL + '/users/',
      createUserParams
    )

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}
