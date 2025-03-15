import 'index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'app/App.tsx'
import { Providers } from 'app/providers'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
