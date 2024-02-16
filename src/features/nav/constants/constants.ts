import keyboardPreview from '@/assets/categories_previews/keyboard_preview.webp'
import { StaticImageData } from 'next/image'

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
export interface NavDataInfo {
  previewImageSrc: StaticImageData
  previewImageText: string
  products: NavDataProducts
}

export const navCategories: NavCategory[] = [
  'Keyboards',
  'Mouses',
  'Mouse pads',
  'Keycaps'
]

export const navData: Record<NavCategory, NavDataInfo> = {
  'Keyboards': {
    previewImageSrc: keyboardPreview,
    previewImageText: 'Keyboards',
    products: []
  },
  'Mouses': {
    previewImageSrc: keyboardPreview,
    previewImageText: 'Mouses',
    products: []
  },
  'Mouse pads': {
    previewImageSrc: keyboardPreview,
    previewImageText: 'Mouse pads',
    products: []
  },
  'Keycaps': {
    previewImageSrc: keyboardPreview,
    previewImageText: 'Keycaps',
    products: []
  }
}