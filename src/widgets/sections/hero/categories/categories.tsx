import CategoriesItem from './categories-item'
import { categories } from './constants/constants'

const Categories = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {categories.map((category) => (
        <CategoriesItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Categories
