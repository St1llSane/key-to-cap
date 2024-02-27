import { render, screen } from '@testing-library/react'

import Home from '@/pages/(shop)/home'

test('Home page render', () => {
  render(<Home />)
  const elem = screen.getByTestId('home-page')
  expect(elem).toBeInTheDocument()
})
