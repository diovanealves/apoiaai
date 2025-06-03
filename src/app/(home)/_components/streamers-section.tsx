import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, TwitchIcon, YoutubeIcon } from "lucide-react";

const streamers = [1, 2, 3, 4, 5, 6];

export function StreamersSection() {
  return (
    <section
      id="streamers"
      className="bg-gradient-to-b from-purple-50 to-white py-16"
    >
      <div className="container mx-auto px-4 md:px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Streamers Populares
          </h2>
          <p className="text-muted-foreground mt-2">
            Alguns dos criadores de conteúdo que usam nossa plataforma
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {streamers.map((i) => (
            <div key={i} className="flex flex-col items-center">
              <Avatar className="mb-3 h-24 w-24">
                <AvatarImage
                  src={`/placeholder.svg?height=96&width=96&text=Streamer${i}`}
                  alt={`Streamer ${i}`}
                />
                <AvatarFallback>S{i}</AvatarFallback>
              </Avatar>
              <h3 className="font-medium">Streamer {i}</h3>
              <div className="mt-1 flex items-center gap-1">
                {i % 2 === 0 ? (
                  <TwitchIcon className="h-4 w-4 text-purple-600" />
                ) : (
                  <YoutubeIcon className="h-4 w-4 text-red-600" />
                )}
                <span className="text-muted-foreground text-sm">
                  {Math.floor(Math.random() * 900) + 100}K seguidores
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="gap-2">
            Ver todos os streamers
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
