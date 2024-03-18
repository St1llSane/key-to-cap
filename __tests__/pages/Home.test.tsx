import { render, screen } from '@testing-library/react'

import Home from '@/pages/(shop)/home'

it('Render Home page', () => {
  render(<Home />)
  const home = screen.getByRole('main')
  expect(home).toBeInTheDocument()
})
