import React, { useEffect } from 'react'
import "./style.css";

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
    <main className="main-content">
    {/*  Hero section*/}
    {/*  ReasonsToContact section*/}
    {/*  Services section global*/}
    {/*  Contacts section global*/}
    </main>
  )
}

export default HomePage
