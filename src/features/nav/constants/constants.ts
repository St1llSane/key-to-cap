import { type StaticImageData } from 'next/image'

import keyboard from '@/assets/categories_previews/keyboard_preview.webp'

export type NavCategory = 'Keyboards' | 'Mouses' | 'Mouse pads' | 'Keycaps'
export type NavDataProducts =
  | {
      description: string
      id: number
      name: string
      price: string
      quantity: number
      categoryId: number
    }[]
  | []
interface NavCategories {
  category: NavCategory
  previewImage: StaticImageData
}
export interface NavData {
  products: NavDataProducts
}
export type NavProducts = Record<NavCategory, NavData>

export const navCategories: NavCategories[] = [
  { category: 'Keyboards', previewImage: keyboard },
  { category: 'Mouses', previewImage: keyboard },
  { category: 'Mouse pads', previewImage: keyboard },
  { category: 'Keycaps', previewImage: keyboard }
]

export const navData: NavProducts = {
  'Keyboards': {
    products: []
  },
  'Mouses': {
    products: []
  },
  'Mouse pads': {
    products: []
  },
  'Keycaps': {
    products: []
  }
}
