# ✅ CHECKLIST - Requisitos do Trabalho

## REQUISITOS OBRIGATÓRIOS

### 1. ✅ Vite
- [x] Projeto criado com Vite
- [x] Scripts `dev`, `build`, `preview` funcionando
- [x] Servidor rodando em `http://localhost:5173/`

**Arquivo**: `package.json`, `vite.config.js` (ou ausente - Vite usa config padrão)

---

### 2. ✅ Componentização (4+ componentes)
- [x] **Header.jsx** - Cabeçalho com informações pessoais
- [x] **Secoes.jsx** - Seção principal com experiências e habilidades
- [x] **Card.jsx** - Componente reutilizável
- [x] **Rodape.jsx** - Rodapé com links sociais
- [x] **App.jsx** - Componente principal

**Localização**: `src/components/` e `src/`

---

### 3. ✅ Props - Componentes Reutilizáveis
- [x] `Header` recebe `modoEscuro` como prop
- [x] `Secoes` recebe `modoEscuro` como prop
- [x] `Rodape` recebe `modoEscuro` como prop
- [x] Cards usam dados passados como props

**Como testar**: Abra o DevTools do navegador → Componentes React → veja as props

---

### 4. ✅ useState - Interação do Usuário
- [x] Botão "🌙 Modo Escuro" / "☀️ Modo Claro"
- [x] Clique no botão muda o tema da página
- [x] Usa `const [modoEscuro, setModoEscuro] = useState(false)`

**Como testar**: Clique no botão no canto superior direito → página muda de cor

**Arquivo**: `src/App.jsx` (linhas 11-14 e 19-21)

---

### 5. ✅ Aparência e Estilos
- [x] CSS puro (sem bibliotecas externas)
- [x] Design profissional
- [x] Tema claro e escuro
- [x] Responsivo (mobile, tablet, desktop)

**Arquivo**: `src/App.css`

---

## ⭐ REQUISITOS BÔNUS

### 1. ✅ Map() - Renderizar Listas
- [x] Experiências renderizadas com `.map()`
- [x] Habilidades renderizadas com `.map()`
- [x] Array de dados em `Secoes.jsx`

**Como testar**: Abra `src/components/Secoes.jsx` linhas 24-30 (experiências) e 33-40 (habilidades)

**Exemplo**:
```jsx
{experiencias.map((exp) => (
  <div key={exp.id} className="card">
    {/* Renderiza cada experiência */}
  </div>
))}
```

---

### 2. 🚀 Deploy (Bônus Extra)
- [ ] Deploy na Vercel
- [ ] Deploy na Netlify
- [ ] URL pública funcionando

**Como fazer**: Veja seção "Deploy" no README.md

---

## 📋 RESUMO

| Requisito | Status | Arquivo |
|-----------|--------|---------|
| Vite | ✅ Sim | package.json |
| 4+ Componentes | ✅ Sim (5) | src/components/ |
| Props | ✅ Sim | src/App.jsx |
| useState | ✅ Sim | src/App.jsx |
| Estilo CSS | ✅ Sim | src/App.css |
| .map() | ✅ Sim | src/components/Secoes.jsx |
| Deploy | 🚀 Opcional | - |

---

## 🎯 COMO PERSONALIZAR

### Mudar nome e informações
1. Abra `src/components/Header.jsx`
2. Altere: `<h1>João Silva</h1>`
3. Altere email e telefone

### Adicionar/remover experiências
1. Abra `src/components/Secoes.jsx`
2. Edite o array `experiencias` (linhas 11-22)
3. Adicione novo objeto ou remova

### Mudar cores
1. Abra `src/App.css`
2. Edite as variáveis (linhas 2-10)
3. Mude `--color-primary: #2563eb` para sua cor

---

## ✨ PRÓXIMOS PASSOS

1. **Teste tudo**
   - [ ] Página carrega sem erros
   - [ ] Botão modo escuro funciona
   - [ ] Experiências aparecem
   - [ ] Habilidades aparecem
   - [ ] Responsivo em mobile

2. **Personalize**
   - [ ] Seu nome
   - [ ] Suas experiências
   - [ ] Suas habilidades
   - [ ] Suas cores

3. **Deploy (Bônus)**
   - [ ] Siga instruções do README.md
   - [ ] Compartilhe link

---

**Parabéns! Seu portfólio em React está pronto! 🎉**
