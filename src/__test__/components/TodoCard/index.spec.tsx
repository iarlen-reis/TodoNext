import { TodoCard } from '@/components/TodoCard'
import { useTasks } from '@/hooks/useTasks'
import { render, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IUseTasksProps } from '@/Types/hooks/UseTasksTypes'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

jest.mock('../../../hooks/useTasks')

const mockUseTasks = useTasks as unknown as jest.Mock<
  Pick<IUseTasksProps, 'deleteTask'>
>

const mockDeleteTask = jest.fn()

mockUseTasks.mockReturnValue({
  deleteTask: mockDeleteTask,
})

const renderTodoCard = async () => {
  const queryClient = new QueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      <TodoCard
        id="1"
        title="Todo 1"
        dateConclusion="2022-01-01"
        status="Pendente"
        color="#ff0000"
      />
      ,
    </QueryClientProvider>,
  )
}

describe('TodoCard component', () => {
  it('should render TodoCard component', async () => {
    await renderTodoCard()
  })

  it('should have a title with text <Todo 1>', async () => {
    const { getByText } = await renderTodoCard()

    const title = getByText('Todo 1')

    expect(title).toBeInTheDocument()
  })

  it('should have a button delete and when clicked it should call the <deleteTask> function with the id <"1">', async () => {
    const { getByRole } = await renderTodoCard()

    const button = getByRole('button')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(mockDeleteTask).toBeCalledWith('1')
  })

  it('should have a date with text <01/01/2022>', async () => {
    const { getByText } = await renderTodoCard()

    const date = getByText('01/01/2022')

    expect(date).toBeInTheDocument()
  })

  it('should have a status with text <Pendente>', async () => {
    const { getByText } = await renderTodoCard()

    const status = getByText('Pendente')

    expect(status).toBeInTheDocument()
  })

  it('should have a link with href <task/1> and text <Detalhes>', async () => {
    const { getByRole } = await renderTodoCard()

    const detailsLink = getByRole('link')

    expect(detailsLink).toHaveAttribute('href', 'task/1')
    expect(detailsLink).toHaveTextContent('Detalhes')
  })
})
