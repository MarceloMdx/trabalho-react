export default function Header({ modoEscuro }) {
  return (
    <header className={`header ${modoEscuro ? 'dark' : 'light'}`}>
      <div className="header-content">
        <h1>João Silva</h1>
        <p className="titulo-profissional">Desenvolvedor Front-end | React & JavaScript</p>
        <p className="email">joao.silva@email.com</p>
        <p className="telefone">(21) 98765-4321</p>
      </div>
    </header>
  );
}
