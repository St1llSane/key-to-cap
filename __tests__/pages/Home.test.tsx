import { render, screen } from '@testing-library/react'

import Home from '@/pages/(shop)/home'

describe('Render', () => {
  it('Home page', () => {
    render(<Home />)
    const home = screen.getByRole('main')
    expect(home).toBeInTheDocument()
  })
})
