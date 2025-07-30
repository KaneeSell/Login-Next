"use client";
import { useRouter } from "next/navigation";
import LayoutPaiTema from "./components/theme/LayoutPaiTema";
import { PaginaSegura } from "./components/ValidateToken";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import validate from "./utils/validate";

export default function Inicio() {
  const [blockPage, setBlockPage] = useState(true);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function verificar() {
      const { status } = await validate();
      if (status !== 200) {
        router.push("/login");
      } else {
        setBlockPage(false)
      }
    }
    verificar()
  }, []);

  function logout() {
    setIsLoading(true);
    localStorage.removeItem("token");
    router.push("/login");
    setIsLoading(false);
  }

  if (blockPage) return <LayoutPaiTema><Loading/></LayoutPaiTema>

  return (
    <LayoutPaiTema>
      {isLoading && <Loading />}
      <PaginaSegura />
      <div className="w-full min-h-svh flex flex-col gap-3 items-center justify-center">
        <span>Login realizado, página segura.</span>
        <span
          onClick={() => logout()}
          className="flex gap-1 items-center border-1 py-1 px-3 rounded-2xl hover:border-transparent cursor-pointer hover:bg-neutral-200 hover:text-black"
        >
          <FaArrowRightFromBracket size={"20px"} />
          Logout
        </span>
      </div>
    </LayoutPaiTema>
  );
}
