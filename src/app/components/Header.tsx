import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-rgb-background-start to-rgb-background-end p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-rgb-foreground font-semibold">
          Meu Aplicativo
        </h1>
        <nav className="hidden md:flex space-x-4 md:space-x-8">
          <a href="/" className="text-rgb-foreground hover:underline">
            Criar uma Tarefa
          </a>
          <a href="/tarefas-pendentes" className="text-rgb-foreground hover:underline">
            Tarefas Pendentes
          </a>
          <a href="/tarefas-concluidas" className="text-rgb-foreground hover:underline">
            Tarefas Concluídas
          </a>
        </nav>
        {/* Ícone do menu para telas menores */}
        <div className="md:hidden">
          <button className="text-rgb-foreground">
          <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
