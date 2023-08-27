import { getErrorCode, handleError } from '@/utils/handleError'
import DrangerImage from '/public/Danger.png'
import Image from 'next/image'
import Link from 'next/link'
interface ITaskErrorProps {
  error: string
}
const TaskError = ({ error }: ITaskErrorProps) => {
  const errorCode = getErrorCode(error)
  const errorMessage = handleError(errorCode)
  return (
    <div className="m-auto mt-4 flex w-full flex-col items-center gap-4 text-center">
      <h1 className="font-title text-2xl text-zinc-800">{errorMessage}</h1>
      <Image
        src={DrangerImage}
        alt="Tarefa não encontrada ou privada."
        width={200}
        height={200}
      />
      <Link
        href="/"
        className="text-md font-title text-blue-500 transition-all hover:text-blue-700 hover:underline md:text-lg"
      >
        Volte à página inicial
      </Link>
    </div>
  )
}

export default TaskError
