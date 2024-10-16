import headDoctorImage from "../../../../shared/assets/images/roman-nishodovskij-ulybka-zalog-uspeha-1.jpg";
import "./style.css";
import React from 'react';
const HeadDoctor = () => {

  const test = "Роман Нісходовський лікар-стоматолог ортопед,власник NISKHODOVSKIY CLINIC. Засновник навчального центру \"Невідкладні стани у стоматологічній практиці\" Займається управлінням клініки, менеджментом та розвитком компанії.\n" +
    "\n" +
    "Роман Нісходовський один з найкращих стоматологів в Україні, снімався в багатьох інтев'ю, телепередач та навідь в інтернеті про нього пишуть багато статтів:\n" +
    "1. Роман Нісходовський (подкаст) https://youtu.be/KJSkU3ZoR4E?feature=shared\n" +
    "\n" +
    "2. Роман Нісходовський інтерв'ю (36і6 TV) 2022 https://youtu.be/WO3l2gf43bY?feature=shared\n" +
    "\n" +
    "3. Роман Нісходовський на телестудії (36і6 TV) 2020 рік https://youtu.be/jokJfDZGVqw?feature=shared\n" +
    "\n" +
    "4. Роман Нісходовський на (Ефіри Європа плюс ) 2018 рік https://youtu.be/fGLDVYtUQ_E?feature=shared\n" +
    "\n" +
    "5. Роман Нісходовський: «Усмішка – запорука успіху» https://touch-magazine.eu/persons/touch-interview/roman-nishodovskij-ulybka-zalog-uspeha.html\n" +
    "\n" +
    "6. Роман Нісходовський: “Зараз у моді – здорові і красиві зуби” https://starbrothers.com.ua/roman-nishodovskij-zdorovye-zuby/\n" +
    "\n" +
    "7. Стоматолог назвав поширені помилки при чищенні зубів https://www.facenews.ua/news/2019/439390/amp.html\n" +
    "\n" +
    "8. Стоматолог Роман Нісходовський розповів, що таке «біла дієта» і чому варто обмежити вживання соєвого соусу. https://m.kontrakty.ua/\n" +
    "\n" +
    "9. Роман Нісходовський: як зберегти зуби білими: поради стоматолога https://mport.ua/amp-page/zdorove/fitness/760617-kak-sohranit-zuby-belymi-sovety-stomatologa\n" +
    "\n" +
    "10. Іригатор – модний і ефективний гаджет https://bhub.com.ua/irrigator-modnyj-i-effektivnyj-gadzhet/";

  // const descriptionText = translate("about.headdoctor.description").replace(/\n/g, "<br>");
  return (
    <section className='head-doctor-container'>
      <div className='row container'>
        <div>
          <img src={headDoctorImage} alt='' />
        </div>
       <div>
         <h1>Головний лікар:</h1>
         <h3>Нісходовський Роман</h3>
         <h2>СЕО / Dr. NISKHODOVSKIY CLINIC</h2>
         <p>
           {test.split('\n').map((line, index) => (
             <React.Fragment key={index}>
               {line}
               <br />
             </React.Fragment>
           ))}
         </p>
       </div>
      </div>
    </section>
  )
}

export default HeadDoctor;
