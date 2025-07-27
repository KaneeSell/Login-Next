"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import { useState } from "react";
// import useSWR from 'swr'
// import Image from 'next/image'
// import LoginImage from '@/../public/Login Image.jpg'

const loginSchema = z.object({
  name: z
    .string()
    .min(6, "Nome deve ter no mínimo 6 caracteres.")
    .nonempty("Campo Nome não pode estar vazio."),
  email: z
    .string()
    .email("Email inválido.")
    .nonempty("Campo Email não pode estar vazio."),
  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres.")
    .nonempty("Campo Senha não pode estar vazio."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const cadastrar = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      await axios.post("/api/auth/register", data).then((res) => {
        if(res.data.status === 201) {
            console.log(res.data);
            alert("Registro realizado com sucesso!");
            router.push('/login')
        } else {
            alert(res.data.status + ' : ' + res.data.message)
        }
        setIsLoading(false)
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const apiMessage = error.response?.data?.message;
        if (apiMessage) {
            alert("Erro ao cadastrar: " + apiMessage);
        } else {
            alert("Erro inesperado: " + error.message);
        }
      } else {
          alert("Erro inesperado: " + error);
          console.error(error);
      }
      setIsLoading(false)
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen px-5">
      {isLoading && <Loading/>}
      <div className="border-1 rounded-2xl flex flex-col items-centerh-110 lg:flex-row">
        {/* <figure className='overflow-hidden h-1/4'>
                <Image alt='Login Image'
                src={LoginImage} className='object-center'/>
            </figure> */}
        <form
          className="flex flex-col justify-center items-center px-10 py-10"
          onSubmit={handleSubmit(cadastrar)}
        >
          <span className="text-3xl font-bold font-serif">Cadastro</span>
          {/* Nome */}
          <span className="flex flex-col mb-1 mt-4 items-center relative">
            <label
              className="text-sm absolute top-[-10px] left-2 bg-black px-2 cursor-text"
              htmlFor="email"
            >
              Nome
            </label>
            <input
              required
              type="text"
              id="nome"
              {...register("name")} // registra o campo com o RHF
              className="border-1 rounded-lg w-50 text-base px-2 pb-1 pt-2"
            />
          </span>
          {/* Mensagem de erro Nome */}
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          {/* Email */}
          <span className="flex flex-col mb-1 mt-4 items-center relative">
            <label
              className="text-sm absolute top-[-10px] left-2 bg-black px-2 cursor-text"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              {...register("email")} // registra o campo com o RHF
              className="border-1 rounded-lg w-50 text-base px-2 pb-1 pt-2"
            />
          </span>
          {/* Mensagem de erro Email */}
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          {/* Password */}
          <span className="flex flex-col mb-1 mt-4 items-center relative">
            <label
              className="text-sm absolute top-[-10px] left-2 bg-black px-2 cursor-text"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              required
              {...register("password")} // registra o campo com o RHF
              className="border-1 rounded-lg w-50 text-lg px-2 pb-1 pt-2"
            />
          </span>
          {/* Mensagem de erro Password */}
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          {/* Botões */}
          <span className="flex gap-1 flex-col items-center mt-3 w-full">
            <Link href={"/login"} className="flex items-center gap-1 text-sm cursor-default">
            <span>Já possui Login?</span>
              <span className="cursor-pointer text-blue-600 hover:text-blue-800">
                Fazer Login
              </span>
            </Link>
            <button
              type="submit"
              className="bg-green-500 rounded-lg w-full py-1 px-3 cursor-pointer"
            >
              Cadastro
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}
