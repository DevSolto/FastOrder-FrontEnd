import axios, { AxiosError } from 'axios'

const url = 'http://localhost:3000/api/'

interface OrderItem {
  orderId: string
  productId: string
  amount: number
  observation?: string
}

interface OrderItemResponse {
  orderId?: string
  productId?: string
  amount?: number
  observation?: string
  status?: number
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

export const getOrderItems = async (): Promise<OrderItem[]> => {
  try {
    const response = await axios.get(`${url}/orderItems/`)
    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export const createOrderItem = async (orderItemData: OrderItem): Promise<OrderItemResponse> => {
  try {
    const response = await axios.post(`${url}/orderItems/`, orderItemData)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        orderItem: ['Erro desconhecido']
      }
    }
  }
}

export const getOrderItemById = async (orderItemId: string): Promise<OrderItemResponse> => {
  try {
    const response = await axios.get(`${url}/orderItems/${orderItemId}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        orderItem: ['Erro desconhecido']
      }
    }
  }
}

export const updateOrderItem = async (
  orderItemId: string,
  orderItemData: OrderItem
): Promise<OrderItemResponse> => {
  try {
    const response = await axios.put(`${url}/orderItems/${orderItemId}`, orderItemData)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        orderItem: ['Erro desconhecido']
      }
    }
  }
}

export const deleteOrderItem = async (orderItemId: string): Promise<OrderItemResponse> => {
  try {
    const response = await axios.delete(`${url}/orderItems/${orderItemId}`)
    return response.data
  } catch (error) {
    const err = error as AxiosError<APIError>
    console.log('There was a problem with the axios operation:', err)
    return {
      status: err.response?.status || 500,
      success: false,
      message: err.response?.data?.message || 'Erro no servidor',
      errors: err.response?.data?.errors || {
        orderItem: ['Erro desconhecido']
      }
    }
  }
}
