import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient.tsx'
import type { FC, PropsWithChildren } from 'react'

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
