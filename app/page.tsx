import { RankingCard } from "@/components/ranking-card"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Award, Medal, Crown } from "lucide-react"

const rankingData = [
  {
    position: 1,
    title: "Mijumario",
    subtitle: "O mais burro de todos",
    icon: Crown,
    color: "from-cyan-500 to-cyan-700",
    banners: [
      {
        title: "Performance Excepcional",
        description:
          "No quesito fundamental da burrice, alcança a excelência. Deixa para trás todos os concorrentes ao apresentar uma deficiência mental 40% mais pura e concentrada, um resultado que fala por si só.",
      },
      {
        title: "Inovação Constante",
        description:
          "Inovação na burrice, sempre se superando nos questionamentos idiotas e ideias impossíveis! Eu suspeito que ele se toque nas escondidas pensando no Panda dando buffs no zero dele. ",
      },
    ],
  },
  {
    position: 2,
    title: "Jirachi",
    subtitle: "Excelência comprovada",
    icon: Trophy,
    color: "from-purple-500 to-purple-700",
    banners: [
      {
        title: "Custo-Benefício Superior",
        description: "Vende os melhores tenis e artigos chineses do gc, porém o nível Quociente de Inteligência beira os 60 pontos",
      },
      {
        title: "Não sei o que por aqui",
        description: "No fim das contas é um cara gente boa.",
      },
    ],
  },
  {
    position: 3,
    title: "Badalabel",
    subtitle: "Qualidade reconhecida",
    icon: Award,
    color: "from-emerald-500 to-emerald-700",
    banners: [
      {
        title: "Versatilidade Única",
        description: "Adapta-se a qualquer necessidade de burrice, mantendo a genialidade no quesito sou burro por que quero ",
      },
      {
        title: "Presidio do Hytalo Santos",
        description: "Talvez esteja preso atualmente com Hytalo Santos, P. Diddy e Robinho",
      },
    ],
  },
  {
    position: 4,
    title: "JAMF",
    subtitle: "Opção sólida e confiável",
    icon: Medal,
    color: "from-blue-500 to-blue-700",
    banners: [
      {
        title: "Deficiência No Sistema Nervoso Central",
        description: "Certamente tem alguma deficiência nos neurônios que faz a informação chegar nele de uma forma atípica.",
      },
      {
        title: "Gente boa, faz mal a ninguém",
        description: "As vezes a sua deficiência se prova genial. É um cara gente boa",
      },
    ],
  },
  {
    position: 5,
    title: "Endrew",
    subtitle: "Ele pediu pra tá no ranking",
    icon: Star,
    color: "from-orange-500 to-orange-700",
    banners: [
      {
        title: "Mão Lhoca",
        description: "Ele é apenas o segundo melhor, em tudo, atrás só de todos os outros.",
      },
      {
        title: "Falante",
        description: "Rei do roblox",
      },
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary border border-primary/20">
              Ranking dos mais burros do GC
            </div>
            <h1 className="mb-6 text-6xl font-black tracking-tight text-foreground md:text-8xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Top 5 Mais Burros da História do GC
            </h1>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl leading-relaxed">
              Descubra os mais burros da história do Grand Chase na integra!
            </p>
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              Explorar Ranking
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </header>

      {/* Rankings Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Rankings Detalhados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Critério: Burrice! (Não estamos falando de gameplay)
          </p>
        </div>

        <div className="space-y-12">
          {rankingData.map((item) => (
            <RankingCard key={item.position} {...item} />
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 py-20 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Quer saber mais sobre nossos critérios?
          </h2>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheça nossa metodologia detalhada e como avaliamos cada item do ranking
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-4 bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/25"
          >
            Ver Metodologia
          </Button>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 Sheiden Development Studio
          </p>
        </div>
      </footer>
    </div>
  )
}
