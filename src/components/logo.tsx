import { HeartIcon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-1">
      <HeartIcon className="h-6 w-6 animate-pulse fill-purple-500 text-purple-500 duration-300" />
      <span className="text-xl font-bold">ApoiaAí</span>
    </div>
  );
}
