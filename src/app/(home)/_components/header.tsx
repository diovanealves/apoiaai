import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-1">
          <HeartIcon className="h-6 w-6 text-purple-500 fill-purple-500" />
          <span className="text-xl font-bold">ApoiaAí</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#como-funciona"
            className="text-sm font-medium hover:text-purple-500 transition-colors"
          >
            Como Funciona
          </Link>
          <Link
            href="#streamers"
            className="text-sm font-medium hover:text-purple-500 transition-colors"
          >
            Streamers
          </Link>
          <Link
            href="#estatisticas"
            className="text-sm font-medium hover:text-purple-500 transition-colors"
          >
            Estatísticas
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-medium hover:text-purple-500 transition-colors"
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
