import axios, { AxiosError } from 'axios'

const url = 'http://localhost:3000/api/'

interface Unity {
  id: string
  name: string
  description: string
  type: string
}

interface UnityResponse {
  id?: string
  name?: string
  description?: string
  type?: string
  status?: number
  success?: boolean
  message?: string
  errors?: { [key: string]: string[] }
}

interface APIError {
  response?: {
    status: number
    data: {
      message?: string
      errors?: { [key: string]: string[] }
    }
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

export const getUnityById = async (unityId: string): Promise<UnityResponse> => {
  try {
    const response = await axios.get(url + `unities/${unityId}`)
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

export const updateUnity = async (
  unityId: string,
  unityData: Unity
): Promise<UnityResponse> => {
  try {
    const response = await axios.put(url + `unities/${unityId}`, unityData)
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

export const deleteUnity = async (unityId: string): Promise<UnityResponse> => {
  try {
    const response = await axios.delete(url + `unities/${unityId}`)
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
