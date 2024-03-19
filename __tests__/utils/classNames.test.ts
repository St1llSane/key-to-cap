import { cn } from '@/shared/utils/classNames'

describe('Return', () => {
  it('array of strings', () => {
    expect(typeof cn(['className1', 'className2'])).toBe('string')
  })

  it('string by conditions check', () => {
    const isTrue = true
    const isFalse = false

    expect(typeof cn(isTrue && 'className')).toBe('string')
    expect(typeof cn(isFalse && 'className')).toBe('string')

    expect(typeof cn(isTrue ? 'className1' : 'className2')).toBe('string')
  })
})
