
import { LoginForm } from "./components/form"
import logo from "../../assets/logo.svg"

export function Login() {
  return (
    <>
      <main className="flex justify-center items-center flex-col h-screen">
        <div className="w-full max-w-5xl flex justify-between items-center gap-5 px-5">
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl text-primary bg-primary font-bold">Bem-vindo de volta!</h1>
            <p className="text-xs text-slate-400 mb-8">Digite seu email e senha para fazer o login</p>
            <LoginForm />
          </div>
          <div className="w-1/2 md:flex hidden">
            <img src={logo} alt="" className="w-full" />
          </div>
        </div>
      </main>
      
    </>
  )
}
