import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface Banner {
  title: string
  description: string
}

interface RankingCardProps {
  position: number
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  banners: Banner[]
}

export function RankingCard({ position, title, subtitle, icon: Icon, color, banners }: RankingCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-0">
        {/* Main Header */}
        <div className={cn("relative bg-gradient-to-r p-8 text-white", color)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                <span className="text-3xl font-black">#{position}</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold md:text-4xl mb-1">{title}</h3>
                <p className="text-xl opacity-90">{subtitle}</p>
              </div>
            </div>
            <Icon className="h-16 w-16 opacity-80" />
          </div>

          {/* Position Badge */}
          <Badge
            variant="secondary"
            className="absolute right-6 top-6 bg-white/20 text-white backdrop-blur-sm border border-white/30 text-sm px-3 py-1"
          >
            Posição {position}
          </Badge>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>

        {/* Main Banner Image Placeholder */}
        <div className="relative h-56 bg-gradient-to-br from-muted to-muted/30">
          <img
            src={`/placeholder-192mf.png?height=224&width=800&query=modern professional banner for position ${position} ranking dark theme`}
            alt={`Banner principal para ${title}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Informative Banners */}
        <div className="p-8">
          <h4 className="mb-6 text-xl font-semibold text-foreground flex items-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full" />
            Por que está na posição #{position}?
          </h4>

          <div className="grid gap-6 md:grid-cols-2">
            {banners.map((banner, index) => (
              <div
                key={index}
                className="group rounded-xl border bg-card/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 backdrop-blur-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  <h5 className="font-semibold text-card-foreground group-hover:text-primary transition-colors text-lg">
                    {banner.title}
                  </h5>
                </div>
                <p className="text-muted-foreground leading-relaxed">{banner.description}</p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="w-full md:w-auto bg-transparent hover:bg-primary/10 border-primary/30 hover:border-primary text-primary hover:text-primary px-8 py-3 text-lg font-medium"
            >
              Saiba Mais Sobre Esta Posição
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
