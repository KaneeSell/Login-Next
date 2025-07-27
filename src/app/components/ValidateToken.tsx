import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import validate from "../utils/validate";
import BlockPage from "./BlockPage";

export function PaginaSegura() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  async function validarToken() {
    const response = await validate();
    if (response.status !== 200) {
      router.push("/login");
    }
  }
  useEffect(() => {
    setIsLoading(true)
    if (localStorage.getItem("token")) {
      validarToken();
    } else {
      router.push("/login");
    }
    setIsLoading(false)
  }, []);
  return <>{isLoading && <BlockPage />}</>;
}

export function PaginaSemToken() {
  const router = useRouter();
  async function validarToken() {
    const response = await validate();
    if (response.status === 200) {
      router.push("/");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) validarToken();
  }, []);
  return <></>;
}
