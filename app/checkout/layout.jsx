"use client"
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";

export default function Layout ([children]) {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const producId = searchParams.get('producId');

    const {user} = useAuth();
    const {data, error, isLoading} = useUser ({uid: user?.uid});

    if (!isLoading){
        return ( <div>
                <CircularProgress />
            </div>
        );
    }
    if (error) {
       return  <div> {error} </div>;
    }

    if (type === "cart"&& (!data?.carts || data?.carts?.length===0 )) {
        return ( <div>
            <h2>Your Car is Empaty</h2>
        </div>
        );
    }
    if (type === "buynow" && !productId) {
        return( <div>
            <h2>
                Product Not Found! 
            </h2>
        </div>
        );
    }
    return <>(children)</>;
}