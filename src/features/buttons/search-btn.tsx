import { Search } from 'lucide-react'
import React from 'react'
import { Button } from 'shared/ui/buttons/button'

const SearchBtn = () => {
  return (
    <Button variant='ghost' size='icon'>
      <Search size={20} strokeWidth={1.75} />
    </Button>
  )
}

export default SearchBtn