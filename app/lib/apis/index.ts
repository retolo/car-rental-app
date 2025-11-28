import axios from "axios";
import { type getCarType } from "@/app/types";



export const getCars = async () =>{
    const response = await axios.get<getCarType>(
        'https://car-rental-api.goit.global/'
    )


    return response.data;
}



export const getCarBuId = async (id: string) =>{
    const response = await axios.get<getCarType>(
        `https://car-rental-api.goit.global/cars/${id}`
    );


    return response.data;
}