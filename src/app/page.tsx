"use client";
import { useRouter } from "next/navigation";
import LayoutPaiTema from "./components/theme/LayoutPaiTema";
import { PaginaSegura } from "./components/ValidateToken";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Loading from "./components/Loading";
import { useState } from "react";

export default function Inicio() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  function logout(){
    setIsLoading(true)
    localStorage.removeItem('token')
    router.push('/login')
    setIsLoading(false)
  }
  return (
    <LayoutPaiTema>
      {isLoading && <Loading/>}
      <PaginaSegura />
      <div className="w-full h-screen flex flex-col gap-3 items-center justify-center">
        <span>Login realizado, página segura.</span>
        <span 
        onClick={()=>logout()}
        className="flex gap-1 items-center border-1 py-1 px-3 rounded-2xl hover:border-transparent cursor-pointer hover:bg-neutral-200 hover:text-black">
        <FaArrowRightFromBracket size={'20px'}/>
        Logout
        </span>
      </div>
    </LayoutPaiTema>
  );
}
