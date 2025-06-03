import { Logo } from "@/components/logo";
import Link from "next/link";

const footerSections = [
  {
    title: "Plataforma",
    links: [
      { name: "Como funciona", href: "#" },
      { name: "Streamers", href: "#" },
      { name: "Preços", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre nós", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contato", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Termos de Uso", href: "#" },
      { name: "Privacidade", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-2 text-sm">
              Conectando fãs e criadores de conteúdo de forma única e especial.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 font-medium">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-purple-500 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t pt-6 md:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} ApoiaAí. todos os direitos
            reservados.
          </p>

          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-purple-500"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-purple-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-purple-500"
            >
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
