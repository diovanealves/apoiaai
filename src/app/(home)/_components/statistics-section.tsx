import {
  DollarSignIcon,
  MessageSquareIcon,
  TwitchIcon,
  UsersIcon,
} from "lucide-react";

const stats = [
  { icon: UsersIcon, value: "250K+", label: "Usuários ativos" },
  {
    icon: TwitchIcon,
    value: "500+",
    label: "Streamers parceiros",
  },
  {
    icon: MessageSquareIcon,
    value: "1M+",
    label: "Mensagens enviadas",
  },
  {
    icon: DollarSignIcon,
    value: "R$ 2M+",
    label: "Em doações",
  },
];

export function StatisticsSection() {
  return (
    <section id="estatisticas" className="bg-purple-50 pt-10 pb-7">
      <div className="px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Números que falam por si
          </h2>
          <p className="text-muted-foreground mt-2">
            Nossa plataforma em constante crescimento
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-white p-4">
                <stat.icon className="h-8 w-8 text-purple-500" />
              </div>

              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
