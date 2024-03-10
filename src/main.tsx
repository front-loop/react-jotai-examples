import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from '@/components/app'
import '@/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <main className="bg-background text-foreground dark">
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>,
)
