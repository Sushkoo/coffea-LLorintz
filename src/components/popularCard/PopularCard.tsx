import './popularcard.css'

export type PopularProps = {
    name:string;
    description:string;
    price:string;
    image:string;
}

type coffeType = {
    coffe:PopularProps
}

const PopularCard = ({coffe}:coffeType)=>{
    return(
        <div className='popular__card'>
            <div className='popular__images'>
                <div className='popular__shape'></div>
                <img src="/img/bean_img.png" className='popular__bean-1' alt="" />
                <img src="/img/bean_img.png" className='popular__bean-2' alt="" />
                <img src={coffe.image} alt="" className='popular__coffee' />
            </div>
            <div className='popular__data'>
                <h2 className='popular__name'>{coffe.name}</h2>
                <p className='popular__descriptiom'>{coffe.description}</p>
                <a href="" className='button button-dark'>Order now: {coffe.price}</a>
            </div>
        </div>
    )
}