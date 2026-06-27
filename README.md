# FabYoga

Site institucional de Fabiane Batista, instrutora de Yoga em João Pessoa/PB. Desenvolvido com Next.js 15 e exportação estática para hospedagem na Hostinger.

---

## Visão Geral

O projeto é um site de yoga focado em SEO local para o bairro da Bessa, João Pessoa/PB. Inclui página institucional completa, página de artigo otimizada para busca orgânica, ferramentas interativas para praticantes e integração com Notion para publicação de novidades.

### Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — Hero, Aulas, Galeria, Localização, Agendamento, Novidades |
| `/yoga-em-joao-pessoa` | Landing page de SEO — artigo + FAQ + JSON-LD |
| `/recursos` | Ferramentas interativas para a prática |
| `/ferramentas/tradutor-sanscrito` | Dicionário humorístico de asanas |

### Ferramentas (página `/recursos`)

- **Japamala** — contador de mantras com vibrações táteis
- **Pranayama** — metrônomo de respiração configurável
- **Brahma Muhurta** — calculadora do horário ideal de prática
- **Respiração Coletiva** — guia de respiração com animação sincronizada
- **Shavasana Timer** — temporizador com sons de sino

---

## Tecnologias

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 15.5.18 |
| UI | React | 19 |
| Linguagem | TypeScript | 5 |
| Estilo | Tailwind CSS v4 | 4 |
| Animações | Framer Motion | 12 |
| Formulário | EmailJS Browser | 4 |
| CMS (Novidades) | Notion API | 5 |
| Galeria | yet-another-react-lightbox | 3 |
| Analytics | Google Analytics (gtag.js) | G-X2GDY6HJQ5 |
| Deploy | Exportação estática (`output: "export"`) | — |
| Servidor | Hostinger (Apache + `.htaccess`) | — |

---

## Estrutura de Pastas

```
fabyoga/
├── app/
│   ├── layout.tsx                        # Layout global (Analytics, JSON-LD, WhatsApp)
│   ├── page.tsx                          # Home page
│   ├── globals.css                       # Tokens de design (cores, fontes, animações)
│   ├── icon.png                          # Favicon (Next.js convention)
│   ├── robots.ts                         # robots.txt gerado
│   ├── sitemap.ts                        # sitemap.xml gerado
│   ├── yoga-em-joao-pessoa/page.tsx      # Landing page de SEO
│   ├── recursos/page.tsx                 # Ferramentas interativas
│   └── ferramentas/tradutor-sanscrito/   # Tradutor de sânscrito
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Classes.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Location.tsx
│   ├── BookingForm.tsx                   # Formulário via EmailJS
│   ├── News.tsx                          # Novidades via Notion
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx                # Botão flutuante
│   ├── SanskritTranslator.tsx
│   └── recursos/                         # Ferramentas de prática
├── lib/
│   ├── notion.ts                         # Cliente Notion
│   └── asanasData.ts                     # Dados do tradutor de sânscrito
├── public/
│   ├── images/                           # Fotos do site
│   ├── favicon.ico                       # Favicon para servidores Apache
│   └── .htaccess                         # URLs limpas + cache no Hostinger
├── scripts/
│   └── zip.py                            # Gerador de zip com barras normais (/)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Como Rodar

### Pré-requisitos

- Node.js 18+
- Python 3.x (apenas para gerar o zip de deploy)

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie o arquivo `.env.local` na raiz com:

```env
# EmailJS — formulário de agendamento
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx

# Notion API — seção de novidades (opcional)
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> A seção de Novidades é opcional. Sem as variáveis do Notion, o componente `News` não renderiza conteúdo, mas o restante do site funciona normalmente.

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### 4. Gerar build estático

```bash
npm run build
```

A pasta `out/` é gerada com todos os arquivos estáticos prontos para upload.

### 5. Gerar zip para upload na Hostinger

```bash
npm run zip
```

Gera `fabyoga.zip` com separadores de caminho compatíveis com Linux (`/`). O script usa Python para evitar o problema de barras invertidas do Windows.

### 6. Deploy na Hostinger

1. Acesse o **Gerenciador de Arquivos** da Hostinger
2. Navegue até `public_html`
3. Faça upload do `fabyoga.zip` e extraia o conteúdo diretamente em `public_html`
4. O arquivo `.htaccess` incluído garante URLs limpas (sem `.html`) e cache de assets estáticos

---

## Design System

Definido em [`app/globals.css`](app/globals.css) via `@theme inline` do Tailwind v4.

| Token | Cor |
|---|---|
| `cream` | `#FAF8F5` — fundo da página |
| `sand` | `#D4C5A9` — bordas e divisores |
| `sage` | `#7A9E6E` — verde primário |
| `gold` | `#C9A96E` — acento dourado |
| `brown` | `#2C2416` — texto principal |

**Tipografia:** Cormorant Garamond (display/italic) · Playfair Display (títulos) · Inter (corpo)

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `localhost:3000` |
| `npm run build` | Build estático para a pasta `out/` |
| `npm run lint` | Verificação de qualidade do código (ESLint) |
| `npm run zip` | Gera `fabyoga.zip` para upload na Hostinger |

---

## Créditos

**Autor:** Jorge Batista
**LinkedIn:** [linkedin.com/in/jbatist4321](https://www.linkedin.com/in/jbatist4321/)
**E-mail:** jbatist4321@gmail.com
