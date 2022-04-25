import React, {useState} from 'react'
import { PortfolioCard } from '../PortfolioCard'
import data from '../Works/portfolio'
import { Chat } from '../Chat'
import "./style.css"



export const Portfolio = () => {

  const [works, setWork] = useState(data);
  console.log(works)
  return (
    <section className="portfolio">
      <div className="portfolio__header">
        <h3 className="portfolio__header-title">
          Referenzen
        </h3>
        <div className="portfolio__header-quote">
          Von unseren Designern gestaltet, von unseren Entwicklern programmiert, von unserem Team realisiert — in enger Abstimmung mit dem Kunden. Zum Festpreis.
        </div>
      </div>
      <div className="portfolio__works">
      {
         
        // works.map((work)=> { return( <PortfolioCard imgUrl={work.imgUrl} title={work.title} description={work.description} sectionTitle={work.sectionTitle} />);})
        works.map((work)=> { return( <PortfolioCard   key={work.id} data={{...work}} />);})
        
      }
      </div>
      <Chat/>
    </section>
  )
}

