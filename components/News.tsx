import Image from "next/image";
import { getNewsFromNotion, type NotionPost } from "@/lib/notion";

// Static fallback posts shown when Notion is not configured
const FALLBACK_POSTS: NotionPost[] = [
  {
    id: "1",
    title: "Nova turma de Yoga Dinâmico para 2025",
    excerpt:
      "Vagas limitadas para a prática de sábados. Inscrições abertas!",
    date: "2025-01-15",
    coverImage: "/images/news/news-1.jpg",
    slug: "#agendamento",
  },
  {
    id: "2",
    title: "Benefícios do yoga para a saúde da mulher",
    excerpt:
      "Fabiane explica como a prática regular melhora o equilíbrio hormonal, reduz o estresse e fortalece o corpo feminino.",
    date: "2025-01-08",
    coverImage: "/images/news/news-2.jpg",
    slug: "#agendamento",
  },
  {
    id: "3",
    title: "Workshop especial de meditação e respiração",
    excerpt:
      "Evento aberto a todos: aprenda técnicas de pranayama e meditação para o dia a dia.",
    date: "2024-12-20",
    coverImage: "/images/news/news-3.jpg",
    slug: "#agendamento",
  },
];

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function News() {
  let posts: NotionPost[] = FALLBACK_POSTS;

  try {
    const notionPosts = await getNewsFromNotion();
    if (notionPosts.length > 0) posts = notionPosts;
  } catch {
    // Use fallback posts silently
  }

  return (
    <section id="noticias" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-sage font-semibold text-sm tracking-widest uppercase">
            Blog & Novidades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-3 mb-4">
            Notícias & Eventos
          </h2>
          <p className="text-brown-light max-w-md mx-auto">
            Fique por dentro das novidades, dicas de bem-estar e próximos eventos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post) => (
            <a
              key={post.id}
              href={post.slug.startsWith("#") ? post.slug : `/noticias/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-sand hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Cover image */}
              <div className="relative h-48 bg-sand/30">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    🌿
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-xs text-sage font-semibold uppercase tracking-wide mb-2">
                  {formatDate(post.date)}
                </time>
                <h3 className="font-serif text-lg font-bold text-brown mb-2 group-hover:text-sage transition-colors leading-snug">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-brown-light leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                )}
                <span className="mt-4 text-xs font-semibold text-sage flex items-center gap-1">
                  Ler mais <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
