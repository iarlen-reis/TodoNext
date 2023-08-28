import { useTasks } from '@/hooks/useTasks'
import { render } from '@testing-library/react'
import { MenuTools } from '@/components/MenuTools'
import { IUseTasksProps } from '@/Types/hooks/UseTasksTypes'
import { QueryClient, QueryClientProvider } from 'react-query'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(),
    usePathname: jest.fn(),
  }
})

jest.mock('../../../hooks/useTasks')

const mockUseTasks = useTasks as unknown as jest.Mock<
  Pick<IUseTasksProps, 'tasksLoading'>
>

const mockTasksLoading = false

mockUseTasks.mockReturnValue({
  tasksLoading: mockTasksLoading,
})

const renderMenuTools = () => {
  const client = new QueryClient()
  return render(
    <QueryClientProvider client={client}>
      <MenuTools />
    </QueryClientProvider>,
  )
}

describe('MenuTools component', () => {
  it('should render MenuTools component', () => {
    renderMenuTools()
  })

  it('should have a button to open the filter options', () => {
    const { getByRole } = renderMenuTools()

    const button = getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('should have a link with href </create>', () => {
    const { getByRole } = renderMenuTools()

    const createTaskLink = getByRole('link')

    expect(createTaskLink).toHaveAttribute('href', '/create')
  })
})
