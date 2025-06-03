import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Streamer",
    content:
      "A plataforma revolucionou minha interação com os fãs. As doações com mensagens personalizadas tornaram minhas lives muito mais engajantes.",
  },
  {
    name: "Ana Luiza",
    role: "Usuária",
    content:
      "Finalmente posso ter minhas mensagens lidas pelos meus streamers favoritos! O sistema é super fácil de usar e seguro.",
  },
  {
    name: "Pedro Mendes",
    role: "YouTuber",
    content:
      "Desde que comecei a usar o DonateStream, o engajamento nos meus vídeos aumentou significativamente. Recomendo a todos os criadores de conteúdo!",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16">
      <div className="container mx-auto px-4 md:px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            O que dizem sobre nós
          </h2>
          <p className="text-muted-foreground mt-2">
            Depoimentos de usuários e streamers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  <Avatar className="mr-3 h-10 w-10">
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground italic">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
