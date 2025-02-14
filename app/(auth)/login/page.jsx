"use client";

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import { Button } from "@nextui-org/react";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function Page() {
  const {user} = useAuth();
  const router = useRouter();
  useEffect (() => {
   if(user){
    router.push("/account");
   } 
  }, [user]);
  
    return (
      <main className="w-full flex justify-center items-center bg-gray-700 md:p-24 p-10 min-h-screen">
        <section className="flex flex-col gap-3">
          <div className="flex justify-center">
            <img className="h-12" src="/logo.png" alt="Logo" />
          </div>
          <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
            <h1 className="font-bold text-x1">Login With Email</h1>
            <form className="flex flex-col gap-3">
              <input
                placeholder="Enter your email"
                type="email"
                name="user-email"
                id="user-email"
                className="px-3 py-2 rounded-xl border focus:outline-none w-full"
              />
              <input
                placeholder="Enter your password"
                type="password"
                name="user-password"
                id="user-password"
                className="px-3 py-2 rounded-xl border focus:outline-none w-full"
              />
              <Button className="bg-teal-500 text-white hover:bg-teal-600">Login</Button>
            </form>
            <div className="flex justify-between">
                <Link href = {"/sign-up"}>
                    <button className="font-semibold text-sm text-green-700">
                        New? Create an account
                    </button>
                </Link>
                <Link href = {"/forget-password"}>
                    <button className="font-semibold text-sm text-green-700">
                        Forgot password?
                    </button>
                </Link>
            </div>
            <hr />
            <SignInWithGoogleComponent/>
          </div>
        </section>
      </main>
    );
  }

  function SignInWithGoogleComponent(){
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async () => {
      try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
      } catch (error) {
      toast.error(error?.message);
      }
      setIsLoading(false);
  };
  return <Button isLoading={isLoading} isDisabled = {isLoading} onPress = {handleLogin}>Sign-in With Google</Button>
}
    