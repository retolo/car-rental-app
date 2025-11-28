import css from './Hero.module.css'
import Link from 'next/link';

function Hero(){
    return(
        <>
            <div className={css.backGround}>
                <div className={ 'container'}>
                    <div className={css.wrapper}>
                        <h1 className={css.mainHeader}>
                            Find your perfect rental car
                        </h1>
                        <p className={css.heroText}>Reliable and budget-friendly rentals for any journey</p>
                        <Link href={'/catalog'}><button type='button' className={css.catalogButton}>View Catalog</button></Link>

                    </div>
                </div>
            </div>
        
        </>
    )
}


export default Hero;