import ProfileLink from '@/features/links/profile-link'
import Profile from '@/pages/(shop)/profile/profile'
import UserMenu from '@/widgets/user-menu'
import { fireEvent, render, screen } from '@testing-library/react'

// import { useRouter } from 'next/router'

// jest.mock('next/router', () => ({
//   useRouter() {
//     return {
//       route: '/',
//       pathname: '',
//       query: '',
//       asPath: '',
//       push: jest.fn()
//     }
//   }
// }))

describe('click event', () => {
  test('profile link render', () => {
    render(<ProfileLink />)
    const profileLink = screen.getByTestId('profile-link')
    expect(profileLink).toBeInTheDocument()
  })

  test('profile link click', () => {
    render(<UserMenu />)
    const profileLink = screen.getByTestId('profile-link')
    fireEvent.click(profileLink)
    render(<Profile />)
    const profileTitle = screen.getByText(/Profile/i)
    expect(profileTitle).toBeInTheDocument()
  })
})
