import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard*" element={<Dashboard />} />
      </Routes>
      <p className=" text-center fixed bottom-5 left-1/2 -translate-x-1/2 text-xs text-slate-400">@ 2024, Criado por Fast Order. Todos os direitos reservados.</p>
    </BrowserRouter>
  )
}
