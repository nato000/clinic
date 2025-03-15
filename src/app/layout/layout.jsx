import { Outlet } from 'react-router-dom'
import { Header } from '../../shared/widgets/header'
import { Footer } from '../../shared/widgets/footer'
import './layout.css'
import Modal from '../../shared/widgets/modal/index.jsx'
import React, { useEffect, useState } from 'react'
import Image from "../../shared/assets/images/IMG_3648.webp"
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
      <Modal
        isOpen={isModalOpen}
        imageSrc={Image}
        onClose={toggleModal}
      />
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
