'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import LoginImage from '@/../public/Login Image.jpg'

const loginSchema = z.object({
    email:z.string().email("Email inválido."),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginForm(){
    // useForm com Resolver Zod
    const {
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: LoginFormData) => {
        alert("Dados enviados: " + data)
    }

    return (
        <div className="flex justify-center items-center w-full h-screen px-5">
            <div className='border-1 flex flex-col items-centerh-110 lg:flex-row '>
            {/* <figure className='overflow-hidden h-1/4'>
                <Image alt='Login Image'
                src={LoginImage} className='object-center'/>
            </figure> */}
            <form 
            className='flex flex-col justify-center items-center  gap-5 px-10 py-10'
            onSubmit={handleSubmit(onSubmit)}>
                <span className='text-3xl font-bold font-serif'>
                    Login Next
                </span>
                {/* Email */}
                <span className='flex gap-2 mt-4 items-center relative'>
                <label 
                className='text-sm absolute top-[-10px] left-2 bg-black px-2 cursor-text'
                htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                {...register("email")} // registra o campo com o RHF
                className='border-1 rounded-lg w-50 text-base px-2 pb-1 pt-2'
                />
                {/* Mensagem de erro Email */}
                {errors.email && (
                    <p className='rext-red-500 text-sm'>
                        {errors.email.message}
                    </p>
                )}
                </span>
                {/* Password */}
                <span className='flex gap-2 mt-4 items-center relative'>
                <label 
                className='text-sm absolute top-[-10px] left-2 bg-black px-2 cursor-text'
                htmlFor="password">Senha</label>
                <input 
                type="password" 
                id="password" 
                {...register("password")} // registra o campo com o RHF
                className='border-1 rounded-lg w-50 text-lg px-2 pb-1 pt-2'
                />
                {/* Mensagem de erro Password */}
                {errors.password && (
                    <p className='text-red-500 text-sm'>
                        {errors.password.message}
                    </p>
                )}
                </span>
                {/* Botões */}
                <span className='flex items-center justify-evenly w-50'>
                <button 
                className='bg-blue-500 rounded-lg py-1 px-3 cursor-pointer'
                type="submit">
                    Entrar
                </button>
                <button 
                onClick={()=> alert("registrar")}
                className='bg-green-500 rounded-lg py-1 px-3 cursor-pointer'>
                    registrar
                </button>
                </span>
            </form>
            </div>
        </div>
    )
}