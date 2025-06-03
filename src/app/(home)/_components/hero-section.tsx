import CreatorCommunity from "@/assets/creator-community.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto px-5 py-20 md:px-6 md:py-28">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            Novo jeito de conectar
          </Badge>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Conecte-se com seus streamers favoritos através de mensagens
            personalizadas
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Envie mensagens especiais junto com suas doações e veja-as sendo
            lidas ao vivo. Uma nova forma de interagir com os criadores de
            conteúdo que você ama.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Começar agora
              <ArrowRightIcon className="h-4 w-4" />
            </Button>

            <Button size="lg" variant="outline">
              Ver demonstração
            </Button>
          </div>
        </div>

        <Image
          src={CreatorCommunity}
          alt="Demonstração da plataforma"
          className="overflow-hidden rounded-xl object-cover"
          priority
        />
      </div>
    </section>
  );
}
