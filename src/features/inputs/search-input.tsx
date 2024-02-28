'use client'

import { Search } from 'lucide-react'

import { Button } from '@/shared/ui/buttons/button'
import { Input } from '@/shared/ui/inputs/input'

const SearchInput = () => {
  return (
    <div className='relative w-60'>
      <Input
        className='relative left-0 right-0 pr-10'
        variant='underline'
        placeholder='Search...'
      />
      <Button
        className='absolute bottom-0 right-0 top-0 w-7 hover:bg-[transparent]'
        variant='ghost'
        size='icon'
      >
        <Search
          className='absolute right-0 text-primary'
          size={20}
          strokeWidth={1.75}
        />
      </Button>
    </div>
  )
}

export default SearchInput
