'use client'
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getCarById } from "@/app/lib/apis";
import Image from "next/image";
import css from './CarDetailsClient.module.css'





function CarDetailsClient(){
    const {id} = useParams<{id: string}>();
    const {data, isLoading, error} = useQuery({
        queryKey: ['car', id],
        queryFn: () => getCarById(id)
    })


    if(isLoading){
        return(
            <p>Loading...</p>
        )
    }


    if(error || !data){
        return(
            <p>Something went wrong...</p>
        )
    }


    return(
        <div className="container">
            <div className={css.wrapperAllBlock}>
                <div className={css.wrapperImageBLock}>
                    <Image className={css.mainImage} src={data.img} width={640} height={512} alt="car photo"/>
                    <div className={css.formWrapper}>
                        <h3 className={css.formHeader}>Book your car now</h3>
                        <p className={css.text}>Stay connected! We are always ready to help you.</p>
                        <form className={css.form}>
                        
                        <input className={css.input} type="text" placeholder="Name*"/>
                        <input className={css.input} type="text" placeholder="Email*"/>
                        <input className={css.input} type="text" placeholder="Booking date"/>
                        <textarea className={css.textArea} placeholder="Comment" />

                        <button type="submit" className={css.sendButton}>Send</button>
                    </form>
                    </div>
                    
                </div>

                <div className={css.wrapperInfoBlock}>
                    <div className={css.wrapperCarInfo}>
                        <h2 className={css.mainHeaderInfo}>{data.brand} {data.model},{data.year} <span className={css.id}>id: {data.id.slice(0, 5)}</span></h2>
                        <div className={css.wrapperAddress}>
                            <Image src={'/icons/Location.svg'} width={16} height={16} alt="location svg icon"/>
                            <p className={css.address}>{data.address.split(', ')[1]} {data.address.split(', ')[2]}</p>
                            <p className={css.mileage}>Mileage: {data.mileage} km</p>
                        </div>
                        
                        <p className={css.rentalPrice}>${data.rentalPrice}</p>

                        <p className={css.descr}>{data.description}</p>
                    </div>

                    <div className={css.wrapperConditions}>
                        <h2 className={css.mainHeaderConditions}>Rental Conditions: </h2>
                        <ul className={css.conditionsList}>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.rentalConditionsText}>{data.rentalConditions[0]}</p>
                            </li>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.rentalConditionsText}>{data.rentalConditions[1]}</p>
                            </li>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.rentalConditionsText}>{data.rentalConditions[2]}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={css.wrapperSpecifications}>
                        <h2 className={css.mainHeaderSpecifications}>Car Specifications:</h2>
                        <ul className={css.listSpecifications}>
                            <li>
                                <Image src={'/icons/calendar.svg'} width={16} height={16} alt=""/>
                                <p className={css.textSpecifications}>Year: {data.year}</p>
                            </li>

                            <li>
                                <Image src={'/icons/car.svg'} width={16} height={16} alt=""/>
                                <p className={css.textSpecifications}>Type: {data.type}</p>
                            </li>

                            <li>
                                <Image src={'/icons/fuel-pump.svg'} width={16} height={16} alt=""/>
                                <p className={css.textSpecifications}>Fuel Consumption: {data.fuelConsumption}</p>
                            </li>

                            <li>
                                <Image src={'/icons/gear.svg'} width={16} height={16} alt=""/>
                                <p className={css.textSpecifications}>Engine Size: {data.engineSize}</p>
                            </li>
                        </ul>
                        
                        
                        
                        
                    </div>
                    <div className={css.wrapperAccessories}>
                        <h2 className={css.mainHeaderAccessories}>Accessories and functionalities:</h2>
                        <ul className={css.listAccessories}>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.accessoriesText}>{data.accessories[0]}</p>
                            </li>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.accessoriesText}>{data.accessories[1]}</p>
                            </li>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.accessoriesText}>{data.accessories[2]}</p>
                            </li>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.accessoriesText}>{data.functionalities[0]}</p>
                            </li>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.accessoriesText}>{data.functionalities[1]}</p>
                            </li>
                            <li>
                                <Image src={'/icons/check-circle.svg'} width={16} height={16} alt="check icon svg icon"/>
                                <p className={css.accessoriesText}>{data.functionalities[2]}</p>
                            </li>
                        </ul>

                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )



}


export default CarDetailsClient;