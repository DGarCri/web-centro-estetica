import type { Treatment } from "@/data/treatments";

// Iconos de marca en SVG (lucide ya no incluye logotipos de marcas).
export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.9Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1 2.7 11.6 11.6 0 0 0 4.5 4c1.7.7 2.3.8 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

// Iconos de línea fina para cada tratamiento, en la línea de los cuatro del logo.
const paths: Record<Treatment["icon"], React.ReactNode> = {
  brow: (
    <>
      <path d="M4 10.5c2.5-2.6 6.5-3.4 10-2.4 2 .6 4 1.7 6 3.4" />
      <path d="M6 15c1.6 1.4 3.7 2 6 2s4.4-.6 6-2" />
      <circle cx="12" cy="15.2" r="1.3" />
    </>
  ),
  wave: (
    <>
      <path d="M3 12c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0 3 3 4.5 0" />
      <path d="M6 7.5c1.8-1.3 4-2 6-2s4.2.7 6 2" opacity=".6" />
      <path d="M6 16.5c1.8 1.3 4 2 6 2s4.2-.7 6-2" opacity=".6" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6.3 6.3 2.2 2.2M15.5 15.5l2.2 2.2M17.7 6.3l-2.2 2.2M8.5 15.5l-2.2 2.2" opacity=".6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  beam: (
    <>
      <path d="M5 19 15 9" />
      <path d="M13 5h6v6" />
      <path d="M4 12.5a8 8 0 0 1 7.5-8.4" opacity=".6" />
      <circle cx="5" cy="19" r="1.2" />
    </>
  ),
  lash: (
    <>
      <path d="M3 13c2.6-3.4 5.6-5 9-5s6.4 1.6 9 5" />
      <path d="M5.5 10.6 4 8.6M8.5 8.8 7.6 6.5M12 8V5.6M15.5 8.8l.9-2.3M18.5 10.6 20 8.6" />
      <path d="M3 13c2.6 2.6 5.6 3.8 9 3.8s6.4-1.2 9-3.8" opacity=".6" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3.5c3 3.6 5.5 6.8 5.5 10a5.5 5.5 0 0 1-11 0c0-3.2 2.5-6.4 5.5-10Z" />
      <path d="M9.5 14.5a2.6 2.6 0 0 0 2.5 2.4" opacity=".6" />
    </>
  ),
};

export function TreatmentIcon({ icon, className = "size-5" }: { icon: Treatment["icon"]; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[icon]}
    </svg>
  );
}
