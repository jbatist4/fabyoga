# FabYoga – Guia de Configuração

## 1. Imagens

Coloque as fotos nas pastas abaixo (JPG ou WEBP, mínimo 800px de largura):

| Arquivo | Onde aparece |
|---|---|
| `public/images/fabiane-hero.jpg` | Foto principal (Hero) |
| `public/images/fabiane-about.jpg` | Foto da seção "Sobre" |
| `public/images/gallery/aula-1.jpg` → `aula-4.jpg` | Galeria – aulas |
| `public/images/gallery/evento-1.jpg` → `evento-4.jpg` | Galeria – eventos |
| `public/images/news/news-1.jpg` → `news-3.jpg` | Posts de notícias (fallback) |

## 2. WhatsApp

Em `components/WhatsAppButton.tsx` e `components/Location.tsx`, substitua:
```
const WHATSAPP_NUMBER = "5583999999999";
```
pelo número real de Fabiane (com DDI 55 + DDD + número, sem espaços ou traços).

## 3. Formulário de Agendamento (EmailJS)

1. Crie conta grátis em https://www.emailjs.com/
2. Adicione um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email com as variáveis:
   - `{{from_name}}`, `{{from_email}}`, `{{phone}}`
   - `{{modality}}`, `{{preferred_date}}`, `{{message}}`
4. Copie o **Service ID**, **Template ID** e **Public Key**
5. Cole em `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

## 4. Notícias via Notion (opcional)

1. Crie uma integration em https://www.notion.so/my-integrations
2. Crie uma database no Notion com as colunas:
   - **Title** (título) – tipo: Title
   - **Status** – tipo: Select (opções: Draft, Published)
   - **Date** – tipo: Date
   - **Excerpt** – tipo: Rich Text
   - **Cover** – use o cover padrão da página
3. Conecte a integration à database (botão "···" > Connections)
4. Cole o token e o ID da database em `.env.local`:
```
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 5. Rodando localmente

```bash
npm run dev
```
Acesse http://localhost:3000

## 6. Deploy na Vercel

1. Crie conta em https://vercel.com (grátis)
2. "Add New Project" > importe este repositório do GitHub
3. Configure as variáveis de ambiente (as mesmas do `.env.local`)
4. Deploy automático a cada push no main

## 7. Domínio personalizado (opcional)

No painel da Vercel, vá em Settings > Domains e adicione seu domínio.
Sugestões: `fabyoga.com.br`, `fabyanebatista.com.br`

---

**Desenvolvido com Next.js 15 + Tailwind CSS + Vercel**
