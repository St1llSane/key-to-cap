import { render, screen } from '@testing-library/react'

import { Button } from '@/shared/ui/buttons/button'

describe('Render', () => {
  it('default button', () => {
    render(<Button />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('solid button', () => {
    render(<Button variant='solid'>solid</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('dark button', () => {
    render(<Button variant='dark'>dark</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('ghost button', () => {
    render(<Button variant='ghost'>ghost</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('as slot button', () => {
    render(
      <Button asSlot>
        <div>as slot</div>
      </Button>
    )
    const button = screen.getByText('as slot')
    expect(button).toBeInTheDocument()
  })
})
