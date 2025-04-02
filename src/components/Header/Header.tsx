<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react'
=======
import { useCallback, useEffect, useState } from 'react'
>>>>>>> ac9ab5d5b1aa27cdfe4fe790c92dda188aec6da3
import './header.css'
import 'remixicon/fonts/remixicon.css'

const Header = () => {


    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/ }

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */ }

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */ }

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/ }

    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/ }

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */ }

<<<<<<< HEAD
=======
    {/*close ikon osztálya: ri-close-large-line */ }

    {/*toggle ikon osztálya: ri-apps-2-fill */ }

>>>>>>> ac9ab5d5b1aa27cdfe4fe790c92dda188aec6da3
    const [showMenu, setShowMenu] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleShowMenu = (b:boolean)=>{
        setShowMenu(b)
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            setShadow(window.scrollY>=50)
        }
        window.addEventListener("scroll", handleScroll)
    })

<<<<<<< HEAD
    return(
        <div className={`header ${shadow ? "shadow-header":""}`}>
            <nav>
                <a href='' className='nav__logo'>STARCOFFEE</a>
                <div className={`nav__menu ${showMenu?"show-menu":""}`}>
                    <ul className='nav__list'>
                        {["HOME", "POPILAR", "ABOUT US", "PRODUCTS", "CONTACT"].map(item=>(
=======
    return (
        <div className={`header ${shadow ? "shadow-header" : ""}`}>
            <nav>
                <a href='#' className='nav__logo'>STARCOFFEE</a>
                <div className={`nav__menu ${showMenu?"show-menu":""}`}>
                    <ul className='nav__list'>
                        {["HOME", "POPULAR", "ABOUT US", "PRODUCTS", "CONTACT"].map(item => (
>>>>>>> ac9ab5d5b1aa27cdfe4fe790c92dda188aec6da3
                            <li>
                                <a href={`#${item.toLowerCase().replace(" ","")}`} className='nav__link'>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div onClick={()=>handleShowMenu(false)} className='nav__close'>
                        <i className='ri-close-large-line'></i>
                    </div>
                </div>
                <div onClick={()=>handleShowMenu(true)} className='nav__toggle'>
<<<<<<< HEAD
                        <i className='ri-apps-2-fill'></i>
=======
                    <i className='ri-apps-2-fill'></i>
>>>>>>> ac9ab5d5b1aa27cdfe4fe790c92dda188aec6da3
                </div>
            </nav>
        </div>
    )
}

export default Header
