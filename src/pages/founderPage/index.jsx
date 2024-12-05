import './style.css'
import { translate } from '../../shared/utils/translator'
import FounderHero from './components/FounderHero/FounderHero'
import FounderProjects from './components/FounderProjects/FounderProjects'
import React, { lazy, Suspense } from 'react'
import FounderFollow from './components/FounderFollow/FounderFollow'
import Heading from '../../shared/widgets/heading/ui/heading'
// import FoundersArticle from './components/FoundersArticle/FoundersArticle'
const FoundersArticle = lazy(
  () => import('./components/FoundersArticle/FoundersArticle')
)

const FounderPage = () => {
  const projects = translate('founderPage.projects')
  const articles = translate('founderPage.articles')
  return (
    <>
      <main className="founder">
        <FounderHero />
        <div className="projects-section">
          <div className="container projects-section-container">
            <Heading
              level={2}
              text={translate('founderPage.projects.title')}
              className={'projects-section__title'}
            />
          </div>
          {projects.projects.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <FounderProjects
                  title={project.title}
                  description={project.description}
                  img={project.img}
                />
              </React.Fragment>
            )
          })}
        </div>
        <FounderFollow />
        <section className="article-section">
          <div className="container article-section-container">
            <Heading
              level={2}
              text={translate('founderPage.articles.title')}
              className={'article-section__title'}
            />
          </div>
          <div className="articles-section__articles-wrapper">
            {articles.media.map((article, index) => (
              <>
                <Suspense fallback={<div key={index}>Loading...</div>}>
                  <FoundersArticle
                    key={index}
                    media={[article]} // Pass the article media
                  />
                </Suspense>
              </>
            ))}
          </div>
        </section>

        <script async src="//www.instagram.com/embed.js"></script>
      </main>
    </>
  )
}

export default FounderPage
