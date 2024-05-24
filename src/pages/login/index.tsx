import { LoginForm } from './components/form'
import boxes from '../../assets/boxes.svg'

export function Login() {
  return (
    <section className="w-screen h-screen d-flex justify-center items-center">
      <div>
        <div>
          <div>
            <h2>Bem vindo de Volta!</h2>
            <p>Digite seu email e senha para fazer o login</p>
          </div>
          <LoginForm />
        </div>
        <div>
          <img src={boxes} alt="Caixas" />
        </div>
      </div>
      <p>@ 2024, Criado por Fast Order. Todos os direitos reservados.</p>
    </section>
  )
}
