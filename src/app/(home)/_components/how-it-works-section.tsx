import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const step = [
  {
    number: 1,
    title: "Cadastre-se",
    description:
      "Crie uma conta em menos de 1 minuto e conecte seu método de pagamento preferido.",
  },
  {
    number: 2,
    title: "Escolha seu streamer favorito",
    description:
      "Busque pelo seu criador de conteúdo favorito em nossa extensa lista de parceiros.",
  },
  {
    number: 3,
    title: "Envie sua mensagem",
    description:
      "Faça sua doação e adicione uma mensagem personalizada que será lida durante a transmissão.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="pt-10 pb-6">
      <div className="px-4 md:px-6">
        <div className="mb-3 text-center">
          <Badge className="mb-2">Simples e Fácil</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Como funciona</h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
            Nosso sistema foi projetado para ser intuitivo e direto, conectando
            fãs e criadores de conteúdo.
          </p>
        </div>

        <div className="container mx-auto grid gap-4 md:grid-cols-3">
          {step.map((step, i) => (
            <Card key={i} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <span className="font-bold text-purple-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
