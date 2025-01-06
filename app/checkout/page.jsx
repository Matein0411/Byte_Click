"use client";
import { useAuth } from "@/context/AuthContext";
import { useProductsByIds } from "@/lib/firestore/products/read";
import {userUser} from "@/lib/firestore/User/read";
import { useSearchParams } from "next/navigation";
import { CircularProgress } from "@nextui-org/react";
export default function Page() {

    const {user} = useAuth();
    const {data} = useUser({uid : user?.uid});

    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const producId = searchParams.get('producId');

    const productIdsList = type === "bynow" ? [productId] : data?.carts?.map((item) => item?.id);

    const {data : products, error, isLoading} = useProductsByIds({idsList: productIdsList});

    if(isLoading){
        return <div>
            <CircularProgress/>
        </div>
    }

    if (error) {
        return <div> {error} </div>;
    }
     const productList = type === "buynow"? [
         {
            id : productId,
            quantity : 1,
            product : products =[0],

         },
    

        ]: data?.carts?.map((item)=> {
             return {
            ...item,
            product : products?. find ((e)=>e?.id ===item?.id),
            };

        });

    return (
        <main className="p-5">
            <h1 className="text-xl">Checkout</h1>
        </main>
    );
}
