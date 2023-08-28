import { render } from '@testing-library/react'
import { Footer } from '@/components/Footer'
import '@testing-library/jest-dom'

const renderFooter = () => {
  return render(<Footer />)
}

describe('Footer component', () => {
  it('should render Footer component', () => {
    renderFooter()
  })

  it('should have a text with value <© TodoNext 2023>', () => {
    const { getByText } = renderFooter()

    const footerCopyright = getByText('© TodoNext 2023')

    expect(footerCopyright).toBeInTheDocument()
  })

  it('should have a text with value <Desenvolvido por>', () => {
    const { getByText } = renderFooter()

    const footerDesenvolvedor = getByText('Desenvolvido por')

    expect(footerDesenvolvedor).toBeInTheDocument()
  })

  it('should have a link with href <https://github.com/iarlen-reis> and text <Iarlen Reis>', () => {
    const { getByRole } = renderFooter()

    const linkGithub = getByRole('link', { name: 'Iarlen Reis' })

    expect(linkGithub).toHaveAttribute('href', 'https://github.com/iarlen-reis')
    expect(linkGithub).toHaveTextContent('Iarlen Reis')
  })
})
