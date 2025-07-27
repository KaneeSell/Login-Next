'use client'
import LoginForm from "../components/loginform/LoginForm";
import LayoutPaiTema from "../components/theme/LayoutPaiTema";
import { PaginaSemToken } from "../components/ValidateToken";

export default function Login() {
  return (
    <LayoutPaiTema>
      <PaginaSemToken/>
      <LoginForm />
    </LayoutPaiTema>
  );
}
