import axios, { AxiosError } from 'axios'
const url = 'http://localhost:3000/api/'

interface OrderUnity {
  orderId: string
  unitId: string
  type: string
}

interface OrderUnityResponse {
  id?: string
  orderId?: string
  unitId?: string
  type?: string
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

export const getOrderUnities = async (): Promise<OrderUnity[]> => {
  try {
    const response = await axios.get(url + 'orders/unities/')
    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export const createOrderUnity = async (
  orderUnityData: OrderUnity
): Promise<OrderUnityResponse> => {
  try {
    const response = await axios.post(url + 'orders/unities/', orderUnityData)
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

export const getOrderUnityById = async (
  orderId: string,
  unitId: string
): Promise<OrderUnityResponse> => {
  try {
    const response = await axios.get(
      url + `orders/${orderId}/unities/${unitId}`
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

export const updateOrderUnity = async (
  orderId: string,
  unitId: string,
  orderUnityData: OrderUnity
): Promise<OrderUnityResponse> => {
  try {
    const response = await axios.put(
      url + `orders/${orderId}/unities/${unitId}`,
      orderUnityData
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

export const deleteOrderUnity = async (
  orderId: string,
  unitId: string
): Promise<OrderUnityResponse> => {
  try {
    const response = await axios.delete(
      url + `orders/${orderId}/unities/${unitId}`
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
