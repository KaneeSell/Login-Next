'use client'
import RegisterForm from "../components/registerForm/RegisterForm";
import LayoutPaiTema from "../components/theme/LayoutPaiTema";
import { PaginaSemToken } from "../components/ValidateToken";

export default function Register() {
  return (
    <LayoutPaiTema>
      <PaginaSemToken />
      <RegisterForm />
    </LayoutPaiTema>
  );
}
