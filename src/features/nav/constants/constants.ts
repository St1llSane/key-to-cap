import keyboardPreview from '@/assets/categories_previews/keyboard_preview.webp'
import { StaticImageData } from 'next/image'

type NavDataName = 'Keyboards' | 'Mouses' | 'Mouse pads' | 'Keycaps'
interface NavDataInfo {
  categoryHref: string
  previewImageSrc: StaticImageData
  previewImageText: string
  products: {
    productHref: string
    name: string
    description: string
  }[]
}

export const navData: Record<NavDataName, NavDataInfo> = {
  'Keyboards': {
    categoryHref: '/categories/keyboards',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Keyboards',
    products: [
      {
        productHref: '/',
        name: 'Keyboard 1',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Keyboard 2',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Keyboard 3',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Keyboard 4',
        description: 'fdslfldslaflsd'
      }
    ]
  },
  'Mouses': {
    categoryHref: '/categories/mouses',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Mouses',
    products: [
      {
        productHref: '/',
        name: 'Mouses 1',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Mouses 2',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Mouses 3',
        description: 'fdslfldslaflsd'
      }
    ]
  },
  'Mouse pads': {
    categoryHref: '/categories/mouse-pads',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Mouse pads',
    products: [
      { productHref: '/', name: 'Pads 1', description: 'fdslfldslaflsd' },
      { productHref: '/', name: 'Pads 2', description: 'fdslfldslaflsd' },
      { productHref: '/', name: 'Pads 3', description: 'fdslfldslaflsd' },
      { productHref: '/', name: 'Pads 4', description: 'fdslfldslaflsd' }
    ]
  },
  'Keycaps': {
    categoryHref: '/categories/keycaps',
    previewImageSrc: keyboardPreview,
    previewImageText: 'Keycaps',
    products: [
      {
        productHref: '/',
        name: 'Keycaps 1',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Keycaps 2',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Keycaps 3',
        description: 'fdslfldslaflsd'
      },
      {
        productHref: '/',
        name: 'Keycaps 4',
        description: 'fdslfldslaflsd'
      }
    ]
  }
}
