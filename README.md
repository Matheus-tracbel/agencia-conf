# Agência Conf — Landing Page

Site institucional/landing page estático da **Agência Conf** (Marketing + Tecnologia).

🔗 **No ar em:** https://matheus-tracbel.github.io/agencia-conf/

## Tecnologia
- HTML + Tailwind CSS (via CDN) + JavaScript puro — sem build, sem backend.
- Contato via **WhatsApp** e **e-mail** (links diretos).
- **Meta Pixel** instalado (eventos `PageView` e `Lead` em cliques de WhatsApp/e-mail).

## Arquivos
| Arquivo | Função |
|---------|--------|
| `index.html` | A página inteira |
| `logo.svg` | Logo (também usado como favicon) |
| `og-image.png` | Imagem de pré-visualização ao compartilhar links |
| `og-image.svg` | Fonte editável da `og-image.png` |

## Como editar
Basta abrir o `index.html` em qualquer editor. Para visualizar localmente, é só abrir o arquivo no navegador (duplo-clique).

## Deploy
Hospedado no **GitHub Pages**. Qualquer alteração enviada para a branch `main` publica automaticamente.

### Regenerar a og-image (caso edite o `og-image.svg`)
```bash
npm install sharp
node -e "require('sharp')('og-image.svg',{density:200}).resize(1200,630).png().toFile('og-image.png')"
```
