import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
