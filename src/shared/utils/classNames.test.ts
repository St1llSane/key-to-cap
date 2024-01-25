import { cn } from './classNames'

describe('return string', () => {
  test('array of strings', () => {
    expect(typeof cn(['className1', 'className2'])).toBe('string')
  })

  test('with conditions', () => {
    const isTrue = true
    const isFalse = false

    expect(typeof cn(isTrue && 'className')).toBe('string')
    expect(typeof cn(isFalse && 'className')).toBe('string')

    expect(typeof cn(isTrue ? 'className1' : 'className2')).toBe('string')
  })
})
