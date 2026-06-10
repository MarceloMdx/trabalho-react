export default function Rodape({ modoEscuro }) {
  return (
    <footer className={`rodape ${modoEscuro ? 'dark' : 'light'}`}>
      <div className="rodape-content">
        <p>&copy; 2026 - João Silva. Todos os direitos reservados.</p>
        <div className="sociais">
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Email</a>
        </div>
      </div>
    </footer>
  );
}
