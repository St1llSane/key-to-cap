import { render, screen } from '@testing-library/react'

import Toasts from '@/shared/ui/toasts'

describe('Render', () => {
  it('Info toast', () => {
    render(<Toasts.info />)
    const toast = screen.getByRole('generic', { hidden: false })
    expect(toast).toBeInTheDocument()
  })

  it('Success toast', () => {
    render(<Toasts.success />)
    const toast = screen.getByRole('generic', { hidden: false })
    expect(toast).toBeInTheDocument()
  })

  it('Error toast', () => {
    render(<Toasts.error />)
    const toast = screen.getByRole('generic', { hidden: false })
    expect(toast).toBeInTheDocument()
  })
})
