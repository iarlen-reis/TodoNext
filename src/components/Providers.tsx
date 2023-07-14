'use client'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from '@/contexts/authContext'
import { IProvidersProps } from '@/Types/components/ProvidersTypes'
import { FilterProvider } from '@/contexts/filterContext'

export const Providers = ({ children }: IProvidersProps) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <AuthProvider>
          <SessionProvider>{children}</SessionProvider>
        </AuthProvider>
      </FilterProvider>
    </QueryClientProvider>
  )
}
