import './style.css'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Description from './components/description/description'
import { translate } from '../../shared/utils/translator'
import { Services } from '../../shared/widgets/services'
import Patients from './components/patients'
import HeroSection from '../../shared/widgets/heroSection/ui/heroSection'
import AppointmentBtn from '../../shared/widgets/appointment/ui/appointmentBtn'
import CallToAction from '../../shared/widgets/callToAction/ui/callToAction'
import MapSection from '../../shared/widgets/mapSection/ui/mapSection'
import DoctorsSection from '../../shared/widgets/doctorsSection/ui/doctorsSection'
import CustomAccordion from '../../shared/widgets/accordion/ui/accordion'
import Heading from '../../shared/widgets/heading/ui/heading'

const services = [
  {
    title: 'dentaltreatment',
    content: 'header.bottom.nav.option2.option1',
    images: ['caries-1', 'caries-2'],
    prices: [
      "Лікування зубів"
    ],
  },
  {
    title: 'orthodontics',
    content: 'header.bottom.nav.option2.option2',
    images: ['composyt'],
    prices: ['Ортодонтія'],
  },
  {
    title: 'surgery',
    content: 'header.bottom.nav.option2.option3',
    images: ['viniry-1', 'viniry-2', 'viniry-3'],
    prices: ['Хірургічна пародонтологія', "Парадонтологія"],
  },
  {
    title: 'implantation',
    content: 'header.bottom.nav.option2.option4',
    images: ['IMG_4536'],
    prices: ['Хірургія'],
  },
  {
    title: 'prosthetics',
    content: 'header.bottom.nav.option2.option5',
    images: ['viniry-4'],
    prices: ['Ортопедія'],
  },
  {
    title: 'teethwhitening',
    content: 'header.bottom.nav.option2.option6',
    images: ['otbel-1', 'otbel-2'],
    prices: ['Відбілювання'],
  },
]

const ServicesPage = () => {
  const location = useLocation()
  const [currentService, setCurrentService] = useState(null)
  const [accordionData, setAccordionData] = useState([])

  useEffect(() => {
    // Get the hash value from the URL and remove the '#' symbol
    const hashValue = location.hash.replace('#', '')

    // Find the service that matches the title from the hash
    const service = services.find((service) => service.title === hashValue)

    // If no hash or matching service, set the first service as the default
    setCurrentService(service || services[0])
  }, [location])

  useEffect(() => {
    if (currentService) {
      const priceListUnreducted = translate('priceListPage.accordion') || [] // Ensure it's an array
      const priceList = priceListUnreducted[0]?.content // Ensure `content` exists

      if (priceList) {
        const filteredPrices = currentService.prices.reduce(
          (acc, priceName) => {
            if (priceList[priceName]) {
              acc[priceName] = priceList[priceName]
            }
            return acc
          },
          {}
        )

        const formattedData = Object.entries(filteredPrices).map(
          ([key, value]) => ({
          title: key,
          content: value.reduce((acc, item) => {
            acc[item.title] = [{
              title: "",
              row: item.row.map(row => ({
                description: row.description,
                value: row.value
              }))
            }]
            return acc;
          }, {})
        }));
        console.log("formattedData", formattedData);
        setAccordionData(formattedData)
      }
    }
  }, [currentService])

  return (
    <>
      <main className="services-page-container">
        {currentService ? (
          <>
            <HeroSection
              title={translate(`servicesPage.${currentService.title}.title`)}
              // description={translate('homePage.hero.description')}
              sectionClass={`hero-background--${currentService.title}`}
            >
              <AppointmentBtn />
            </HeroSection>
            <Description
              title={translate(`servicesPage.${currentService.title}.title`)}
              description={translate(
                `servicesPage.${currentService.title}.description`
              )}
              symptoms={translate(
                `servicesPage.${currentService.title}.symptoms`
              )}
            />

            <section className="price-section">
              <div className="container price-section-container">
                <Heading
                  level={2}
                  text={translate(`servicesPage.priceSection.title`)}
                />
                <CustomAccordion panels={accordionData} />
              </div>
            </section>

            <CallToAction />

            {/*  Patients section*/}
            <Patients images={currentService.images} />
            {/*  Questions section*/}
            {/*  Services section global*/}
            <Services />
            {/*<DetailDescription />*/}
            {/* need or not DetailDescription section */}
          </>
        ) : (
          <p>No services available.</p>
        )}
        <DoctorsSection />
        <MapSection />
      </main>
    </>
  )
}

export default ServicesPage


  // [
  // {
  //   "title": "Niskhodovskiy Clinic",
  //   "content": {
  //     "Перший прийом": [
  //       {
  //         "title": "Консультація",
  //         "row": [
  //           {
  //             "description": "Огляд\nСканування зубів\nФотопротокол зубів\nСкладання плану лікування з калькуляцією",
  //             "value": "1500 грн"
  //           }
  //         ]
  //       }
  //     ],
  //     "Парадонтологія": [
  //       {
  //         "title": "Професійна чистка",
  //         "row": [
  //           {
  //             "description": "Зняття зубних відкладень",
  //             "value": ""
  //           },
  //           {
  //             "description": "Першого ступеню",
  //             "value": "3000 грн"
  //           },
  //           {
  //             "description": "Другого ступеню",
  //             "value": "3500 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Періо-гігєна",
  //         "row": [
  //           {
  //             "description": "Першого ступеню",
  //             "value": "5500 грн"
  //           },
  //           {
  //             "description": "Другого ступеню",
  //             "value": "6500 грн"
  //           }
  //         ]
  //       }
  //     ],
  //     "Лікування зубів": [
  //       {
  //         "title": "Лікування карієсу",
  //         "row": [
  //           {
  //             "description": "Бокова група зубів",
  //             "value": "4 500 грн"
  //           },
  //           {
  //             "description": "Фронтальная група зубів",
  //             "value": "5 500 грн"
  //           },
  //           {
  //             "description": "Прийшийкова реставрація",
  //             "value": "4 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Лікування каналів (Ендодонтія)",
  //         "row": [
  //           {
  //             "description": "1 канального зуба",
  //             "value": "10 000 грн"
  //           },
  //           {
  //             "description": "2 канального зуба",
  //             "value": "15 000 грн"
  //           },
  //           {
  //             "description": "3 канального і більше зуба",
  //             "value": "18 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Перелікування каналів (Ендодонтія)",
  //         "row": [
  //           {
  //             "description": "1 канального зуба",
  //             "value": "15 000 грн"
  //           },
  //           {
  //             "description": "2 канального зуба",
  //             "value": "18 000 грн"
  //           },
  //           {
  //             "description": "3 канального і більше зуба",
  //             "value": "20 000 грн"
  //           }
  //         ]
  //       }
  //     ],
  //     "Хірургічна пародонтологія": [
  //       {
  //         "title": "Естетична пластика ясен фронтальної ділянки",
  //         "row": [
  //           {
  //             "description": "Першого ступня",
  //             "value": "6 000 грн"
  //           },
  //           {
  //             "description": "Другого ступня",
  //             "value": "8 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Хірургічне лікування парадантиту",
  //         "row": [
  //           {
  //             "description": "одного міжзубного проміжку",
  //             "value": "2 500 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Хірургічне закриття рецесії",
  //         "row": [
  //           {
  //             "description": "1 зуба",
  //             "value": "8 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Подовження клінічної коронки",
  //         "row": [
  //           {
  //             "description": "1 зуба ???????",
  //             "value": "4 800 грн"
  //           }
  //         ]
  //       }
  //     ],
  //     "Відбілювання": [
  //       {
  //         "title": "",
  //         "row": [
  //           {
  //             "description": "Лазерне",
  //             "value": "6 000 грн"
  //           },
  //           {
  //             "description": "Набір для домашнього відбілювання (2 капи + шприц)",
  //             "value": "13 600 грн"
  //           }
  //         ]
  //       }
  //     ],
  //     "Ортопедія": [
  //       {
  //         "title": "Дизайн посмішки(MockUp)",
  //         "row": [
  //           {
  //             "description": "1 зуб",
  //             "value": "1 800 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "",
  //         "row": [
  //           {
  //             "description": "РОМ (вкладка)",
  //             "value": "6 500 грн"
  //           },
  //           {
  //             "description": "Металокоромічна коронка",
  //             "value": "13 500 грн"
  //           },
  //           {
  //             "description": "Фрезирована коронка без нанесення",
  //             "value": "26 500 грн"
  //           },
  //           {
  //             "description": "Фрезирована коронка з нанесенням",
  //             "value": "35 500 грн"
  //           },
  //           {
  //             "description": "Рефрактор (ручна робота)",
  //             "value": "44 500 грн"
  //           },
  //           {
  //             "description": "Тимчасова коронка",
  //             "value": "4 000 грн"
  //           },
  //           {
  //             "description": "Тимчасова коронка на імпланті",
  //             "value": "8 500 грн"
  //           },
  //           {
  //             "description": "Коронка із диоксид цирконію ?????",
  //             "value": "33 000 грн"
  //           },
  //           {
  //             "description": "Капа при бруксизмі",
  //             "value": "8 900 грн"
  //           },
  //           {
  //             "description": "Сканування (2 щелепи)",
  //             "value": "2 000 грн"
  //           },
  //           {
  //             "description": "Адгезивний міст",
  //             "value": "7 500 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Виготовлення повного знімного протезу",
  //         "row": [
  //           {
  //             "description": "BPS (1 щелепа)",
  //             "value": "25 500 грн"
  //           },
  //           {
  //             "description": "частковий (1 щелепа)",
  //             "value": "19 500 грн"
  //           },
  //           {
  //             "description": "частковий (до 3-х зубів)",
  //             "value": "12 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Шинування зубів",
  //         "row": [
  //           {
  //             "description": "метал (1 зуб)",
  //             "value": "800 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Тимчасова конструкція на імплантах",
  //         "row": [
  //           {
  //             "description": "ALL IN six",
  //             "value": "60 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Постійна конструкція на імплантах",
  //         "row": [
  //           {
  //             "description": "ALL IN six",
  //             "value": "380 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Депрограматор",
  //         "row": [
  //           {
  //             "description": "діагностика положення щелеп",
  //             "value": "16 500 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Контрольне пришліфування окклюзії",
  //         "row": [
  //           {
  //             "description": "тимчасове",
  //             "value": "2 500 грн"
  //           },
  //           {
  //             "description": "постійне",
  //             "value": "3 500 грн"
  //           }
  //         ]
  //       }
  //     ],
  //     "Хірургія": [
  //       {
  //         "title": "Видалення зубів",
  //         "row": [
  //           {
  //             "description": "складність 1",
  //             "value": "3 200 грн"
  //           },
  //           {
  //             "description": "складність 2",
  //             "value": "5 200 грн"
  //           },
  //           {
  //             "description": "складність 3",
  //             "value": "6 400 грн"
  //           },
  //           {
  //             "description": "атипове (просте)",
  //             "value": "8 500 грн"
  //           },
  //           {
  //             "description": "атипове (складне)",
  //             "value": "10 500 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "",
  //         "row": [
  //           {
  //             "description": "Колагеновий конус",
  //             "value": "1 800 грн"
  //           },
  //           {
  //             "description": "Трансплантація мяких тканин",
  //             "value": "6 800 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Синусліфтінг",
  //         "row": [
  //           {
  //             "description": "відкритий",
  //             "value": "24 000 грн"
  //           },
  //           {
  //             "description": "закритий",
  //             "value": "10 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "",
  //         "row": [
  //           {
  //             "description": "Кісткова пластика біля одного зубу ????",
  //             "value": "7 000 грн"
  //           },
  //           {
  //             "description": "Кістковий матеріал",
  //             "value": "11 000 грн"
  //           },
  //           {
  //             "description": "Забір і встановлення кісткового аутотрансплантата",
  //             "value": "24 000 грн"
  //           },
  //           {
  //             "description": "Кістковопластична мембрана",
  //             "value": "13 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Імплантація",
  //         "row": [
  //           {
  //             "description": "MegaGen (Корея)",
  //             "value": "19 500 грн"
  //           },
  //           {
  //             "description": "JD implant (Італія)",
  //             "value": "27 000 грн"
  //           },
  //           {
  //             "description": "Straumann (Швейцарія)",
  //             "value": "40 000 грн"
  //           },
  //           {
  //             "description": "Straumann Active (Швейцарія)",
  //             "value": "44 000 грн"
  //           },
  //           {
  //             "description": "Цирконієвий Straumann (Швейцарія)",
  //             "value": "88 000 грн"
  //           },
  //           {
  //             "description": "Навігаційний шаблон",
  //             "value": "7 500 грн"
  //           },
  //           {
  //             "description": "2-й етап - формувач ясен",
  //             "value": "4 000 грн"
  //           },
  //           {
  //             "description": "індивідуальний дотримувач ясен",
  //             "value": "6 000 грн"
  //           },
  //           {
  //             "description": "Вилучення інтегрованого імпланта",
  //             "value": "6 000 грн"
  //           },
  //           {
  //             "description": "Aprf - плазма крові",
  //             "value": "2 800 грн"
  //           },
  //           {
  //             "description": "Комплексна хірургічна операція ALL IN six MegaGen",
  //             "value": "140 000 грн"
  //           },
  //           {
  //             "description": "Комплексна хірургічна операція ALL IN six JD",
  //             "value": "175 000 грн"
  //           },
  //           {
  //             "description": "Комплексна хірургічна операція ALL IN six Straumann",
  //             "value": "195 000 грн"
  //           }
  //         ]
  //       }
  //     ],
  //     "Ортодонтія": [
  //       {
  //         "title": "Зняття та ретенційний період",
  //         "row": [
  //           {
  //             "description": "фіксація ретейнера, 6 зубів",
  //             "value": "6 000 грн"
  //           },
  //           {
  //             "description": "зняття брекет-системи з виготовленням ретенційної капи",
  //             "value": "6 000 грн"
  //           },
  //           {
  //             "description": "зняття брекет-системи",
  //             "value": "3 000 грн"
  //           },
  //           {
  //             "description": "підклеювання ретейнера, 1 зуб",
  //             "value": "800 грн"
  //           },
  //           {
  //             "description": "ретенційна капа",
  //             "value": "4 500 грн"
  //           },
  //           {
  //             "description": "зняття ретейнера",
  //             "value": "2 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Преортодонтичне лікування",
  //         "row": [
  //           {
  //             "description": "лікування міофункціональним апаратом",
  //             "value": "8 500 грн"
  //           },
  //           {
  //             "description": "виготовлення знімного ортодонтично го апарату (роз’єднувальна пластина)",
  //             "value": "10 000 грн"
  //           },
  //           {
  //             "description": "виготовлення знімного ортодонтично го апарату (пластинка)",
  //             "value": "18 000 грн"
  //           },
  //           {
  //             "description": "апарат Marco Rosa",
  //             "value": "20 000 грн"
  //           },
  //           {
  //             "description": "апарат для розшириння MSE",
  //             "value": "50 000 грн"
  //           },
  //           {
  //             "description": "суглобова шина",
  //             "value": "15 000 грн"
  //           },
  //           {
  //             "description": "корекція суглобової шини",
  //             "value": "1 000 грн"
  //           },
  //           {
  //             "description": "депрограматор",
  //             "value": "9 500 грн"
  //           },
  //           {
  //             "description": "губний бампер (без вартості кілець)",
  //             "value": "5 000 грн"
  //           },
  //           {
  //             "description": "термінове виготовлення апарату",
  //             "value": "2 500 грн"
  //           },
  //           {
  //             "description": "лицева маска + еластики",
  //             "value": "8 000 грн"
  //           },
  //           {
  //             "description": "бюгель з кільцями",
  //             "value": "5 500 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Лікування елайнерами",
  //         "row": [
  //           {
  //             "description": "лікування елайнерами Invisalign",
  //             "value": "270 000 грн"
  //           },
  //           {
  //             "description": "діагностика та моделювання лікування елайнерами",
  //             "value": "33 500 грн"
  //           },
  //           {
  //             "description": "лікування власними елайнерами LIGHT",
  //             "value": "125 000 грн"
  //           },
  //           {
  //             "description": "лікування власними елайнерами MEDIUM",
  //             "value": "160 000 грн"
  //           },
  //           {
  //             "description": "лікування власними елайнерами HARD",
  //             "value": "210 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Консультативний прийом",
  //         "row": [
  //           {
  //             "description": "консультація",
  //             "value": "1 500 грн"
  //           },
  //           {
  //             "description": "консультація дитяча (до 10 років)",
  //             "value": "1 000 грн"
  //           },
  //           {
  //             "description": "консультація огляд",
  //             "value": "1 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Діагностика",
  //         "row": [
  //           {
  //             "description": "ортодонтична (фотопротокол, діагно- стичні моделі, аналіз ТРГ, КТ/ОПТГ, складання плану лікування)",
  //             "value": "4 000 грн"
  //           },
  //           {
  //             "description": "зняття альгінатного відбитку (1 щелепа)",
  //             "value": "900 грн"
  //           },
  //           {
  //             "description": "зняття відбитку силіконом (1 щелепа)",
  //             "value": "1 100 грн"
  //           },
  //           {
  //             "description": "сканування зубів",
  //             "value": "3 000 грн"
  //           }
  //         ]
  //       },
  //       {
  //         "title": "Ортодонтія",
  //         "row": [
  //           {
  //             "description": "фіксація металевої лігатурної брекет-системи на 1 щелепу",
  //             "value": "35 000 грн"
  //           },
  //           {
  //             "description": "фіксація керамічної лігатурної брекет-системи на 1 щелепу",
  //             "value": "40 000 грн"
  //           },
  //           {
  //             "description": "фіксація самолігуючої металевої брекет-системи на 1 щелепу",
  //             "value": "45 000 грн"
  //           },
  //           {
  //             "description": "фіксація самолігуючої керамічної брекет-системи на 1 щелепу",
  //             "value": "50 000 грн"
  //           },
  //           {
  //             "description": "фіксація часткової брекет системи",
  //             "value": "20 000 грн"
  //           },
  //           {
  //             "description": "активація брекет системи",
  //             "value": "3 300 грн"
  //           },
  //           {
  //             "description": "заміна дуги +активація брекет системи",
  //             "value": "3 000 грн"
  //           },
  //           {
  //             "description": "підклеювання брекета",
  //             "value": "800 грн"
  //           },
  //           {
  //             "description": "підклеювання металевого брекета з заміною на новий",
  //             "value": "900 грн"
  //           },
  //           {
  //             "description": "підклеювання керамічного брекета з заміною на новий",
  //             "value": "1 200 грн"
  //           },
  //           {
  //             "description": "підклеювання нового брекета метал самолігуючий",
  //             "value": "2 500 грн"
  //           },
  //           {
  //             "description": "підклеювання нового брекета кераміка самолігуючий",
  //             "value": "3 000 грн"
  //           },
  //           {
  //             "description": "цементування ортодонтичного кільця",
  //             "value": "800 грн"
  //           },
  //           {
  //             "description": "цементування кільця з заміною на нове",
  //             "value": "1 100 грн"
  //           },
  //           {
  //             "description": "ортодонтична кнопка",
  //             "value": "700 грн"
  //           },
  //           {
  //             "description": "видача еластичних тяг",
  //             "value": "500 грн"
  //           },
  //           {
  //             "description": "встановлення сепараційних кілець",
  //             "value": "800 грн"
  //           },
  //           {
  //             "description": "сканування зубів",
  //             "value": "2 000 грн"
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // },
  //   {
  //     "title": "Опції ПриватБанка",
  //     "content": {
  //       "Привіт! Маємо чудові новини для наших пацієнтів!": [
  //         {
  //           "title": "Стоматологічна клініка NISKHODOVSKIY CLINIC давно співпрацює з ПриватБанком. 💳 Тепер ви можете скористатися опцією \"Оплата частинами\" або миттєвим кредитуванням для будь-яких наших послуг. Не відкладайте своє здоров ' я на потім — доглядайте за своїми зубами зараз, платіть зручно та без зайвих витрат!",
  //           "row": [
  //             {
  //               "description": "",
  //               "value": ""
  //             }
  //           ]
  //         }
  //       ],
  //       "👉 Щоб дізнатися більше записуйтесь на прийом!": [
  //         {
  //           "title": "Завітайте та переконайтеся, що здоров'я вашої посмішки — це легко та доступно з NISKHODOVSKIY CLINIC та ПриватБанком!",
  //           "row": [
  //             {
  //               "description": "",
  //               "value": ""
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   }
  // ]
