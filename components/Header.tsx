"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { treatments } from "@/data/treatments";
import BookButton from "./BookButton";
import { InstagramIcon, TreatmentIcon, WhatsAppIcon } from "./icons";

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Aurea Estética · Inicio" className={`block shrink-0 ${className}`}>
      <Image src="/images/logo-aurea.webp" alt="Aurea Estética" width={886} height={522} priority className="h-full w-auto" />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar el menú al navegar y bloquear el scroll mientras está abierto.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        // Sin backdrop-blur con el menú abierto: recortaría el menú (position: fixed).
        open
          ? "bg-cream"
          : scrolled
            ? "bg-cream/90 shadow-[0_1px_0_rgba(28,24,21,0.08)] backdrop-blur-md"
            : "bg-cream"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo className="h-11 lg:h-12" />

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {/* Tratamientos con desplegable (hover y foco de teclado). */}
          <div className="group relative">
            <Link
              href="/tratamientos"
              aria-current={isActive("/tratamientos") ? "page" : undefined}
              className={`flex items-center gap-1 text-[0.75rem] uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                isActive("/tratamientos") ? "text-gold" : "text-ink/75"
              }`}
            >
              Tratamientos <ChevronDown className="size-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-2xl border border-ink/10 bg-paper p-2 shadow-[0_20px_50px_-20px_rgba(28,24,21,0.25)]">
                {treatments.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/tratamientos/${t.slug}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-sand"
                    >
                      <span className="ring-icon size-9 shrink-0 text-ink/70">
                        <TreatmentIcon icon={t.icon} className="size-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-ink">{t.name}</span>
                        <span className="block text-xs text-taupe">{t.from}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.75rem] uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookButton className="!px-5 !py-3">Reservar</BookButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 flex size-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X strokeWidth={1.25} className="size-6" /> : <Menu strokeWidth={1.25} className="size-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      <div id="menu-movil" hidden={!open} className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-cream lg:hidden">
        <div className="container-x flex min-h-full flex-col pb-28 pt-4">
          <p className="eyebrow text-gold">Tratamientos</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/tratamientos/${t.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex h-full flex-col gap-2 rounded-2xl border border-ink/10 bg-paper p-3"
                >
                  <span className="ring-icon size-8 text-ink/70">
                    <TreatmentIcon icon={t.icon} className="size-4" />
                  </span>
                  <span className="text-[0.9375rem] leading-tight text-ink [overflow-wrap:anywhere]">{t.cardName ?? t.name}</span>
                  <span className="text-xs text-taupe">{t.from}</span>
                </Link>
              </li>
            ))}
          </ul>
          <nav aria-label="Menú móvil" className="mt-6">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl text-ink">
                    {item.label === "Tratamientos" ? "Todos los precios" : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-8 text-sm text-taupe">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <WhatsAppIcon className="size-4 text-whatsapp" /> {site.phone}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              aria-label="Instagram de Aurea (se abre en una pestaña nueva)"
            >
              <InstagramIcon className="size-4" /> {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
