import css from './Header.module.css'
import Image from 'next/image';
import Link from 'next/link';
function Header(){
    return(
        <>
            <header className={css.header}>
                <div className={'container'}>
                    <nav className={css.navigation}>
                        <Link href={'/'}><Image src={'/icons/RentalCar.svg'} alt='logo' width={104} height={16}/></Link>
                        <ul className={css.list}>
                            <Link href={'/'}><button type='button' className={css.buttonHeader}>Home</button></Link>
                            <Link href={'/catalog'}><button type='button' className={css.buttonHeader}>Catalog</button></Link>
                        </ul>
                        
                    </nav>
                    
                </div>
            </header>
        </>
    )
}


export default Header;