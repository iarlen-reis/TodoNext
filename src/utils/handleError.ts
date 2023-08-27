interface IMessageProps {
  [key: string]: string
}

export const handleError = (error: string | undefined) => {
  if (!error) {
    return
  }

  const messages: IMessageProps = {
    401: 'Essa tarefa não está pública.',
    404: 'Tarefa não encontrada.',
    500: 'Ocorreu um erro interno, tente novamente.',
  }

  return messages[error]
}

export const getErrorCode = (error: string | undefined) => {
  if (!error) {
    return
  }
  return error.split(' ').reverse()[0]
}
