import { useTasks } from '@/hooks/useTasks'
import { render } from '@testing-library/react'
import { ShowTasks } from '@/components/ShowTasks'
import { IUseTasksProps } from '@/Types/hooks/UseTasksTypes'
import { QueryClient, QueryClientProvider } from 'react-query'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

jest.mock('../../../hooks/useTasks')

const mockUseTasks = useTasks as unknown as jest.Mock<
  Pick<IUseTasksProps, 'tasks' | 'tasksLoading'>
>

mockUseTasks.mockReturnValue({
  tasksLoading: false,
  tasks: [
    {
      id: '1',
      title: 'Todo 1',
      dateConclusion: '2022-01-01',
      status: 'Pendente',
      color: '#ff0000',
      description: 'Descrição 1',
      isPublic: true,
      userId: '1',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Todo 2',
      dateConclusion: '2022-01-02',
      status: 'Concluída',
      color: '#beda45',
      description: 'Descrição 2',
      isPublic: false,
      userId: '1',
      createdAt: new Date(),
    },
  ],
})

const renderShowTasks = () => {
  const queryClient = new QueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      <ShowTasks />
    </QueryClientProvider>,
  )
}

describe('ShowTasks component', () => {
  it('should render ShowTasks component', () => {
    renderShowTasks()
  })

  it('should have a Task with text <Todo 1>, a button to delete task,date <01/01/2022>, status <Pendente> and a link with href to <task/1>', () => {
    const { getByText, getAllByRole } = renderShowTasks()

    const titleTask = getByText('Todo 1')
    const dateTask = getByText('01/01/2022')
    const statusTask = getByText('Pendente')
    const deleteTask = getAllByRole('button')[0]
    const linkTask = getAllByRole('link', { name: 'Detalhes' })[0]

    expect(titleTask).toBeInTheDocument()
    expect(dateTask).toBeInTheDocument()
    expect(statusTask).toBeInTheDocument()
    expect(deleteTask).toBeInTheDocument()
    expect(linkTask).toHaveAttribute('href', 'task/1')
    expect(linkTask).toHaveTextContent('Detalhes')
  })

  it('should have a Task with text <Todo 2>, a button to delete task, date <02/01/2022>, status <Concluída> and a link with href to <task/2>', () => {
    const { getByText, getAllByRole } = renderShowTasks()

    const titleTask = getByText('Todo 2')
    const dateTask = getByText('02/01/2022')
    const statusTask = getByText('Concluída')
    const deleteTask = getAllByRole('button')[1]
    const linkTask = getAllByRole('link', { name: 'Detalhes' })[1]

    expect(titleTask).toBeInTheDocument()
    expect(dateTask).toBeInTheDocument()
    expect(statusTask).toBeInTheDocument()
    expect(deleteTask).toBeInTheDocument()
    expect(linkTask).toHaveAttribute('href', 'task/2')
    expect(linkTask).toHaveTextContent('Detalhes')
  })
})
