# 📄 Meu Currículo em React

Um projeto de portfólio desenvolvido com **React** e **Vite**, seguindo os requisitos da disciplina.

## ✅ Requisitos Atendidos

### Obrigatórios:
- ✅ **Vite**: Projeto criado com `npm create vite@latest`
- ✅ **Componentização**: 4 componentes separados
  - `Header.jsx` - Cabeçalho com informações pessoais
  - `Secoes.jsx` - Seções de experiências e habilidades
  - `Card.jsx` - Componente reutilizável (não usado diretamente, mas conceito em Secoes)
  - `Rodape.jsx` - Rodapé com links sociais
  - `App.jsx` - Componente principal

- ✅ **Props**: Todos os componentes recebem `modoEscuro` como prop
- ✅ **useState**: Botão de "Modo Escuro" com toggle de tema
- ✅ **Aparência**: CSS puro com tema claro/escuro responsivo
- ✅ **Responsive**: Design mobile-first com media queries

### Bônus:
- ✅ **map()**: Renderização de experiências e habilidades com `.map()`
- 🚀 **Deploy**: Pronto para publicar na Vercel ou Netlify

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx      # Cabeçalho do currículo
│   ├── Secoes.jsx      # Seções principal com .map()
│   ├── Card.jsx        # Card reutilizável (exemplo)
│   └── Rodape.jsx      # Rodapé
├── App.jsx             # Componente principal com useState
├── App.css             # Estilos com temas
├── main.jsx            # Entry point
└── style.css           # (opcional)
```

## 🚀 Como Rodar

### 1. Instalar dependências (se necessário)
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:5173/`

### 3. Build para produção
```bash
npm run build
```

### 4. Preview do build
```bash
npm run preview
```

## 🎨 Funcionalidades

### Modo Escuro/Claro
- Clique no botão "🌙 Modo Escuro" (canto superior direito)
- O tema muda dinamicamente para toda a página
- A preferência é mantida durante a sessão

### Seções Incluídas
1. **Cabeçalho** - Nome, profissão e contatos
2. **Experiências** - Lista de trabalhos anteriores
3. **Habilidades** - Competências técnicas
4. **Rodapé** - Links sociais

## 📱 Responsividade

A página é totalmente responsiva:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🛠️ Personalizando

### Mudar o Nome
Edite `Header.jsx`:
```jsx
<h1>Seu Nome Aqui</h1>
```

### Adicionar Experiências
Em `Secoes.jsx`, adicione à array `experiencias`:
```jsx
{
  id: 3,
  titulo: "Seu Título",
  empresa: "Sua Empresa",
  data: "2024",
  descricao: "Descrição aqui"
}
```

### Mudar Cores
Em `App.css`, altere as variáveis:
```css
:root {
  --color-primary: #seu-azul;
  --color-secondary: #seu-azul-escuro;
}
```

## 🌐 Deploy na Vercel

1. Faça push do projeto no GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório
5. Vercel detectará automaticamente Vite
6. Clique em "Deploy"

## 🌐 Deploy na Netlify

1. Faça push do projeto no GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Clique em "Deploy"

## 📚 Conceitos Aprendidos

- ✅ Componentes React
- ✅ Props
- ✅ Estado (useState)
- ✅ Renderização condicional
- ✅ Listas com .map()
- ✅ Estilização CSS
- ✅ Vite

## 👨‍💻 Autor

Desenvolvido como trabalho prático do curso Serratec.

---

**Divirta-se personalizando seu portfólio! 🚀**
