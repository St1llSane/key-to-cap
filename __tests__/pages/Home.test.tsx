import Home from '@/pages/(shop)/home'
import { render, screen } from '@testing-library/react'

test('Home page render', () => {
  render(<Home />)
  const elem = screen.getByTestId('home-page')
  expect(elem).toBeInTheDocument()
})
