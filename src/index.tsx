import { App } from './app'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { Toaster } from './components/ui/toaster'
import '../app/globals.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <>
    <App />
    <Toaster />
  </>
)
