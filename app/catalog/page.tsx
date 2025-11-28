'use client'
import { getCars } from "../lib/apis";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import css from './Catalog.module.css'
import { useState } from "react";
function Catalog(){ 


    const [page, setPage] = useState(1);


    

    const {data} = useQuery({
        queryKey: ['cars'],
        queryFn: () => getCars(page)
    })

    


    return(
        <>
            <div className={css.container}>
                <form>
                    <select>

                    </select>
                    <select>

                    </select>
                    <div>
                        <input/>
                        <input/>
                    </div>

                    <button></button>
                </form>


                <div className={css.wrapperCars}>
                    <ul className={css.listCars}>
                        {data !== undefined && data.map((car) =>(
                            <li className={css.blockCar} key={car.id}>
                                <Image className={css.imageCar} src={car.img} alt="car photo" width={276} height={278}/>
                                <div className={css.wrapperInfoCar}>
                                    <div className={css.aboutCarWrapper}>
                                        <p className={css.brand}>{car.brand} <span className={css.model}>{car.model}, </span>{car.year}</p>
                                        {/* <p className={css.year}>{car.year}</p> */}
                                        <p className={css.rentalPrice}>${car.rentalPrice}</p>
                                    </div>

                                    <div className={css.addressCarWrapper}>
                                        <p className={css.aboutCarText}>{car.address.split(', ')[1]} | {car.address.split(', ')[2]} | {car.rentalCompany} | <br/>{car.type} | {car.mileage} km</p>
                                    </div>
                                    <Link href={`/catalog/${car.id}`}><button type="button" className={css.buttonCar}>Read more</button></Link>
                                    

                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        
        </>
    )

}



export default Catalog;