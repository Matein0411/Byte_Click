"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Page() {
    return (
      <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
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
              <Button color = "primary"> Login</Button>
            </form>
            <div className="flex justify-between">
                <Link href = {"/Sign-Up"}>
                    <button className="font-semibold text-sm text-blue-700">
                        New? Create an account
                    </button>
                </Link>
                <Link href = {"/forget-password"}>
                    <button className="font-semibold text-sm text-blue-700">
                        Forgot password?
                    </button>
                </Link>
            </div>
            <hr />
            <Button> Sig in with Google </Button>
          </div>
        </section>
      </main>
    );
  }
  