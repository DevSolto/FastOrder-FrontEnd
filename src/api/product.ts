import axios, { AxiosError } from 'axios'

const url = 'http://localhost:3000/api/'

interface Product {
  id: string
  name: string
  description: string
  type: string
}

interface ProductResponse {
  id?: string
  name?: string
  description?: string
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

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(url + 'products/')
    console.log(response.data)

    return response.data.data
  } catch (error) {
    console.error('There was a problem with the axios operation:', error)
    return []
  }
}

export const createProduct = async (
  productData: Product
): Promise<ProductResponse> => {
  try {
    const response = await axios.post(url + 'products/', productData)
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

export const getProductById = async (
  productId: string
): Promise<ProductResponse> => {
  try {
    const response = await axios.get(url + `products/${productId}`)
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

export const updateProduct = async (
  productId: string,
  productData: Product
): Promise<ProductResponse> => {
  try {
    const response = await axios.put(url + `products/${productId}`, productData)
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

export const deleteProduct = async (
  productId: string
): Promise<ProductResponse> => {
  try {
    const response = await axios.delete(url + `products/${productId}`)
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
