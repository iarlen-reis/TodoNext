import { render } from '@testing-library/react'
import { Header } from '@/components/Header'
import { getServerSession } from 'next-auth'
import '@testing-library/jest-dom'

jest.mock('next-auth', () => ({
  __esModule: true,
  default: jest.fn(),
  getServerSession: jest.fn(),
}))

const mockGetServerSession = getServerSession as jest.MockedFunction<
  typeof getServerSession
>

const renderHeaderWithAuth = async () => {
  mockGetServerSession.mockResolvedValue({
    user: {
      name: 'Iarlen Reis',
      image: 'https://github.com/iarlen-reis.png',
      email: 'IqXOg@example.com',
    },
  })

  const header = await Header()
  return render(header)
}

const renderHeaderWithoutAuth = async () => {
  const header = await Header()
  return render(header)
}

describe('Header component with auth', () => {
  it('should render Header component', async () => {
    await renderHeaderWithAuth()
  })

  it('should have a logo with Link to href </> and text <TodoNext>', async () => {
    const { getByRole } = await renderHeaderWithAuth()

    const logo = getByRole('link', { name: 'TodoNext' })

    expect(logo).toHaveAttribute('href', '/')
    expect(logo).toHaveTextContent('TodoNext')
  })

  it('should have a image with alt <Foto de perfil do usuário Iarlen Reis>', async () => {
    const { getByRole } = await renderHeaderWithAuth()

    const profileImage = getByRole('img', {
      name: 'Foto de perfil do usuário Iarlen Reis',
    })

    expect(profileImage).toHaveAttribute(
      'alt',
      'Foto de perfil do usuário Iarlen Reis',
    )
  })

  it('should have a link to href /profile', async () => {
    const { getByRole } = await renderHeaderWithAuth()

    const profileLink = getByRole('link', {
      name: 'Foto de perfil do usuário Iarlen Reis',
    })

    expect(profileLink).toHaveAttribute('href', '/profile')
  })

  it('should have a logout button', async () => {
    const { getByRole } = await renderHeaderWithAuth()

    const logoutButton = getByRole('button')

    expect(logoutButton).toBeInTheDocument()
  })
})

describe('Header component without auth', () => {
  beforeAll(() => {
    mockGetServerSession.mockResolvedValue(undefined)
  })
  it('should render Header component', async () => {
    await renderHeaderWithoutAuth()
  })

  it('should have a logo with Link to href </> and text <TodoNext>', async () => {
    const { getByRole } = await renderHeaderWithoutAuth()

    const logo = getByRole('link', { name: 'TodoNext' })

    expect(logo).toHaveAttribute('href', '/')
  })

  it('should not have a image', async () => {
    const { queryByRole } = await renderHeaderWithoutAuth()

    const profileImage = queryByRole('img')

    expect(profileImage).not.toBeInTheDocument()
  })

  it('should have a link to href </login>', async () => {
    const { getAllByRole } = await renderHeaderWithoutAuth()

    const loginLink = getAllByRole('link')[1]

    expect(loginLink).toHaveAttribute('href', '/login')
  })

  it('should have a link to href </register>', async () => {
    const { getAllByRole } = await renderHeaderWithoutAuth()

    const registerLink = getAllByRole('link')[2]

    expect(registerLink).toHaveAttribute('href', '/register')
  })
})
