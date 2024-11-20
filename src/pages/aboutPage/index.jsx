import './style.css'
import HeadDoctor from './components/headDoctor'
import InnovativeMethods from './components/innovativeMethods'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'

const AboutPage = () => {
  return (
    <>
      <main className="about-page-container">
        <HeadDoctor />
        <InnovativeMethods />
        <MapSection />

        {/*  InnovativeMethods section*/}
        {/*  Contacts section global*/}
      </main>
    </>
  )
}

export default AboutPage
