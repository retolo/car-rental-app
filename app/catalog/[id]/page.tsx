
import { getCarById } from "@/app/lib/apis";
import { QueryClient, HydrationBoundary, dehydrate} from "@tanstack/react-query";
import CarDetailsClient from "./CarDetailsClient";



type Props = {
    params: Promise<{id: string}>
}



const CarDetails = async ({params}: Props) =>{
    const {id} = await params;

    const queryClient = new QueryClient();


    await queryClient.prefetchQuery({
        queryKey: ['car', id],

        queryFn: () => getCarById(id)
    })


    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CarDetailsClient/>
        </HydrationBoundary>
    )


}




export default CarDetails;