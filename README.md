# Agência Conf — Landing Page

Site institucional/landing page estático da **Agência Conf** (Marketing + Tecnologia).

🔗 **No ar em:** https://matheus-tracbel.github.io/agencia-conf/

## Tecnologia
- HTML + **Tailwind CSS compilado** (CSS estático e minificado, sem CDN) + JavaScript puro — sem backend.
- Contato via **WhatsApp** e **e-mail** (links diretos).
- **Meta Pixel** + **Google Analytics 4** (eventos `PageView`/`Lead` e `generate_lead` em cliques de WhatsApp/e-mail).

## Arquivos
| Arquivo | Função |
|---------|--------|
| `index.html` | A página inteira |
| `assets/tailwind.css` | CSS do Tailwind já compilado (servido em produção) |
| `tailwind.config.js` / `src/input.css` | Configuração e fonte do build do CSS |
| `logo.svg` | Logo (também usado como favicon) |
| `og-image.png` / `og-image.svg` | Imagem de pré-visualização ao compartilhar links |
| `clientes/` | Logos dos clientes (veja o README de lá) |

## Como editar
Abra o `index.html` em qualquer editor. Para visualizar localmente, abra o arquivo no navegador.

> **Importante:** se você adicionar **classes novas do Tailwind** no HTML, precisa recompilar o CSS
> (veja abaixo). Edições só de **texto/conteúdo** não exigem rebuild.

## Build do CSS (Tailwind)
Uma vez, instale as dependências:
```bash
npm install
```
Para gerar o CSS minificado depois de mexer no HTML:
```bash
npm run build:css
```
Ou deixar recompilando automaticamente enquanto edita:
```bash
npm run watch:css
```

## Deploy
Hospedado no **GitHub Pages**. Qualquer alteração enviada para a branch `main` publica automaticamente.

### Regenerar a og-image (caso edite o `og-image.svg`)
```bash
npm install sharp
node -e "require('sharp')('og-image.svg',{density:200}).resize(1200,630).png().toFile('og-image.png')"
```
