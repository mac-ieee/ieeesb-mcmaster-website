'use client'
import { LoginForm } from "@/components/auth/login-form";
import {useTheme} from "next-themes";


const LoginPage = () => {
  const {theme, setTheme} = useTheme();
  return (
    <>

    <LoginForm></LoginForm>
    </>
  );
}

export default LoginPage;