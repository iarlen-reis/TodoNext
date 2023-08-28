import { render } from '@testing-library/react'
import { HomeTitle } from '@/components/HomeTitle'
import '@testing-library/jest-dom'

const renderHomeTitle = () => {
  return render(<HomeTitle />)
}

describe('HomeTitle component', () => {
  it('should render HomeTitle component', () => {
    renderHomeTitle()
  })

  it('should have a text with value <TodoNext!>', () => {
    const { getByText } = renderHomeTitle()

    const subTitle = getByText('TodoNext!')

    expect(subTitle).toHaveTextContent('TodoNext!')
  })

  it('should have a text with value <Uma nova maneira de gerenciar tarefas>', () => {
    const { getByText } = renderHomeTitle()

    const title = getByText('Uma nova maneira de gerenciar tarefas')

    expect(title).toHaveTextContent('Uma nova maneira de gerenciar tarefas')
  })
})
