import ConnectWithStreamers from "@/assets/connect-with-streamers.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="bg-purple-900 py-16 text-white">
      <div className="container mx-auto px-4 md:px-5">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Pronto para se conectar com seus streamers favoritos?
            </h2>
            <p className="mb-6 text-purple-100">
              Junte-se a milhares de usuários que já estão aproveitando uma nova
              forma de interagir com seus criadores de conteúdo preferidos.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-purple-900 hover:bg-purple-100"
              >
                Criar conta grátis
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-muted-foreground border-white hover:bg-purple-800"
              >
                Saiba mais
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
            <Image
              src={ConnectWithStreamers}
              alt="Plataforma em ação"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
