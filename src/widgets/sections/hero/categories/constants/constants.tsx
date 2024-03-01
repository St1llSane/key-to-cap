import { ReactNode } from 'react'

import {
  ChevronUpSquare,
  Keyboard,
  Mouse,
  MousePointerSquare
} from 'lucide-react'

export interface Category {
  id: number
  icon: ReactNode
  name: string
}

export const categories: Category[] = [
  {
    id: 1,
    icon: <Keyboard size={30} strokeWidth={1.75} />,
    name: 'Keyboards'
  },
  { id: 2, icon: <Mouse size={30} strokeWidth={1.75} />, name: 'Mouses' },
  {
    id: 3,
    icon: <MousePointerSquare size={30} strokeWidth={1.75} />,
    name: 'Mouse pads'
  },
  {
    id: 4,
    icon: <ChevronUpSquare size={30} strokeWidth={1.75} />,
    name: 'Keycaps'
  }
]
