import { Outlet } from 'react-router-dom'
import { Header } from '../../shared/widgets/header'
import { Footer } from '../../shared/widgets/footer'
import './layout.css'
import Modal from '../../shared/widgets/modal/index.jsx'
import React, { useEffect, useState } from 'react'

export const Layout = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  }

  useEffect(() => {
    setModalOpen(true)
  }, [])

  return (
    <>
      {/*<Modal*/}
      {/*  isOpen={isModalOpen}*/}
      {/*  imageSrc="https://niskhodovski-clinic.online/media/IMG_2119.mp4"*/}
      {/*  onClose={toggleModal}*/}
      {/*/>*/}
      <div className="layout-wrapper">
        <Header />
        <div className="main-wrapper">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
