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

export type NavCategory = 'Keyboards' | 'Mouses' | 'Mouse pads' | 'Keycaps'
interface NavProducts {
  id: number
  name: string
  description: string
  price: string
  quantity: number
  categoryId: number
}
export interface NavCategories {
  category: NavCategory
  previewImage: StaticImageData
}
export type Products = Record<NavCategory, NavProducts[]>
