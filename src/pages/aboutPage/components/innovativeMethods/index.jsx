import "./style.css";
import React from 'react'
const InnovativeMethods = () => {
  const text = "• Мінімальна інвазивність під час лікування\n" +
    "\n" +
    "• Висока точність та ефективність - інноваційні техніки, наприклад, компʼютерне моделювання та 3D-друкування | інтраоральне 3D - сканування, дозволяють нам точніше діагностувати та лікувати\n" +
    "\n" +
    "• Максимальний комфорт для пацієнта - нові методи, такі як лазерна терапія| використання безконтактних інструментів, можуть зменшити біль та дискомфорт під час лікування\n" +
    "\n" +
    "• Природня естетика - найновітніші матеріали та технології дозволяють створювати найбільш природні та естетичні реставрації зубів";
  return (
    <section className='innovative-methods-container'>
      <div className='container'>
        <h1>НАШІ ІННОВАЦІЙНІ МЕТОДИ ЛІКУВАННЯ</h1>
        <hr/>
        <div className='innovative-wrapper'>
          <div className="innovative-column">
            {text.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          <div className="innovative-column">
            <div className="innovative-slogan">
              <h3>ДЛЯ НАС ЦЕ - БІЛЬШЕ НІЖ ПРОСТО РОБОТА</h3>
              <p>Це можливість дарувати впевненість та радість</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovativeMethods;
