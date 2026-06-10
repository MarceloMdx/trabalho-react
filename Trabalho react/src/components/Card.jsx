// Componente reutilizável - pode ser usado para experiências ou habilidades
export default function Card({ titulo, descricao, data, empresa, modoEscuro }) {
  return (
    <div className={`card ${modoEscuro ? 'dark' : 'light'}`}>
      <h3>{titulo}</h3>
      {empresa && <p className="empresa"> {empresa}</p>}
      {data && <p className="data">{data}</p>}
      <p className="descricao">{descricao}</p>
    </div>
  );
}
