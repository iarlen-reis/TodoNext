import { render } from '@testing-library/react'
import { HomeImage } from '@/components/HomeImage'
import '@testing-library/jest-dom'

const renderHomeImage = () => {
  return render(<HomeImage />)
}

describe('HomeImage component', () => {
  it('should render HomeImage component', () => {
    renderHomeImage()
  })

  it('should have a image with alt <imagem de um card de tarefa.>', () => {
    const { getByRole } = renderHomeImage()

    const image = getByRole('img')

    expect(image).toHaveAttribute('alt', 'imagem de um card de tarefa.')
  })
})
