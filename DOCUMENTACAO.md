# Documentação do Projeto — FabYoga

**URL de produção:** https://fabyoga.com.br  
**Repositório local:** `C:\Users\jbati\fabyoga`

---

## 1. Visão Geral

Site institucional para Fabiane Batista, Instrutora de Yoga e Bacharel em Enfermagem, que oferece aulas de yoga na Casa Shanti, Bessa — João Pessoa/PB. O objetivo principal é apresentar as modalidades de aula e converter visitantes em alunos via WhatsApp.

---

## 2. Stack Tecnológico

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 15.x | Framework principal (App Router) |
| React | 19.x | UI |
| TypeScript | 5.x | Tipagem |
| Tailwind CSS | 4.x | Estilização |
| Framer Motion | 12.x | Animações |
| EmailJS | 4.x | (instalado, não utilizado na versão atual) |
| yet-another-react-lightbox | 3.x | Lightbox da galeria |
| @notionhq/client | 5.x | (instalado, para futura integração) |

---

## 3. Estrutura de Arquivos

```
fabyoga/
├── app/
│   ├── layout.tsx            # Layout raiz (metadata, JSON-LD, WhatsApp button)
│   ├── page.tsx              # Página principal (composição das seções)
│   ├── globals.css           # Tokens de design e animações globais
│   ├── icon.png              # Favicon
│   ├── robots.ts             # Regras de crawl
│   ├── sitemap.ts            # Sitemap dinâmico
│   ├── recursos/
│   │   └── page.tsx          # Página de recursos/ferramentas
│   └── yoga-em-joao-pessoa/
│       └── page.tsx          # Landing page SEO para "yoga em joão pessoa"
├── components/
│   ├── Navbar.tsx            # Barra de navegação fixa com scroll-aware
│   ├── Hero.tsx              # Seção hero com foto e CTAs
│   ├── About.tsx             # Seção sobre Fabiane
│   ├── Classes.tsx           # Cards das modalidades de aula
│   ├── Gallery.tsx           # Galeria com filtros e lightbox
│   ├── News.tsx              # Seção de notícias (comentada na page.tsx)
│   ├── BookingForm.tsx       # Seção de agendamento via WhatsApp
│   ├── Location.tsx          # Mapa e informações de localização
│   ├── Footer.tsx            # Rodapé com links e contato
│   ├── WhatsAppButton.tsx    # Botão flutuante do WhatsApp
│   └── SanskritTranslator.tsx # Ferramenta auxiliar (página recursos)
├── lib/                      # Utilitários e funções auxiliares
├── public/
│   └── images/               # Imagens estáticas (fotos, logo, galeria)
└── out/                      # Build estático exportado (para deploy)
```

---

## 4. Seções da Página Principal

As seções são compostas em `app/page.tsx` na seguinte ordem:

### 4.1 Navbar
**Arquivo:** `components/Navbar.tsx`

- Fixa no topo (`fixed top-0`)
- Transparente quando no topo; fundo branco com blur ao rolar (`scrolled > 50px`)
- Logo via `<Image>` em `/images/logo.png`
- Links internos: Sobre, Aulas, Galeria, Notícias, Agendar
- Link externo: `/recursos`
- Botão CTA "Aula Grátis" em verde sage com `rounded-full`
- Menu hamburger responsivo para mobile

### 4.2 Hero
**Arquivo:** `components/Hero.tsx`

- Fundo `bg-cream` com blobs de gradiente radial decorativos
- Mandala SVG decorativa como marca d'água (opacidade 3,5%)
- Layout 2 colunas: texto à esquerda, foto à direita
- Animações de entrada com Framer Motion (`opacity + y` em 0,8s)
- Badges flutuantes animados: "Ter · Qui · Sáb" e "Aula Grátis"
- CTAs: "Agendar Aula Experimental Grátis" (âncora `#agendamento`) + "Ver Horários" (âncora `#aulas`)
- Indicador de scroll no rodapé da seção

### 4.3 Sobre (About)
**Arquivo:** `components/About.tsx`

- Layout 2 colunas: foto à esquerda, texto à direita
- Foto com sombra accent e ícone de aspas decorativo
- Credenciais em cards com ícone: "Instrutora de Yoga" e "Bacharel em Enfermagem"
- Animações `whileInView` com `once: true`

### 4.4 Aulas (Classes)
**Arquivo:** `components/Classes.tsx`

Uma única modalidade, Yoga Dinâmico Integrativo, com 2 cards: Presencial (Casa Shanti) e Online (Ao Vivo). Sem preços nesta seção — preços ficam na página `/planos-e-horarios`.

| | Presencial | Online (Ao Vivo) |
|---|---|---|
| Horários | Ter/Qui 07h15-08h00 (45 min) e Sáb 06h15-07h30 (75 min) | Seg/Qua/Sex 19h30-20h15 |
| Público | Todos os públicos | Todos os públicos |
| Cor | Sage (verde) | Sand (neutro) |

Cada card: ícone, nome, público-alvo, um bloco por horário (dias, horário, duração/formato), descrição, lista de benefícios e botão CTA. Presencial tem 2 blocos de horário no mesmo card (Ter/Qui e Sáb); CTA "Agendar Aula Experimental Grátis". Online tem 1 bloco de horário; CTA "Falar no WhatsApp".

### 4.4.1 Planos & Horários (página separada)
**Arquivo:** `app/planos-e-horarios/page.tsx`

Página própria (fora do fluxo da home) com os preços de todas as modalidades, acessível pelo menu (Navbar). 2 cards: Presencial e Online, cada um com os horários e a lista de preços.

**Preços presenciais:**
- 1x por semana (terça ou quinta): R$ 150,00/mês
- 1x por semana (sábado): R$ 180,00/mês
- 2x por semana (terça e quinta): R$ 180,00/mês
- 2x por semana (terça ou quinta + sábado): R$ 230,00/mês
- 3x por semana (terça, quinta e sábado): R$ 280,00/mês
- Aula avulsa: R$ 50,00
- Obs.: aos sábados são 2 aulas em sequência — o pacote de 1x (sábado) já contempla as duas aulas, e o pacote de 3x/semana equivale a 4 aulas no total.

**Upgrade para alunos presenciais (bloco destacado no card Presencial):**
- +1 aula online/semana: + R$ 40,00/mês
- +2 aulas online/semana: + R$ 60,00/mês
- Acesso total ao Online: + R$ 80,00/mês

**Preços do plano online:**
- 1x por semana: R$ 100,00/mês
- 2x por semana: R$ 130,00/mês
- 3x por semana (Passe Livre Online): R$ 160,00/mês
- Aula avulsa: R$ 35,00

### 4.5 Galeria (Gallery)
**Arquivo:** `components/Gallery.tsx`

- Grid 2/3/4 colunas responsivo
- 8 imagens divididas em categorias: "aulas" (4) e "eventos" (4)
- Filtros por categoria: Todas / Aulas / Eventos
- Hover com overlay escuro e label
- Lightbox via `yet-another-react-lightbox`
- Animação de entrada/saída com `AnimatePresence`

### 4.6 Agendamento (BookingForm)
**Arquivo:** `components/BookingForm.tsx`

- Layout 2 colunas: informações à esquerda, CTA WhatsApp à direita
- Informações: Local, Terças e Quintas (07h15-08h00), Sábados (06h15-07h30), Segundas/Quartas/Sextas Online (19h30-20h15), O que levar
- CTA: link direto `https://wa.me/5583993243577` com mensagem pré-preenchida
- Número WhatsApp: `5583993243577`
- Mensagem padrão: *"Olá Fabiane! Gostaria de agendar minha aula experimental gratuita de yoga. 🌿"*

### 4.7 Localização (Location)
**Arquivo:** `components/Location.tsx`

- Layout 3 colunas: 1 col info + 2 col mapa
- Informações em cards: Endereço, Terças e Quintas (07h15-08h00), Sábados (06h15-07h30), Estacionamento
- Mapa Google Maps embed (coordenadas: `-7.0751778, -34.8451656`)
- Botão WhatsApp no final dos cards

### 4.8 Footer
**Arquivo:** `components/Footer.tsx`

- Fundo `bg-brown` (marrom escuro) com texto branco
- Wave SVG no topo como separador
- 3 colunas: Marca | Navegação | Contato
- Links sociais: WhatsApp e Instagram (`@fabyogaoficial`)
- Copyright dinâmico com `new Date().getFullYear()`

### 4.9 WhatsApp Button (Flutuante)
**Arquivo:** `components/WhatsAppButton.tsx`

- Botão verde fixo no canto inferior direito
- Presente em todas as páginas (importado no `layout.tsx`)

---

## 5. Design System (Tokens CSS)

Definidos em `app/globals.css` via `@theme inline` do Tailwind v4:

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--color-cream` | `#FAF8F5` | Fundo principal |
| `--color-sand` | `#D4C5A9` | Bordas e detalhes |
| `--color-sage` | `#7A9E6E` | Cor primária (verde) |
| `--color-sage-dark` | `#5C7A52` | Hover do sage |
| `--color-sage-light` | `#A8C29C` | Sage claro |
| `--color-sage-muted` | `#ECF3EA` | Fundo suave sage |
| `--color-gold` | `#C9A96E` | Cor secundária (dourado) |
| `--color-gold-dark` | `#A8843E` | Hover do gold |
| `--color-gold-muted` | `#F6EEE0` | Fundo suave gold |
| `--color-brown` | `#2C2416` | Texto principal / fundo footer |
| `--color-brown-light` | `#5C4A2A` | Texto secundário |

### Tipografia

| Token | Fonte | Uso |
|---|---|---|
| `--font-display` | Cormorant Garamond | Destaques em itálico |
| `--font-serif` | Playfair Display | Títulos (h1, h2, h3) |
| `--font-sans` | Inter | Corpo de texto |

### Animações

| Classe | Descrição |
|---|---|
| `animate-float` | Float suave 5s |
| `animate-float-slow` | Float lento com rotação 8s |
| `animate-float-delayed` | Float com delay de 2s, 6s |

---

## 6. SEO e Metadados

**Arquivo:** `app/layout.tsx`

- Title: `"Yoga em João Pessoa | FabYoga – Casa Shanti, Bessa"`
- Description focada em palavras-chave locais
- Open Graph completo (title, description, image, url, locale `pt_BR`)
- Twitter Card com imagem grande
- `robots: { index: true, follow: true }`
- Canonical URL configurado
- **JSON-LD (Schema.org):** tipo `ExerciseGym` com endereço, coordenadas e horários de funcionamento

---

## 7. Páginas Extras

### `/recursos`
Página com ferramentas auxiliares para praticantes de yoga (ex: Tradutor de Sânscrito via `SanskritTranslator.tsx`).

### `/yoga-em-joao-pessoa`
Landing page de SEO focada na keyword "yoga em joão pessoa", com conteúdo otimizado para ranquear no Google.

---

## 8. Deploy

O projeto gera uma build estática em `/out` via `next build`. O deploy é feito a partir desta pasta exportada.

---

## 9. Contatos e Redes Sociais

| Canal | Valor |
|---|---|
| WhatsApp | +55 83 99324-3577 |
| Instagram | @fabyogaoficial |
| Site | https://fabyoga.com.br |

---

## 10. Imagens Utilizadas

Localizadas em `public/images/`:

| Arquivo | Uso |
|---|---|
| `logo.png` | Logo na Navbar |
| `fabiane-hero.jpg` | Foto principal na Hero (1200×630 para OG também) |
| `fabiane-about.jpg` | Foto na seção Sobre |
| `gallery/aula-1.jpg` até `aula-4.jpg` | Galeria — categoria Aulas |
| `gallery/evento-1.jpg` até `evento-4.jpg` | Galeria — categoria Eventos |
