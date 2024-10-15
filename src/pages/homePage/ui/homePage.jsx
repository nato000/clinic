import { Header } from '../../../widgets/header'
import './homePage.css'
import { Footer } from '../../../widgets/footer'
import { useEffect } from 'react'

export const HomePage = () => {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1) // Get the section ID from the hash
        const element = document.getElementById(sectionId) // Find the element by ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }) // Scroll smoothly to the section
        }
      }
    }

    handleHashChange() // Call initially on mount

    window.addEventListener('hashchange', handleHashChange) // Add listener for hash changes
    return () => window.removeEventListener('hashchange', handleHashChange) // Cleanup listener on unmount
  }, [])
  return (
    <>
      <Header />
      <main className="main-content">
   
      </main>
      <Footer />
    </>
  )
}

export default HomePage
