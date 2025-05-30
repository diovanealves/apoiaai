import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40 border-b px-5 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-1">
          <HeartIcon className="h-6 w-6 fill-purple-500 text-purple-500" />
          <span className="text-xl font-bold">ApoiaAí</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#como-funciona"
            className="text-sm font-medium transition-colors hover:text-purple-500"
          >
            Como Funciona
          </Link>
          <Link
            href="#streamers"
            className="text-sm font-medium transition-colors hover:text-purple-500"
          >
            Streamers
          </Link>
          <Link
            href="#estatisticas"
            className="text-sm font-medium transition-colors hover:text-purple-500"
          >
            Estatísticas
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-medium transition-colors hover:text-purple-500"
          >
            Depoimentos
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline">Entrar</Button>
          </Link>
          <Link href="/register">
            <Button>Registrar</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
