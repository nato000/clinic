import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import './accordion.css'

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
    className="custom-accordion"
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} className="custom-accordion-summary" />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const CustomAccordion = ({ panels }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className="custom-accordion-container">
      {panels.map((panel, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            expandIcon={
              expanded === `panel${index}` ? (
                <Typography variant="h6">-</Typography>
              ) : (
                <Typography variant="h6">+</Typography>
              )
            }
          >
            <Typography>{panel.title}</Typography>
          </AccordionSummary>
          <AccordionDetails className="custom-accordion-details">
            {typeof panel.content === 'object' &&
            !Array.isArray(panel.content) ? (
              // Content is an object with categories
              Object.entries(panel.content).map(
                ([category, items], categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="custom-accordion-category"
                  >
                    <Typography
                      variant="h6"
                      className="custom-accordion-category-title"
                    >
                      {category}
                    </Typography>
                    {items.map((item, itemIndex) => (
                      <div key={itemIndex} className="custom-accordion-item">
                        <Typography className="custom-accordion-item-title">
                          {item.title}
                        </Typography>
                        {
                          // console.log('item', item.row)
                          item.row.map((item, itemIndex) => (
                            <div
                              className="custom-accordion-item-wrapped"
                              key={itemIndex}
                            >
                              <Typography className="custom-accordion-item-wrapped-title">
                                {item.description}
                              </Typography>
                              <Typography className="custom-accordion-item-wrapped-value">
                                {item.value}
                              </Typography>
                            </div>
                          ))
                        }
                        <Typography className="custom-accordion-item-value">
                          {item.value}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )
              )
            ) : Array.isArray(panel.content) ? (
              // Content is an array of title-value pairs
              panel.content.map((item, itemIndex) => (
                <div key={itemIndex} className="custom-accordion-item">
                  <Typography className="custom-accordion-item-title">
                    {item.title}
                  </Typography>

                  <Typography className="custom-accordion-item-value">
                    {item.value}
                  </Typography>
                </div>
              ))
            ) : (
              <Typography className="custom-accordion-item">
                {panel.content}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

CustomAccordion.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object, // For category-style content
        PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
          })
        ),
      ]).isRequired,
    })
  ).isRequired,
}

export default CustomAccordion
// lorem
//   lotrem1
//     -lorem1.1
//     -lorem1.2  1000
//     -lorem1.3
//   lotrem2
//     -lorem2.1
//     -lorem2.2
//     -lorem2.3
// "Консультація": [
//   { "title": "Огляд", "value": "1 500 грн" },
//   { "title": "Сканування зубів", "value": "1 500 грн" },
//   { "title": "Фотопротокол зубів", "value": "1 500 грн" },
//   {
//     "title": "Складання плану лікування з калькуляцією",
//     "value": "1 500 грн"
//   }
// ],
// "Професійна чистка": [
//   {
//     "title": "Ультразвукове чищення твердого нальоту (каменю)",
//     "value": "3 500 грн"
//   }
// ],
// "Періо-гігієна": [
//   { "title": "Першого ступеню", "value": "5 500 грн" },
//   { "title": "Другого ступеню", "value": "6 500 грн" }
// ],
// "Лазерне відбілювання": [
//   { "title": "апаратом Biolase epic X", "value": "6 000 грн" }
// ],
// "Фотополімерний вінір": [{ "title": "інше", "value": "10 000 грн" }],
// "Лікування карієсу": [
//   { "title": "Бічні зуби", "value": "4 500 грн" },
//   { "title": "Передні зуби", "value": "5 500 грн" }
// ],
// "Лікування каналів (під мікроскопом)": [
//   { "title": "1 к/к", "value": "10 000 грн" },
//   { "title": "2 к/к", "value": "15 000 грн" },
//   { "title": "3 к/к і більше", "value": "18 000 грн" }
// ],
// "Перелікування каналів": [
//   { "title": "1 к/к", "value": "15 000 грн" },
//   { "title": "2 к/к", "value": "18 000 грн" },
//   { "title": "3 к/к і більше", "value": "20 000 грн" }
// ],
// "Корекція ясен": [
//   { "title": "в межах одного зуба", "value": "1 000 грн" }
// ],
// "Дизайн посмішки (MockUp)": [
//   { "title": "1 зуб", "value": "1 800 грн" }
// ],
// "Керамічна реставрація": [
//   { "title": "РОМ ( вкладка)", "value": "6 500 грн" },
//   { "title": "Металокерамічна коронка", "value": "35 500 грн" },
//   {
//     "title": "Фрезерована коронка без нанесенням",
//     "value": "26 500 грн"
//   },
//   {
//     "title": "Фрезерована коронка з нанесенням",
//     "value": "44 500 грн"
//   },
//   { "title": "Рефрактор ( ручна робота )", "value": "13 500 грн" }
// ],
// "Видалення зубів": [
//   { "title": "Типове ( просте)", "value": "8 500 грн" },
//   {
//     "title": "Атипове ( складне) та всі зуби мудрості",
//     "value": "10 500 грн"
//   }
// ],
// "Імплантат (Штрауман, Швейцарія)": [
//   { "title": "Straumann", "value": "40 000 грн" },
//   { "title": "Straumann Active", "value": "44 000 грн" }
// ],
// "Медикаментозний сон": [
//   { "title": "Перша година", "value": "6 000 грн" },
//   { "title": "Кожна наступна", "value": "4 000 грн" }
// ],
// "Видалення зуба": [
//   { "title": "Складність 1", "value": "3 200 грн" },
//   { "title": "Складність 2", "value": "5 200 грн" },
//   { "title": "Складність 3", "value": "6 400 грн" },
//   { "title": "Атипове (просте)", "value": "8 500 грн" },
//   { "title": "Атипове (складне)", "value": "10 500 грн" }
// ],
// "Колагеновий конус": [{ "title": "інше", "value": "1 800 грн" }],
// "Закриття рецесії": [
//   { "title": "1 зуб", "value": "6 000 грн" },
//   { "title": "3 зуба", "value": "12 000 грн" }
// ],
// "Трансплантація мяких тканин": [
//   { "title": "інше", "value": "6 000 грн" }
// ],
// "Синусліфтінг": [
//   { "title": "Відкритий", "value": "24 000 грн" },
//   { "title": "Закритий", "value": "10 000 грн" }
// ],
// "Кісткова пластика біля одного зубу": [
//   { "title": "інше", "value": "7 000 грн" }
// ],
// "Кістковий матеріал": [{ "title": "інше", "value": "11 000 грн" }],
// "Забір і встановлення кісткового аутотрансплантата": [
//   { "title": "інше", "value": "24 000 грн" }
// ],
// "Кістковопластична мембрана": [
//   { "title": "інше", "value": "13 000 грн" }
// ],
// "Імплантація": [
//   { "title": "JD implant", "value": "27 000 грн" },
//   { "title": "Straumann", "value": "40 000 грн" },
//   { "title": "Straumann Active", "value": "44 000 грн" },
//   { "title": "Цирконієвий Straumann", "value": "88 000 грн" }
// ],
// "2-й етап - формувач ясен": [
//   { "title": "інше", "value": "4 000 грн" }
// ],
// "Aprf - плазма крові": [{ "title": "інше", "value": "2 800 грн" }],
// "Вилучення інтегрованого імпланта": [
//   { "title": "інше", "value": "6 000 грн" }
// ],
// "Консультативний прийом": [
//   { "title": "Консультація", "value": "1 500 грн" },
//   {
//     "title": "Консультація дитяча (до 10 років)",
//     "value": "1 000 грн"
//   },
//   { "title": "Консультація огляд", "value": "1 000 грн" }
// ],
// "Діагностика": [
//   {
//     "title": "Ортодонтична (фотопротокол, діагностичні моделі, аналіз ТРГ, КТ/ОПТГ, складання плану лікування)",
//     "value": "4 000 грн"
//   },
//   {
//     "title": "Зняття альгінатного відбитку, 1 щелепа",
//     "value": "900 грн"
//   },
//   {
//     "title": "Зняття відбитку силіконом, 1 щелепа",
//     "value": "1 100 грн"
//   },
//   { "title": "Сканування зубів", "value": "3 000 грн" }
// ],
// "Ортодонтія": [
//   {
//     "title": "Фіксація металевої лігатурної брекет-системи на 1 щелепу",
//     "value": "40 000 грн"
//   },
//   {
//     "title": "Фіксація керамічної лігатурної брекет-системи на 1 щелепу",
//     "value": "50 000 грн"
//   },
//   {
//     "title": "Фіксація самолігуючої металевої брекет-системи на 1 щелепу",
//     "value": "65 000 грн"
//   },
//   {
//     "title": "Фіксація самолігуючої керамічної брекет-системи на 1 щелепу",
//     "value": "75 000 грн"
//   }
// ]

//  "title": "Опції ПриватБанка",
//         "content": {
//           "Привіт! Маємо чудові новини для наших пацієнтів!": [
//             {
//               "title": "Стоматологічна клініка NISKHODOVSKIY CLINIC давно співпрацює з ПриватБанком. 💳 Тепер ви можете скористатися опцією \"Оплата частинами\" або миттєвим кредитуванням для будь-яких наших послуг. Не відкладайте своє здоров'я на потім — доглядайте за своїми зубами зараз, платіть зручно та без зайвих витрат!",
//               "value": ""
//             }
//           ],
//           "Щоб дізнатися більше записуйтесь на прийом!": [
//             {
//               "title": "Завітайте та переконайтеся, що здоров'я вашої посмішки — це легко та доступно з NISKHODOVSKIY CLINIC та ПриватБанком!",
//               "value": ""
//             }
//           ]
//         }
