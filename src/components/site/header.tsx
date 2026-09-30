import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "#univers", label: "Univers" },
  { href: "#prestations", label: "Prestations" },
  { href: "#salon", label: "Le salon" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-paper/88 backdrop-blur-md">
      <nav className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-6 px-7 py-4.5">
        <a href="#top" className="font-serif text-[28px] tracking-[0.01em] text-ink">
          LeCarréNad’
        </a>
        <div className="flex flex-wrap gap-7 text-[13px] tracking-[0.22em] uppercase">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-plum transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className={buttonVariants({ variant: "ink", size: "pill-sm" })}>
          Prendre rendez-vous
        </a>
      </nav>
    </header>
  );
}
