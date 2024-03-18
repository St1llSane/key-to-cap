import { cn } from '@/shared/utils/classNames'

describe('Return string', () => {
  it('array of strings', () => {
    expect(typeof cn(['className1', 'className2'])).toBe('string')
  })

  it('with conditions', () => {
    const isTrue = true
    const isFalse = false

    expect(typeof cn(isTrue && 'className')).toBe('string')
    expect(typeof cn(isFalse && 'className')).toBe('string')

    expect(typeof cn(isTrue ? 'className1' : 'className2')).toBe('string')
  })
})
