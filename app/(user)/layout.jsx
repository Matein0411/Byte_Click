"use client";

import AuthContextProvider, { useAuth } from "@/context/AuthContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, CircularProgress } from "@nextui-org/react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <AuthContextProvider>
        <UserChecking>
          <section className="min-h-screen">{children}</section>
        </UserChecking>
      </AuthContextProvider>
      <Footer />
    </main>
  );
}

function UserChecking({ children }) {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  if (!user) {
    return (
      <div className="h-screen w-full flex flex-col gap-3 justify-center items-center">
        <h1 className="text-sm text-gray-700">You are not logged In!</h1>
        <Link href={"/login"}>
        <Button className="bg-teal-500 text-white hover:bg-teal-600">
          Login
          </Button>
        </Link>
      </div>
    );
  }
  return <>{children}</>;
}