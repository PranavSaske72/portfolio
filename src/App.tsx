import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function RedirectHandler() {
  const navigate = useNavigate()
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('spa_redirect')
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('spa_redirect')
      navigate(redirectPath, { replace: true })
    }
  }, [navigate])
  return null
}

export function App() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
