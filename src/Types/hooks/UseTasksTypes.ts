export interface ITasksProps {
  id: string
  title: string
  status: string
  dateConclusion: string
  description: string
  createdAt: Date
  color: string
  userId: string
  isPublic: boolean
}

export interface IFormProps {
  title: string
  dateConclusion: string
  description: string
}

export interface IUseTasksProps {
  finishTask: (id: string) => void
  deleteTask: (id: string) => void
  createTask: (task: IFormProps) => void
  handlePublicTask: (data: Pick<ITasksProps, 'isPublic' | 'id'>) => void
  loadingCreate: boolean
}
