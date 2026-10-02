import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { contactRows, mapsUrl, prestations, univers } from "@/lib/content";

const eyebrow = "text-[13px] tracking-[0.32em] uppercase text-mauve";
const h2 = "font-serif font-normal leading-none text-[clamp(40px,5vw,64px)]";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-310 items-end gap-14 px-7 pt-18 pb-14 [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))]"
    >
      <Reveal>
        <p className={`${eyebrow} mb-7`}>Coiffure et esthétique · Paris 19e</p>
        <h1 className="font-serif text-[clamp(64px,10vw,148px)] leading-[0.9] font-normal tracking-[-0.02em]">
          LeCarré<span className="text-mauve italic">Nad’</span>
        </h1>
        <p className="mt-8 max-w-110 text-[19px] leading-[1.55] font-light text-pretty">
          Un salon de quartier rue de Meaux pour la coiffure femme et homme, les soins beauté et l’onglerie.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <a href="#contact" className={buttonVariants({ variant: "ink", size: "pill" })}>
            Prendre rendez-vous
          </a>
          <a href="#univers" className={buttonVariants({ variant: "line", size: "pill" })}>
            Nos univers
          </a>
        </div>
      </Reveal>
      <Reveal step={2} className="relative aspect-4/5 max-h-155">
        <ImageSlot
          src="/images/hero.jpg"
          alt="Coiffeuse en train de réaliser un brushing"
          placeholder="Photo du salon ou d’une coiffure"
          className="rounded-sm"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
        <div className="pointer-events-none absolute bottom-7 -left-4.5 bg-lilac px-5 py-4 text-[13px] tracking-[0.2em] uppercase">
          19 rue de Meaux
        </div>
      </Reveal>
    </section>
  );
}

export function UniversSection() {
  return (
    <section id="univers" className="bg-ink py-22 text-paper">
      <div className="mx-auto max-w-310 px-7">
        <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <h2 className={h2}>
            Quatre univers,
            <br />
            <span className="text-lilac-soft italic">une seule adresse</span>
          </h2>
          <p className="max-w-85 text-base leading-relaxed font-light text-lilac">
            Comme sur notre façade : chaque espace a son savoir-faire.
          </p>
        </Reveal>
        <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))]">
          {univers.map((u, i) => (
            <Reveal key={u.slot} step={1 + i * 0.5}>
              <article className="flex h-full flex-col gap-2.5 bg-lilac p-2.5 text-ink transition-transform duration-350 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5">
                <div className="relative aspect-square">
                  <ImageSlot src={u.src} alt={u.title} placeholder={u.placeholder} sizes="(min-width: 1024px) 25vw, 100vw" />
                </div>
                <div className="px-2.5 pt-3.5 pb-4">
                  <p className="mb-2.5 text-xs tracking-[0.3em] text-mauve">{u.num}</p>
                  <h3 className="mb-3 text-2xl font-normal tracking-[0.22em] uppercase">{u.title}</h3>
                  <p className="text-[15px] leading-[1.55] font-light text-pretty">{u.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrestationsSection() {
  return (
    <section id="prestations" className="mx-auto max-w-310 px-7 pt-24">
      <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className={`${eyebrow} mb-5`}>Prestations</p>
          <h2 className={h2}>
            Ce que nous <span className="text-mauve italic">proposons</span>
          </h2>
        </div>
        <p className="max-w-80 text-base leading-relaxed font-light">Tarifs détaillés en salon ou par téléphone.</p>
      </Reveal>
      <div className="grid gap-px border border-[#cfc2da] bg-[#cfc2da] [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        {prestations.map((p, i) => (
          <Reveal
            key={p.num}
            step={1 + i * 0.5}
            className="flex flex-col gap-6 bg-paper px-7 pt-8 pb-9 transition-colors hover:bg-mist"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-xl font-normal tracking-[0.22em] uppercase">{p.title}</h3>
              <span className="text-xs tracking-[0.3em] text-mauve">{p.num}</span>
            </div>
            <ul className="flex flex-col">
              {p.items.map((it) => (
                <li key={it} className="border-t border-border py-3.25 text-[17px] leading-[1.35] font-light">
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SalonSection() {
  return (
    <section
      id="salon"
      className="mx-auto grid max-w-310 items-center gap-14 px-7 py-24 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]"
    >
      <Reveal className="relative aspect-16/10">
        <ImageSlot
          src="/images/salon.jpg"
          alt="Fauteuils et miroir du salon"
          placeholder="Photo de la façade"
          className="rounded-sm"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </Reveal>
      <Reveal step={2}>
        <p className={`${eyebrow} mb-5`}>Le salon</p>
        <h2 className="mb-6 font-serif text-[clamp(40px,5vw,60px)] leading-[1.02] font-normal">
          La façade lilas
          <br />
          <span className="italic">de la rue de Meaux</span>
        </h2>
        <p className="max-w-120 text-lg leading-relaxed font-light text-pretty">
          Entre Jaurès et Laumière, LeCarréNad’ réunit coiffure et esthétique sous un même toit. Poussez la porte pour
          une coupe, un soin ou une pose d’ongles.
        </p>
      </Reveal>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-lilac py-22">
      <div className="mx-auto grid max-w-310 gap-12 px-7 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        <Reveal>
          <h2 className="mb-7 font-serif text-[clamp(44px,6vw,80px)] leading-[0.95] font-normal">
            Venez nous
            <br />
            <span className="text-plum italic">voir</span>
          </h2>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "ink", size: "pill" })}
          >
            Itinéraire
          </a>
        </Reveal>
        <Reveal step={2}>
          <dl className="border-t border-ink">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[140px_1fr] gap-4 border-b border-lilac-line py-5.5"
              >
                <dt className="text-xs tracking-[0.28em] text-plum uppercase">{row.label}</dt>
                <dd className="text-[19px] leading-[1.45]">
                  {row.value.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink p-7 text-lilac">
      <div className="mx-auto flex max-w-310 flex-wrap justify-between gap-4 text-xs tracking-[0.22em] uppercase">
        <span>LeCarréNad’ · Coiffure et esthétique</span>
        <span>19 Rue de Meaux, 75019 Paris</span>
      </div>
    </footer>
  );
}
