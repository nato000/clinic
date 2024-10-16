import React, { useEffect } from 'react'
import './style.css'
import Contacts from '../../shared/widgets/contacts/ui/contacts'

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
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, atque
        neque ipsam officia cum sapiente ipsa delectus impedit illo modi, sint
        blanditiis laborum quos saepe quibusdam. Sed esse iste architecto!
      </p>
      <section className="map-section">
        <div className="map"></div>
        <Contacts />
      </section>
      {/*  Hero section*/}
      {/*  ReasonsToContact section*/}
      {/*  Services section global*/}
      {/*  Contacts section global*/}
    </main>
  )
}

export default HomePage
