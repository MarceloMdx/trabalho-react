export default function Secoes({ modoEscuro }) {
  // Dados das experiências (usando .map() - BÔNUS!)
  const experiencias = [
    {
      id: 1,
      titulo: "Desenvolvedor Front-end Júnior",
      empresa: "Tech Solutions",
      data: "2023 - Atual",
      descricao: "Desenvolvimento de interfaces com React, criação de componentes reutilizáveis e integração com APIs."
    },
    {
      id: 2,
      titulo: "Estagiário em Desenvolvimento Web",
      empresa: "Digital Studio",
      data: "2022 - 2023",
      descricao: "Manutenção de sites, criação de páginas responsivas com HTML, CSS e JavaScript."
    }
  ];

  // Dados das habilidades
  const habilidades = [
    { id: 1, titulo: "JavaScript", descricao: "Proficiência em ES6+" },
    { id: 2, titulo: "React", descricao: "Hooks, Props, Estado e Componentes" },
    { id: 3, titulo: "HTML & CSS", descricao: "Layouts responsivos e design moderno" },
    { id: 4, titulo: "Git & GitHub", descricao: "Controle de versão e colaboração" }
  ];

  return (
    <main className={`secoes ${modoEscuro ? 'dark' : 'light'}`}>
      {/* Seção de Experiências */}
      <section className="secao">
        <h2>Experiências Profissionais</h2>
        <div className="cards-container">
          {experiencias.map((exp) => (
            <div key={exp.id} className={`card ${modoEscuro ? 'dark' : 'light'}`}>
              <h3>{exp.titulo}</h3>
              <p className="empresa">{exp.empresa}</p>
              <p className="data">{exp.data}</p>
              <p className="descricao">{exp.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Habilidades */}
      <section className="secao">
        <h2>Habilidades</h2>
        <div className="cards-container">
          {habilidades.map((hab) => (
            <div key={hab.id} className={`card habilidade ${modoEscuro ? 'dark' : 'light'}`}>
              <h3>{hab.titulo}</h3>
              <p className="descricao">{hab.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
