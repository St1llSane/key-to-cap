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
export interface NavData {
  products: NavDataProducts
}
export type NavProducts = Record<NavCategory, NavData>

export const navCategories: NavCategory[] = [
  'Keyboards',
  'Mouses',
  'Mouse pads',
  'Keycaps'
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
