import axios, { AxiosError } from 'axios'

const url = 'http://localhost:3000/api/'

interface Order {
  creationDate: string
  receivedDate: string
  deliveryEstimate: string
  status: string
  userId: string
}

interface OrderResponse {
  data: any
  data: any
  id?: string
  creationDate?: string
  receivedDate?: string
  deliveryEstimate?: string
  status?: string
  userId?: string
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

export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get(url + 'orders/')
    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export const createOrder = async (orderData: Order): Promise<OrderResponse> => {
  try {
    const response = await axios.post(url + 'orders/', orderData)
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

export const getOrderById = async (orderId: string): Promise<OrderResponse> => {
  try {
    const response = await axios.get(url + `orders/${orderId}`)
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

export const updateOrder = async (
  orderId: string,
  orderData: Order
): Promise<OrderResponse> => {
  try {
    const response = await axios.put(url + `orders/${orderId}`, orderData)
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

export const deleteOrder = async (orderId: string): Promise<OrderResponse> => {
  try {
    const response = await axios.delete(url + `orders/${orderId}`)
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
