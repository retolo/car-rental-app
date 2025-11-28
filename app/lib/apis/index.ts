import axios from "axios";
import { type getCarType } from "@/app/types";



export const getCars = async (page: number): Promise<getCarType[]> =>{
    const response = await axios.get(
        'https://car-rental-api.goit.global/cars',
        {
            params:{
                page: page
            }
        }
    )


    return response.data.cars;
}



export const getCarBuId = async (id: string) =>{
    const response = await axios.get<getCarType>(
        `https://car-rental-api.goit.global/cars/${id}`
    );


    return response.data;
}