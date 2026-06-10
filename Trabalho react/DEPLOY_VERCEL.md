# 🚀 GUIA COMPLETO - DEPLOY NA VERCEL (Bônus)

## ⚠️ PRÉ-REQUISITOS

1. **GitHub Account** - Acesse [github.com](https://github.com) e crie uma conta
2. **Conta Vercel** - Acesse [vercel.com](https://vercel.com) (pode usar login com GitHub)

---

## 📝 PASSO 1: Preparar seu repositório Git

### 1.1 Inicializar Git (se não tiver feito)
```bash
cd "C:\Users\bey\Documents\DAMtrabalho\Aula-serratec-vite - Copia"
git init
git add .
git commit -m "Projeto inicial - Currículo em React"
```

### 1.2 Criar repositório no GitHub
1. Acesse [github.com/new](https://github.com/new)
2. Nome: `curriculo-react` (ou outro nome)
3. Descrição: "Portfólio em React com Vite"
4. Escolha "Public" (para deploy grátis)
5. Clique "Create repository"

### 1.3 Fazer push do código
```bash
git remote add origin https://github.com/SEU_USUARIO/curriculo-react.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu username do GitHub!**

---

## 🌐 PASSO 2: Deploy na VERCEL

### 2.1 Acessar Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Selecione "Continue with GitHub"
4. Autorize o Vercel

### 2.2 Criar novo projeto
1. Clique em "Add New..."
2. Selecione "Project"
3. Procure por "curriculo-react" (seu repositório)
4. Clique em "Import"

### 2.3 Configurar projeto
1. **Project Name**: `curriculo-react` (deixe padrão)
2. **Framework Preset**: Vite (se não detectar, selecione)
3. **Root Directory**: `.` (padrão)
4. Outras opções podem deixar padrão
5. Clique "Deploy"

### 2.4 Aguardar
- Vercel vai compilar seu projeto
- Leva 1-2 minutos
- Você verá uma mensagem "Congratulations!"

### 2.5 Acessar seu site
- URL será algo como: `https://curriculo-react.vercel.app`
- Compartilhe esse link!

---

## 🎨 PASSO 3: Atualizar o site (quando mudar código)

### 3.1 Fazer mudanças localmente
```bash
# Faça alterações nos arquivos
# Ex: mudar cores, adicionar experiências, etc
```

### 3.2 Fazer commit e push
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

### 3.3 Vercel atualiza automaticamente
- Vercel detecta novo push
- Recompila e redeploy automático
- Seu site atualiza sozinho!

---

## 🔧 ALTERNATIVA: Deploy na NETLIFY

### Se preferir Netlify ao invés de Vercel:

1. Acesse [netlify.com](https://netlify.com)
2. Clique "Sign up"
3. Use GitHub para login
4. Clique "Add new site"
5. Selecione seu repositório GitHub
6. Configurar:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Clique "Deploy"

---

## 📊 COMPARAR VERCEL vs NETLIFY

| Aspecto | Vercel | Netlify |
|---------|--------|---------|
| Grátis | ✅ Sim | ✅ Sim |
| GitHub | ✅ Sim | ✅ Sim |
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Facilidade | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Suporte | Excelente | Bom |

**Recomendação**: Use Vercel (mais simples com Vite)

---

## ✅ VERIFICAR SE FUNCIONOU

1. Abra a URL do seu site em outro navegador
2. Clique no botão de modo escuro
3. Veja as experiências
4. Teste em mobile (abra DevTools F12, mode responsivo)
5. Tudo ok? 🎉

---

## 🆘 RESOLVER PROBLEMAS

### "Build Failed"
- Verifique erros de JavaScript
- Abra terminal: `npm run build`
- Corrija erros mostrados
- Faça novo push

### "Site em branco"
- Verifique console (F12 → Console)
- Procure por erros em vermelho
- Abra `vite.config.js` se existir
- Verifique `public/` se existe

### "Modo escuro não funciona"
- Verificar se `useState` foi importado
- Verificar se `onClick` está correto
- Verificar se className está usando backticks

---

## 📱 COMPARTILHAR SEU PORTFÓLIO

Depois de fazer deploy:

1. **Enviar para professor**
   - Copie o link
   - Envie por email ou plataforma da escola

2. **Compartilhar em redes sociais**
   - LinkedIn: "Confira meu portfólio em React!"
   - Twitter: "Criei um currículo em React com Vite"
   - GitHub: Link direto do repositório

3. **Adicionar ao currículo real**
   - URL do site no seu CV
   - Mostra conhecimento técnico

---

## 🎓 PRÓXIMOS PASSOS

1. ✅ Deploy funcionando
2. 🎨 Personalizar com suas informações reais
3. 📚 Adicionar mais seções (projetos, certificações)
4. 🔗 Conectar links sociais reais
5. 📧 Adicionar formulário de contato (bônus avançado)

---

**Parabéns! Você tem um portfólio público! 🌐**
