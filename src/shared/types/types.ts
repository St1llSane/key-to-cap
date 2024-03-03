import { StaticImageData } from 'next/image'

export interface UserPublic {
  id: string
  email: string
  firstName: string | null
  lastName: string | null
  gender: string | null
  birthDate: string | null
  createdAt: string
  updatedAt: string | null
}

export type ProductCategory =
  | 'Keyboards'
  | 'Mouses'
  | 'Mouse pads'
  | 'Keycaps'
export interface Product {
  id: number
  name: string
  description: string
  price: string
  quantity: number
  categoryId: number
}
export interface NavCategories {
  category: ProductCategory
  previewImage: StaticImageData
}
export type Products = Record<ProductCategory, Product[]>
