import axios, { AxiosError } from 'axios'

const url = 'http://localhost:3000/api/'

interface Item {
  orderId: string
  productId: string
  observation: string
  amount: number
}

interface ItemResponse {
  id?: string
  orderId?: string
  productId?: string
  observation?: string
  amount?: number
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

export const getItems = async (): Promise<Item[]> => {
  try {
    const response = await axios.get(url + 'items/')
    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export const createItem = async (itemData: Item): Promise<ItemResponse> => {
  try {
    const response = await axios.post(url + 'items/', itemData)
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

export const getItemById = async (
  orderId: string,
  productId: string
): Promise<ItemResponse> => {
  try {
    const response = await axios.get(
      url + `orders/${orderId}/items/${productId}`
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

export const updateItem = async (
  orderId: string,
  productId: string,
  itemData: Item
): Promise<ItemResponse> => {
  try {
    const response = await axios.put(
      url + `orders/${orderId}/items/${productId}`,
      itemData
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

export const deleteItem = async (
  orderId: string,
  productId: string
): Promise<ItemResponse> => {
  try {
    const response = await axios.delete(
      url + `orders/${orderId}/items/${productId}`
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
