import axios, { AxiosError } from 'axios'

const url = 'http://localhost:3000/api/'

interface Work {
  userId: string
  unitId: string
  startingDate: string
  endingDate?: string
}

interface WorkResponse {
  id?: string
  userId?: string
  unitId?: string
  startingDate?: string
  endingDate?: string
  success?: boolean
  message?: string
  errors?: { [key: string]: string[] }
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

export const getWorks = async (): Promise<Work[]> => {
  try {
    const response = await axios.get(url + 'works/')
    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export const createWork = async (workData: Work): Promise<WorkResponse> => {
  try {
    const response = await axios.post(url + 'works/', workData)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        general: ['Erro desconhecido']
      }
    }
  }
}

export const getWorkById = async (
  userId: string,
  unitId: string
): Promise<WorkResponse> => {
  try {
    const response = await axios.get(url + `/${userId}/works/${unitId}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        general: ['Erro desconhecido']
      }
    }
  }
}

export const updateWork = async (
  userId: string,
  unitId: string,
  workData: Work
): Promise<WorkResponse> => {
  try {
    const response = await axios.put(
      url + `/${userId}/works/${unitId}`,
      workData
    )
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        general: ['Erro desconhecido']
      }
    }
  }
}

export const deleteWork = async (
  userId: string,
  unitId: string
): Promise<WorkResponse> => {
  try {
    const response = await axios.delete(url + `/${userId}/works/${unitId}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        general: ['Erro desconhecido']
      }
    }
  }
}
