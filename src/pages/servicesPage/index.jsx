import "./style.css";
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Description from "./components/description/description";
import { translate } from '../../shared/utils/translator'
import Image1 from "../../shared/assets/images/IMG_4536.jpg";
import { Services } from '../../shared/widgets/services'
import Patients from './components/patients'
// import DetailDescription from './components/detailDescription'

const services = [
  {
    title: "dentaltreatment",
    content: 'header.bottom.nav.option2.option1',
    images: [
      Image1,
      Image1
    ]
  },
  {
    title: "orthodontics",
    content: 'header.bottom.nav.option2.option2',
    images: [
      Image1,
      Image1
    ]
  },
  {
    title: "surgery",
    content: 'header.bottom.nav.option2.option3',
    images: [
      Image1,
      Image1
    ]
  },
  {
    title: "implantation",
    content: 'header.bottom.nav.option2.option4',
    images: [
      Image1,
      Image1
    ]
  },
  {
    title: "prosthetics",
    content: 'header.bottom.nav.option2.option5',
    images: [
      Image1,
      Image1
    ]
  },
  {
    title: "teethwhitening",
    content: 'header.bottom.nav.option2.option6',
    images: [
      Image1,
      Image1
    ]
  },
];


const ServicesPage = () => {
  const location = useLocation();
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    // Get the hash value from the URL and remove the '#' symbol
    const hashValue = location.hash.replace('#', '');

    // Find the service that matches the title from the hash
    const service = services.find(service => service.title === hashValue);

    // If no hash or matching service, set the first service as the default
    setCurrentService(service || services[0]);
  }, [location]);

  return (
    <main className='services-page-container'>
      {currentService ? (
        <div>
          {/*<h2>Current Service: {currentService.title}</h2>*/}
          {/*  Description section */}
          <Description title={translate(`servicesPage.${currentService.title}.title`)} description={translate(`servicesPage.${currentService.title}.description`)} symptoms={translate(`servicesPage.${currentService.title}.symptoms`)}/>
          {/*  Patients section*/}
          <Patients images={currentService.images} />
          {/*  Questions section*/}
          {/*  Services section global*/}
          <Services />
          {/*<DetailDescription />*/}
          {/* need or not DetailDescription section */}
        </div>
      ) : (
        <p>No services available.</p>
      )}

    </main>
  )
}

export default ServicesPage;
