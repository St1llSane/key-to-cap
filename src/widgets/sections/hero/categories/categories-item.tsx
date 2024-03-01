'use client'

import Link from 'next/link'

import { Category } from './constants/constants'

interface CategoriesItemProps {
  category: Category
}

const CategoriesItem = ({ category }: CategoriesItemProps) => {
  return (
    <Link
      className='flex h-40 flex-col items-center justify-center rounded-md border bg-background p-4 shadow transition-shadow duration-200 hover:shadow-sketch'
      href={`/categories/${category.name.toLowerCase()}`}
    >
      {category.icon}
      <h2 className='mt-5 font-jost font-semibold uppercase'>
        {category.name}
      </h2>
      <span className='mt-1 text-muted-foreground'>In stock: </span>
    </Link>
  )
}
export default CategoriesItem
