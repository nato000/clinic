import { translate } from '../../shared/utils/translator'
import CustomAccordion from '../../shared/widgets/accordion/ui/accordion'
import Contacts from '../../shared/widgets/contacts/ui/contacts'
import Heading from '../../shared/widgets/heading/ui/heading'
import Services from '../../shared/widgets/services/ui/services'
import './style.css'

const PriceListPage = () => {
  const accordionData = [
    {
      title: 'Niskhodovskiy Clinic',
      content: [
        ['Консультація', '1500 грн'],
        ['Професійна чистка', '3500 грн'],
        ['Періо-гігієна	', '5500 грн\n6500 грн'],
        ['Лазерне відбілювання (апаратом Biolase epic X)', '6000 грн'],
        ['Фотополімерний вірнір', '10000 грн'],
        ['Лікування карієсу', '4500 грн\n5500 грн'],
        ['Лікування каналів (під мікроскопом)', '100'],
        ['Перелікування каналів', '100'],
        ['Корекція ясен (в межах одного зуба)', '100'],
        ['Дизайн посмішки (MockUp) 1 зуб', '100'],
        ['Керамічна реставрація (накладка, вінір, коронка)', '100'],
        ['Видалення зубів', '100'],
        ['Імплантат (Штрауман, Швейцарія)', '100'],
        ['Медикаментозний сон', '100'],
        ['Лазерна корекція слизової оболонки (за курс: 3 візити)', '100'],
        ['Фрезерована коронка (без нанесення)', '100'],
      ],
    },
    {
      title: 'Опції ПриватБанка',
      content: [
        "Привіт! Маємо чудові новини для наших пацієнтів!'",
        'Стоматологічна клініка NISKHODOVSKIY CLINIC давно співпрацює з ПриватБанком. 💳 Тепер ви можете скористатися опцією "Оплата частинами" або миттєвим кредитуванням для будь-яких наших послуг. Не відкладайте своє здоров\'я на потім — доглядайте за своїми зубами зараз, платіть зручно та без зайвих витрат!',
        '👉 Щоб дізнатися більше записуйтесь на прийом!',
        "Завітайте та переконайтеся, що здоров'я вашої посмішки — це легко та доступно з NISKHODOVSKIY CLINIC та ПриватБанком!",
      ],
    },
  ]

  return (
    <main className="main-content">
      <section className="prices">
        <div className="prices-wrapper">
          <div className="container prices-container">
            <Heading
              level={2}
              text={translate('priceListPage.title')}
              style={{ color: 'white' }}
            />
          </div>
        </div>
        <div className="container">
          <div className="prices-accordion">
            <CustomAccordion panels={accordionData} />
          </div>{' '}
        </div>
      </section>
      <Services />
      <section className="map-section">
        <div className="map"></div>
        <div className="container contacts-container">
          <Contacts />
        </div>
      </section>
    </main>
  )
}

export default PriceListPage
