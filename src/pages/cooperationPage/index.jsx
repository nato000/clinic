import { translate } from '../../shared/utils/translator'
import './style.css'

const CooperationPage = () => {
  const howItWorkList = translate('cooperation.howItWork.list')
  const businesAdvantageList = translate('cooperation.busines.advantages')
  const businesOptionalAdvantageList = translate(
    'cooperation.busines.optionalAdvantage'
  )
  const pricesTable = translate('cooperation.prices.table') || {}

  console.log(howItWorkList)
  console.log(businesAdvantageList)
  console.log(businesOptionalAdvantageList)

  return (
    <main className="cooperation-page">
      <section className="cooperatio-hero">
        <div className="container cooperatio-hero-container">
          <h1 className="cooperation-hero__title">
            {translate('cooperation.title')}
          </h1>
        </div>
      </section>
      <section className="cooperation-present">
        <div className="container cooperation-present-container">
          <h2 className="cooperation-present__title">
            {translate('cooperation.present.title')}
          </h2>
        </div>
      </section>
      <section className="cooperation-howitwork">
        <div className="container">
          <h2 className="cooperation-howitwork__title">
            {translate('cooperation.howItWork.title')}
          </h2>
          <ul className="cooperation-howitwork__list">
            {howItWorkList.map((item, index) => (
              <li className="cooperation-howitwork-list__item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="cooperation-busines">
        <div className="container ">
          <h2 className="cooperation-busines__title">
            {translate('cooperation.busines.advantagesTitle')}
          </h2>
          <div className="cooperation-busines-container">
            <div className="cooperation-busines__main">
              <ul className="cooperation-busines__list">
                {Object.keys(businesAdvantageList).map((key, index) => (
                  <li className="cooperation-busines-list__item" key={index}>
                    <h4 className="cooperation-busines-list-item__title">
                      {businesAdvantageList[key].title}
                    </h4>
                    <p className="cooperation-busines-list-item__text">
                      {businesAdvantageList[key].text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cooperation-busines__optional">
              <h3 className="cooperation-busines__optional-title">
                {translate('cooperation.busines.optionalAdvantageTitle')}
              </h3>
              <ul className="cooperation-busines__optional-list">
                {Object.keys(businesOptionalAdvantageList).map((key, index) => (
                  <li
                    className="cooperation-busines-optional-list__item"
                    key={index}
                  >
                    <h4 className="cooperation-busines-optional-list-item__title">
                      {businesOptionalAdvantageList[key].title}
                    </h4>
                    <p className="cooperation-busines-optional-list-item__text">
                      {businesOptionalAdvantageList[key].text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="cooperation-prices">
        <div className="container cooperation-prices-container">
          <h2 className="cooperation-prices__title">
            {translate('cooperation.prices.title')}
          </h2>
          <table className="cooperation-prices__table">
            <thead>
              <tr className="cooperation-prices__table-row">
                {pricesTable.row1 &&
                  pricesTable.row1.map((header, index) => (
                    <th
                      className="cooperation-prices__table-header"
                      key={index}
                    >
                      {header}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(pricesTable)
                .filter((row) => row !== 'row1')
                .map((rowKey, rowIndex) => (
                  <tr className="cooperation-prices__table-row" key={rowIndex}>
                    {pricesTable[rowKey].map((cell, cellIndex) => (
                      <td
                        className="cooperation-prices__table-cell"
                        key={cellIndex}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="cooperation-risks">
        <div className="container cooperation-risks-container">
          <h2 className="cooperation-risks__title">
            {translate('cooperation.risks.title')}
          </h2>
          <p className="cooperation-risks__text">
            {translate('cooperation.risks.text')}
          </p>
        </div>
      </section>
      <section className="cooperation-footer">
        <div className="container ">
          <h2 className="cooperation-footer__title">
            {translate('cooperation.footer.title')}
          </h2>
          <div className="cooperation-footer-container">
            <div className="cooperation-footer-main">
              <p className="cooperation-footer__text">
                {translate('cooperation.footer.text')}
              </p>
            </div>
            <div className="cooperation-footer-wish">
              <p className="cooperation-footer-wish__text">
                {translate('cooperation.footer.wish')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CooperationPage
