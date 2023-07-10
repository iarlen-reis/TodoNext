import { api } from '@/services/api'
import { ReactNode, createContext, useContext } from 'react'

interface IUserProps {
  name: string
  email: string
  password: string
}

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextProps {
  userRegister: (user: IUserProps) => Promise<void>
}

export const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const userRegister = async (user: IUserProps): Promise<void> => {
    const response = await api.post('/users', user)

    return response.data
  }

  return (
    <AuthContext.Provider
      value={{
        userRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
