import { render, fireEvent } from '@testing-library/react'
import LogoutButton from '@/components/LogoutButton'
import { signOut } from 'next-auth/react'
import '@testing-library/jest-dom'

jest.mock('next-auth/react')
const mockSignOut = signOut as unknown as jest.MockedFunction<typeof signOut>

const renderLogoutButton = () => {
  return render(<LogoutButton />)
}

describe('LogoutButton component', () => {
  it('should render LogoutButton component', () => {
    renderLogoutButton()
  })

  it('should have a button and on click it should call the <signOut> function', () => {
    const { getByRole } = renderLogoutButton()

    const logoutButton = getByRole('button')

    expect(logoutButton).toBeInTheDocument()

    fireEvent.click(logoutButton)

    expect(mockSignOut).toBeCalledTimes(1)
  })
})
