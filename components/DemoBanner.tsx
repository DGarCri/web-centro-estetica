// Aviso discreto: esta web es una propuesta y no la web oficial del negocio.
export default function DemoBanner() {
  return (
    <div className="bg-ink text-cream/75">
      <p className="container-x py-1.5 text-center text-[0.625rem] uppercase tracking-[0.24em] sm:text-[0.6875rem]">
        Propuesta de diseño
        <span aria-hidden className="mx-1.5 text-gold-soft">
          ·
        </span>
        <span className="sm:hidden">no oficial</span>
        <span className="hidden sm:inline">negocio ficticio, plantilla de ejemplo</span>
      </p>
    </div>
  );
}
