import './styles/App.css'
import AppRouter from './routes/appRouter'
import { useEffect } from 'react'
import { setLanguage } from '../shared/utils/translator'

function App() {
  useEffect(() => {
    setLanguage('ua')
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
