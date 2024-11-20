import './style.css'
import HeadDoctor from './components/headDoctor'
import InnovativeMethods from './components/innovativeMethods'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'
import DoctorsSection from '../../shared/widgets/doctorsSection/ui/doctorsSection'

const AboutPage = () => {
  return (
    <>
      <main className="about-page-container">
        {/* <HeadDoctor /> */}
        <InnovativeMethods />
        <DoctorsSection />
        <MapSection />
        {/*  InnovativeMethods section*/}
        {/*  Contacts section global*/}
      </main>
    </>
  )
}

export default AboutPage
