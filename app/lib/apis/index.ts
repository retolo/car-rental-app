import axios from "axios";
import { type getCarType,} from "@/app/types";


type getAllCars = {
    cars: getCarType[];
    totalPages: number
}

export const getCars = async (page: number, brand?: string, rentalPrice?: string, minMileage?:string | null, maxMileage?: string | null ): Promise<getAllCars> =>{
    const response = await axios.get<getAllCars>(
        'https://car-rental-api.goit.global/cars',
        {
            params:{
                page: page,
                brand: brand,
                rentalPrice: rentalPrice,
                minMileage: minMileage,
                maxMileage: maxMileage
            }
        }
    )


    return response.data;
}



export const getCarById = async (id: string): Promise<getCarType> =>{
    const response = await axios.get<getCarType>(
        `https://car-rental-api.goit.global/cars/${id}`
    );


    return response.data;
}



export const getBrands = async (): Promise<string[]> => {
    const response = await axios.get<string[]>(
        'https://car-rental-api.goit.global/brands'
    );


    return response.data;
}