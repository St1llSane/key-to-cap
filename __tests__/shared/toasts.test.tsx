import { render, screen } from '@testing-library/react'

import Toasts from '@/shared/ui/toasts'

describe('Render toast', () => {
  it('Info', () => {
    render(<Toasts.info />)
    const toast = screen.getByRole('generic', { hidden: false })
    expect(toast).toBeInTheDocument()
  })

  it('Success', () => {
    render(<Toasts.success />)
    const toast = screen.getByRole('generic', { hidden: false })
    expect(toast).toBeInTheDocument()
  })

  it('Error', () => {
    render(<Toasts.error />)
    const toast = screen.getByRole('generic', { hidden: false })
    expect(toast).toBeInTheDocument()
  })
})
