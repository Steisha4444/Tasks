import React from 'react'
import "./style.css"


export const PortfolioCard = ({ data: { id, imgUrl, sectionTitle, title, description } }) => {
    // console.log(typeof(imgUrl));
    console.log(id);
    return (
        <div className="portfolio__items">

            {(id % 2 === 0) ?
                <div className="portfolio__wrapper">
                    <div className="portfolio__img-container" >
                        <img src={imgUrl} className="portfolio__img" />
                        <div className={`portfolio__title  ${(id % 2 === 0) ? "portfolio__title-right" : "portfolio__title-left"}`}>
                            {sectionTitle}
                        </div>
                    </div>
                    <div className="portfolio__card-container">
                        <div className="portfolio__card-title">
                            {title}
                        </div>
                        <div className="portfolio__card-desc">
                            {description}
                        </div>
                    </div>
                </div>
                :
                <div className="portfolio__wrapper">
                    <div className="portfolio__card-container">
                        <div className="portfolio__card-title">
                            {title}
                        </div>
                        <div className="portfolio__card-desc">
                            {description}
                        </div>
                    </div>
                    <div className="portfolio__img-container" >
                        <img src={imgUrl} className="portfolio__img" />
                        <div className={`portfolio__title  ${(id % 2 === 0) ? "portfolio__title-right" : "portfolio__title-left"}`}>
                            {sectionTitle}
                        </div>
                    </div>
                </div>

            }



        </div >
    )
}
