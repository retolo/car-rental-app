'use client'
import { getCars, getBrands} from "../lib/apis";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import css from './Catalog.module.css'
import { useEffect, useState } from "react";
import { type getCarType } from "@/app/types";


function Catalog(){ 


    const [page, setPage] = useState<number>(1);

    const [cars, setCars] = useState<getCarType[]>([]);

    const [brand, setBrand] = useState<string>('');

    const [price, setPrice] = useState<string>('');


    const [from, setFrom] = useState('');

    const [to, setTo] = useState('');

    const [liked, setLiked] = useState(false);


    const [count, setCount] = useState<number>(0);
    

    const {data} = useQuery({
        queryKey: ['cars', count],
        queryFn: () => getCars(page, brand, price, from, to)
    })

    const {data: brands} = useQuery({
        queryKey: ['brands'],
        queryFn: getBrands,
    })


    useEffect(() =>{
        console.log(brand)
    }, [brand])


    useEffect(() =>{

        const setData = () =>{

            if(!data){
                return;
            }

            if(page === 1){
                setCars(data.cars)
            }else{
                setCars(prev => [...prev, ...data.cars]);
            }
        }


        setData();
    }, [data, page]);


    const handleSearch = () =>{
        setCount(() => count + 1)
        setPage(1);
        setCars([]);
    }

    useEffect(() =>{
        console.log(count);
    }, [count])


    
    


    return(
        <>
            <div className={'container'}>
                <div className={css.filters}>
                    <div className={css.field}>
                        <label className={css.label}>Car brand</label>
                        <select
                            className={css.select}
                            onChange={(e) => setBrand(e.currentTarget.value)}
                        >
                            
                            <option value="Choose a brand">Choose a brand</option>
                            
                            {brands?.map((brand, index) => (
                                <option key={index} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>


                    <div className={css.field}>
                        <label className={css.label}>Price / 1 hour</label>
                        <select
                            className={css.select}
                            onChange={(e) => setPrice(e.currentTarget.value)}
                        >
                            <option>Choose a price</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                            <option>70</option>
                            <option>80</option>
                        </select>
                    </div>


                    <div className={css.field}>
                        <label className={css.label}>Car mileage / km</label>

                        <div className={css.rangeContainer}>
                            <div className={css.rangeBlock}>
                                <span className={css.rangeText}>From</span>
                                <input
                                    type="text"
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    className={css.rangeInput}
                                />
                            </div>

                            <div className={css.divider}></div>

                            <div className={css.rangeBlock}>
                                <span className={css.rangeText}>To</span>
                                <input
                                    type="text"
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    className={css.rangeInput}
                                />
                            </div>
                        </div>
                    </div>

                    <button className={css.searchBtn} onClick={handleSearch}>
                        Search
                    </button>
                </div>
            



                <div className={css.wrapperCars}>
                    <ul className={css.listCars}>
                        {cars !== undefined && cars.map((car) =>(
                            <li className={css.blockCar} key={car.id}>
                                <Image className={css.imageCar} src={car.img} alt="car photo" width={276} height={278}/>
                                <Image 
                                    src="/icons/heart.svg"
                                    width={20}
                                    height={20}
                                    alt="heart"
                                    className={css.heartIcon}
                                    />

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
                {page !== data?.totalPages && cars.length !== 0 &&
                    <button type="button" onClick={() => setPage(page + 1)} className={css.moreButton}>Load more</button>
                }
                
            </div>
        
        </>
    )

}



export default Catalog;