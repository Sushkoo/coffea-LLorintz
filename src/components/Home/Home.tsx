<<<<<<< HEAD
import React from 'react'
import { homeImages } from '../../data/data'
import './home.css'
=======
import { homeImages } from "../../data/data"
import './home.css'

>>>>>>> ac9ab5d5b1aa27cdfe4fe790c92dda188aec6da3
const Home = () => {
    {/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/}
    
  {/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/}

  {/*A kép hátterében egy alakzat van.*/}

  {/*A gomb mutasson az about részre */}
  return (
<<<<<<< HEAD
    <div className="home">
      <h1 className="home__title">COLD COFFEE</h1>
      <div className="home__images">
        <div className="home__shape"></div>
        {homeImages.map(image=>(
          <img src={image.src} alt={image.alt} className={image.className} />
        ))}
      </div>
      <img src="/img/home-sticker.svg" alt="" className="home__Sticker" />
=======
    <div className="home" id="home">
      <h1 className="home__title">COLd COFFEE</h1>
      <div className="home__images">
        <div className="home__shape"></div>
        {homeImages.map(image=>(
          <img src={image.src} alt={image.alt}  className={image.className}/>
        ))}
      </div>
      <img src="/img/home-sticker.svg" alt="" className="home__Sticker"/>
>>>>>>> ac9ab5d5b1aa27cdfe4fe790c92dda188aec6da3
      <div className="home__data">
        <p className="home__description">
          Find delicious hot and cold coffees with the 
          best varieties, calm the pleasure and enjoy 
          a good coffee, order now.
        </p>
<<<<<<< HEAD
=======
        <a href="#about" className="button">Larn More</a>
>>>>>>> ac9ab5d5b1aa27cdfe4fe790c92dda188aec6da3
      </div>
    </div>
  )
}

export default Home
