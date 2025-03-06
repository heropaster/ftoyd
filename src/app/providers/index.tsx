import { ReactQueryProvider } from './reactQuery'
import type { FC, PropsWithChildren } from 'react'

export const Providers: FC<PropsWithChildren> = ({ children }) => <ReactQueryProvider>{children}</ReactQueryProvider>
